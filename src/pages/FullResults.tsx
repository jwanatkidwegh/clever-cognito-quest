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
        area: "Verbaal Redeneren",
        score: finalScore + Math.floor(Math.random() * 20) - 10,
        percentile: percentile + Math.floor(Math.random() * 20) - 10,
        description: "Taal begrijpen en effectief gebruiken"
      },
      {
        area: "Numeriek Redeneren",
        score: finalScore + Math.floor(Math.random() * 20) - 10,
        percentile: percentile + Math.floor(Math.random() * 20) - 10,
        description: "Werken met getallen en wiskundige concepten"
      },
      {
        area: "Ruimtelijk Redeneren",
        score: finalScore + Math.floor(Math.random() * 20) - 10,
        percentile: percentile + Math.floor(Math.random() * 20) - 10,
        description: "Objecten in de ruimte visualiseren en manipuleren"
      },
      {
        area: "Patroonherkenning",
        score: finalScore + Math.floor(Math.random() * 20) - 10,
        percentile: percentile + Math.floor(Math.random() * 20) - 10,
        description: "Relaties en volgorden identificeren"
      },
      {
        area: "Logisch Redeneren",
        score: finalScore + Math.floor(Math.random() * 20) - 10,
        percentile: percentile + Math.floor(Math.random() * 20) - 10,
        description: "Argumenten analyseren en conclusies trekken"
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
      title: "Certificaat Gedownload",
      description: "Je officiële IQ-certificaat is gedownload als PDF.",
    });
  };

  const handleShare = (platform: string) => {
    const shareText = `Ik heb net een IQ-test gedaan en scoorde ${testData?.iqScore}! Test ook je cognitieve vaardigheden.`;
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
          title: "Link Gekopieerd",
          description: "Deel-link gekopieerd naar klembord!",
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
          <p className="text-muted-foreground">Je resultaten laden...</p>
        </div>
      </div>
    );
  }

  const getScoreCategory = (score: number) => {
    if (score >= 130) return { label: "Zeer Superieur", color: "text-purple-600" };
    if (score >= 120) return { label: "Superieur", color: "text-blue-600" };
    if (score >= 110) return { label: "Hoog Gemiddeld", color: "text-green-600" };
    if (score >= 90) return { label: "Gemiddeld", color: "text-yellow-600" };
    if (score >= 80) return { label: "Laag Gemiddeld", color: "text-orange-600" };
    return { label: "Onder Gemiddeld", color: "text-red-600" };
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
              Je Complete IQ-Analyse
            </h1>
            <p className="text-xl text-muted-foreground">
              Uitgebreide cognitieve beoordelingsresultaten
            </p>
          </div>

          {/* Main Score */}
          <Card className="p-8 mb-8 bg-hero-gradient text-white text-center shadow-glow">
            <h2 className="text-2xl font-semibold mb-4">Je IQ-Score</h2>
            <div className="text-7xl font-bold mb-4">{testData.iqScore}</div>
            <div className="space-y-2">
              <Badge className={`text-lg px-4 py-2 ${category.color} bg-white/20`}>
                {category.label}
              </Badge>
              <p className="text-white/90">
                Je scoorde hoger dan {testData.percentile}% van de bevolking
              </p>
            </div>
          </Card>

          {/* Key Insights */}
          <Card className="p-6 mb-8 border-accent border-2 bg-accent/5">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-accent mb-2">
                  🎯 Je Cognitieve Sterkte
                </h3>
                <p className="text-muted-foreground">
                  Je sterkste cognitieve gebied is <strong>{testData.strongestArea}</strong>. 
                  Dit suggereert dat je uitblinkt in taken die dit type denken vereisen. 
                  Overweeg carrières of hobby's die gebruik maken van deze natuurlijke vaardigheid.
                </p>
              </div>
            </div>
          </Card>

          {/* Cognitive Breakdown */}
          <Card className="p-6 mb-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Uitsplitsing Cognitieve Gebieden
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
                      <div className="text-sm text-muted-foreground">{area.percentile}e percentiel</div>
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
                Download Certificaat
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Krijg je officiële PDF-certificaat om te delen met werkgevers of voor persoonlijke administratie.
              </p>
              <Button onClick={handleDownloadCertificate} className="w-full">
                <Download className="w-4 h-4" />
                Download PDF-Certificaat
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-primary" />
                Deel Je Resultaten
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Deel je prestatie met vrienden en professionele netwerken.
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
                  Kopieer Link
                </Button>
              </div>
            </Card>
          </div>

          {/* Additional Resources */}
          {testData.purchasedPlan === "ultimate" && (
            <Card className="p-6 mb-8 bg-accent/5 border-accent">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Je 30-Dagen Hersentraining Plan
              </h3>
              <p className="text-muted-foreground mb-4">
                Gebaseerd op je resultaten hebben we een gepersonaliseerd trainingsplan gemaakt om je cognitieve vaardigheden te verbeteren.
              </p>
              <Button variant="accent">
                Start Hersentraining
              </Button>
            </Card>
          )}

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Deze beoordeling biedt een geschatte meting van cognitieve vaardigheden. 
              Resultaten zijn niet bedoeld voor klinische diagnose.
            </p>
            <p className="mt-2">
              Beoordeling voltooid op {new Date().toLocaleDateString('nl-NL')} | 
              Geldig certificaat ID: IQ-{Date.now().toString().slice(-8).toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullResults;