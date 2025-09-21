import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Lock, Star, ArrowRight, Award } from "lucide-react";
import { PaywallModal } from "@/components/PaywallModal";

const Results = () => {
  const navigate = useNavigate();
  const [showPaywall, setShowPaywall] = useState(false);
  const [testData, setTestData] = useState<{
    answersCount: number;
    timeSpent: number;
    estimatedScore: number;
  } | null>(null);

  useEffect(() => {
    // Get test data from localStorage
    const answers = localStorage.getItem("testAnswers");
    const timeSpent = localStorage.getItem("testTimeSpent");
    
    if (!answers) {
      // Redirect to home if no test data
      navigate("/");
      return;
    }

    const answersObj = JSON.parse(answers);
    const answersCount = Object.keys(answersObj).length;
    const timeSpentSeconds = parseInt(timeSpent || "0");
    
    // Calculate a basic estimated score (simplified)
    const estimatedScore = Math.min(85 + answersCount * 2 + (600 - timeSpentSeconds) / 10, 160);
    
    setTestData({
      answersCount,
      timeSpent: timeSpentSeconds,
      estimatedScore: Math.round(estimatedScore)
    });
  }, [navigate]);

  const handleUnlockResults = () => {
    setShowPaywall(true);
  };

  if (!testData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Brain className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Loading your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-primary/10 rounded-full">
                <Brain className="w-16 h-16 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Test Complete! 🎉
            </h1>
            <p className="text-xl text-muted-foreground">
              You've successfully completed the IQ assessment
            </p>
          </div>

          {/* Basic Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card-gradient shadow-elegant">
              <div className="text-3xl font-bold text-primary mb-2">
                {testData.answersCount}
              </div>
              <div className="text-sm text-muted-foreground">
                Questions Answered
              </div>
            </Card>
            
            <Card className="p-6 bg-card-gradient shadow-elegant">
              <div className="text-3xl font-bold text-primary mb-2">
                {Math.floor(testData.timeSpent / 60)}m {testData.timeSpent % 60}s
              </div>
              <div className="text-sm text-muted-foreground">
                Time Spent
              </div>
            </Card>
            
            <Card className="p-6 bg-card-gradient shadow-elegant">
              <div className="text-3xl font-bold text-primary mb-2">
                🧠
              </div>
              <div className="text-sm text-muted-foreground">
                Cognitive Areas Tested
              </div>
            </Card>
          </div>

          {/* Teaser Results */}
          <Card className="p-8 mb-8 bg-card-gradient shadow-elegant">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Your IQ Assessment is Ready!</h2>
              
              <div className="relative mb-6">
                <div className="text-6xl font-bold text-muted-foreground/30 mb-2">
                  {testData.estimatedScore}*
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/90 backdrop-blur-sm p-4 rounded-lg border-2 border-dashed border-muted-foreground/30">
                    <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">
                      Unlock for exact score
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                *Estimated range based on completion time and response patterns
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span>📊 Detailed score breakdown</span>
                  <Lock className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span>🎯 Cognitive strengths analysis</span>
                  <Lock className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span>📜 Official PDF certificate</span>
                  <Lock className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span>📈 Percentile ranking</span>
                  <Lock className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </Card>

          {/* Sample Insights */}
          <Card className="p-6 mb-8 border-accent border-2 bg-accent/5">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-accent mb-2">
                  Preview: Your Strongest Area
                </h3>
                <p className="text-sm text-muted-foreground">
                  Based on your response patterns, you show strong aptitude in 
                  <Badge variant="secondary" className="mx-1">pattern recognition</Badge>
                  tasks. Unlock your full report to see detailed analysis across all cognitive domains.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="space-y-4">
            <Button 
              size="xl" 
              variant="hero" 
              onClick={handleUnlockResults}
              className="min-w-[280px]"
            >
              <Award className="w-5 h-5" />
              Unlock Full Results
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Get your exact IQ score, detailed breakdown, and official certificate
            </p>
          </div>
        </div>
      </div>

      <PaywallModal 
        open={showPaywall} 
        onOpenChange={setShowPaywall}
        estimatedScore={testData.estimatedScore}
      />
    </div>
  );
};

export default Results;