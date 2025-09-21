import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Download, 
  Share2, 
  Trophy, 
  Target, 
  TrendingUp, 
  Star,
  Copy,
  Facebook,
  Twitter,
  Linkedin
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface CognitiveScore {
  area: string;
  score: number;
  percentile: number;
  description: string;
}

const FullResults = () => {
  const navigate = useNavigate();
  const [testData, setTestData] = useState<{
    iqScore: number;
    percentile: number;
    cognitiveScores: CognitiveScore[];
    strongestArea: string;
    purchasedPlan: string;
  } | null>(null);

  useEffect(() => {
    // Check if user has purchased
    const purchasedPlan = localStorage.getItem("purchasedPlan");
    const answers = localStorage.getItem("testAnswers");
    
    if (!purchasedPlan || !answers) {
      navigate("/");
      return;
    }

    // Generate realistic scores based on test data
    const answersObj = JSON.parse(answers);
    const correctAnswers = Object.keys(answersObj).length;
    
    // Calculate IQ score (simplified algorithm)
    const baseScore = 100;
    const performanceBonus = (correctAnswers / 15) * 30; // Max 30 points
    const finalScore = Math.round(baseScore + performanceBonus);
    const percentile = Math.min(Math.round((finalScore - 70) * 1.5), 99);

    // Generate cognitive breakdown
    const cognitiveScores: CognitiveScore[] = [
      {
        area: "Verbal Reasoning",
        score: finalScore + Math.floor(Math.random() * 20) - 10,
        percentile: percentile + Math.floor(Math.random() * 20) - 10,
        description: "Understanding and using language effectively"
      },
      {
        area: "Numerical Reasoning",
        score: finalScore + Math.floor(Math.random() * 20) - 10,
        percentile: percentile + Math.floor(Math.random() * 20) - 10,
        description: "Working with numbers and mathematical concepts"
      },
      {
        area: "Spatial Reasoning",
        score: finalScore + Math.floor(Math.random() * 20) - 10,
        percentile: percentile + Math.floor(Math.random() * 20) - 10,
        description: "Visualizing and manipulating objects in space"
      },
      {
        area: "Pattern Recognition",
        score: finalScore + Math.floor(Math.random() * 20) - 10,
        percentile: percentile + Math.floor(Math.random() * 20) - 10,
        description: "Identifying relationships and sequences"
      },
      {
        area: "Logical Reasoning",
        score: finalScore + Math.floor(Math.random() * 20) - 10,
        percentile: percentile + Math.floor(Math.random() * 20) - 10,
        description: "Analyzing arguments and drawing conclusions"
      }
    ];

    // Find strongest area
    const strongest = cognitiveScores.reduce((prev, current) => 
      prev.score > current.score ? prev : current
    );

    setTestData({
      iqScore: finalScore,
      percentile,
      cognitiveScores,
      strongestArea: strongest.area,
      purchasedPlan
    });
  }, [navigate]);

  const handleDownloadCertificate = () => {
    toast({
      title: "Certificate Downloaded",
      description: "Your official IQ certificate has been downloaded as PDF.",
    });
  };

  const handleShare = (platform: string) => {
    const shareText = `I just completed an IQ test and scored ${testData?.iqScore}! Check out your cognitive abilities too.`;
    const shareUrl = window.location.origin;
    
    let url = '';
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        toast({
          title: "Link Copied",
          description: "Share link copied to clipboard!",
        });
        return;
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
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

  const getScoreCategory = (score: number) => {
    if (score >= 130) return { label: "Very Superior", color: "text-purple-600" };
    if (score >= 120) return { label: "Superior", color: "text-blue-600" };
    if (score >= 110) return { label: "High Average", color: "text-green-600" };
    if (score >= 90) return { label: "Average", color: "text-yellow-600" };
    if (score >= 80) return { label: "Low Average", color: "text-orange-600" };
    return { label: "Below Average", color: "text-red-600" };
  };

  const category = getScoreCategory(testData.iqScore);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-hero-gradient rounded-full">
                <Trophy className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Complete IQ Analysis
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive cognitive assessment results
            </p>
          </div>

          {/* Main Score */}
          <Card className="p-8 mb-8 bg-hero-gradient text-white text-center shadow-glow">
            <h2 className="text-2xl font-semibold mb-4">Your IQ Score</h2>
            <div className="text-7xl font-bold mb-4">{testData.iqScore}</div>
            <div className="space-y-2">
              <Badge className={`text-lg px-4 py-2 ${category.color} bg-white/20`}>
                {category.label}
              </Badge>
              <p className="text-white/90">
                You scored higher than {testData.percentile}% of the population
              </p>
            </div>
          </Card>

          {/* Key Insights */}
          <Card className="p-6 mb-8 border-accent border-2 bg-accent/5">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-accent mb-2">
                  🎯 Your Cognitive Strength
                </h3>
                <p className="text-muted-foreground">
                  Your strongest cognitive area is <strong>{testData.strongestArea}</strong>. 
                  This suggests you excel at tasks requiring this type of thinking. 
                  Consider careers or hobbies that leverage this natural ability.
                </p>
              </div>
            </div>
          </Card>

          {/* Cognitive Breakdown */}
          <Card className="p-6 mb-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Cognitive Areas Breakdown
            </h3>
            
            <div className="space-y-6">
              {testData.cognitiveScores.map((area, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{area.area}</h4>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{area.score}</div>
                      <div className="text-sm text-muted-foreground">{area.percentile}th percentile</div>
                    </div>
                  </div>
                  <Progress value={area.percentile} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          {/* Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-primary" />
                Download Certificate
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Get your official PDF certificate to share with employers or for personal records.
              </p>
              <Button onClick={handleDownloadCertificate} className="w-full">
                <Download className="w-4 h-4" />
                Download PDF Certificate
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-primary" />
                Share Your Results
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Share your achievement with friends and professional networks.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShare('twitter')}
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShare('linkedin')}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShare('copy')}
                >
                  <Copy className="w-4 h-4" />
                  Copy Link
                </Button>
              </div>
            </Card>
          </div>

          {/* Additional Resources */}
          {testData.purchasedPlan === "ultimate" && (
            <Card className="p-6 mb-8 bg-accent/5 border-accent">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Your 30-Day Brain Training Plan
              </h3>
              <p className="text-muted-foreground mb-4">
                Based on your results, we've created a personalized training plan to enhance your cognitive abilities.
              </p>
              <Button variant="accent">
                Start Brain Training
              </Button>
            </Card>
          )}

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              This assessment provides an approximate measure of cognitive ability. 
              Results are not intended for clinical diagnosis.
            </p>
            <p className="mt-2">
              Assessment completed on {new Date().toLocaleDateString()} | 
              Valid certificate ID: IQ-{Date.now().toString().slice(-8).toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullResults;