import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Clock, AlertCircle } from "lucide-react";
import { questionBank } from "@/data/questions";

const TEST_DURATION = 10 * 60; // 10 minutes in seconds

const Test = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time's up - auto submit
          handleFinishTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer) return;
    
    // Save answer
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: selectedAnswer
    }));
    
    setSelectedAnswer("");
    
    if (currentQuestion < questionBank.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleFinishTest();
    }
  };

  const handleFinishTest = () => {
    // Save final answer if one is selected
    const finalAnswers = selectedAnswer 
      ? { ...answers, [currentQuestion]: selectedAnswer }
      : answers;
    
    // Store results
    localStorage.setItem("testAnswers", JSON.stringify(finalAnswers));
    localStorage.setItem("testTimeSpent", (TEST_DURATION - timeLeft).toString());
    
    navigate("/results");
  };

  const progress = ((currentQuestion + 1) / questionBank.length) * 100;
  const question = questionBank[currentQuestion];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold">IQ Test</h1>
              <div className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questionBank.length}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
                timeLeft < 120 ? 'bg-warning/10 text-warning' : 'bg-muted'
              }`}>
                <Clock className="w-4 h-4" />
                <span className="font-mono font-semibold">
                  {formatTime(timeLeft)}
                </span>
              </div>
              
              {timeLeft < 120 && (
                <div className="flex items-center gap-1 text-warning text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>Running out of time!</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 shadow-elegant">
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium mb-4">
                  {question.category}
                </div>
                <h2 className="text-xl md:text-2xl font-semibold mb-6">
                  {question.question}
                </h2>
                
                {question.image && (
                  <div className="mb-6">
                    <img 
                      src={question.image} 
                      alt="Question visual" 
                      className="mx-auto max-w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
              
              <div className="grid gap-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`p-4 text-left rounded-lg border-2 transition-all ${
                      selectedAnswer === option
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === option
                          ? 'border-primary bg-primary'
                          : 'border-muted-foreground'
                      }`}>
                        {selectedAnswer === option && (
                          <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="flex justify-between items-center pt-6">
                <div className="text-sm text-muted-foreground">
                  No backtracking allowed once answered
                </div>
                
                <Button 
                  onClick={handleNextQuestion}
                  disabled={!selectedAnswer}
                  size="lg"
                >
                  {currentQuestion < questionBank.length - 1 ? 'Next Question' : 'Finish Test'}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Test;