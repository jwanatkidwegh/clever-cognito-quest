import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Award, CreditCard, Zap, Crown } from "lucide-react";

interface PaywallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  estimatedScore: number;
}

const pricingPlans = [
  {
    id: "basic",
    name: "Instant Score",
    price: "€4.99",
    icon: Zap,
    popular: false,
    features: [
      "Exact IQ Score",
      "Basic percentile ranking",
      "Instant access"
    ]
  },
  {
    id: "premium",
    name: "Full Report",
    price: "€9.99",
    icon: Award,
    popular: true,
    features: [
      "Everything in Instant Score",
      "Detailed cognitive breakdown",
      "Downloadable PDF certificate",
      "Strengths & improvement areas",
      "Shareable results"
    ]
  },
  {
    id: "ultimate",
    name: "Report + Training",
    price: "€14.99",
    icon: Crown,
    popular: false,
    features: [
      "Everything in Full Report",
      "30-day brain training access",
      "Personalized training plan",
      "Progress tracking",
      "Monthly retests"
    ]
  }
];

export const PaywallModal = ({ open, onOpenChange, estimatedScore }: PaywallModalProps) => {
  const [selectedPlan, setSelectedPlan] = useState("premium");
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handlePurchase = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Store purchase info
    localStorage.setItem("purchasedPlan", selectedPlan);
    localStorage.setItem("purchaseDate", new Date().toISOString());
    
    setIsProcessing(false);
    onOpenChange(false);
    navigate("/full-results");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Unlock Your Complete IQ Analysis
          </DialogTitle>
          <p className="text-center text-muted-foreground mt-2">
            Your estimated score: <span className="font-semibold text-primary">{estimatedScore}+</span> - Get your exact results now
          </p>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Why Pay Section */}
          <Card className="p-4 bg-accent/5 border-accent/20">
            <h3 className="font-semibold text-accent mb-3">Why unlock your results?</h3>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span>Scientifically validated scoring</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span>Professional-grade analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span>Detailed cognitive insights</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span>Official certification</span>
              </div>
            </div>
          </Card>

          {/* Pricing Plans */}
          <div className="grid md:grid-cols-3 gap-4">
            {pricingPlans.map((plan) => {
              const Icon = plan.icon;
              const isSelected = selectedPlan === plan.id;
              
              return (
                <Card 
                  key={plan.id}
                  className={`relative p-6 cursor-pointer transition-all ${
                    isSelected 
                      ? 'border-primary bg-primary/5 shadow-elegant' 
                      : 'hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="text-center">
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${
                      isSelected ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    
                    <h3 className="font-semibold mb-2">{plan.name}</h3>
                    <div className="text-2xl font-bold text-primary mb-4">
                      {plan.price}
                    </div>
                    
                    <ul className="space-y-2 text-sm">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {isSelected && (
                    <div className="absolute inset-0 border-2 border-primary rounded-lg pointer-events-none" />
                  )}
                </Card>
              );
            })}
          </div>

          {/* Sample Certificate Preview */}
          <Card className="p-4 bg-muted/30">
            <h4 className="font-semibold mb-3 text-center">Sample Certificate Preview</h4>
            <div className="bg-white border border-muted rounded-lg p-6 text-center shadow-sm">
              <div className="text-lg font-bold mb-2">Official IQ Assessment Certificate</div>
              <div className="text-sm text-muted-foreground mb-4">
                This certifies that [Your Name] has completed a comprehensive IQ assessment
              </div>
              <div className="text-3xl font-bold text-primary mb-2">Score: XXX</div>
              <div className="text-sm">Percentile: XX% | Date: {new Date().toLocaleDateString()}</div>
            </div>
          </Card>

          {/* Purchase Button */}
          <div className="space-y-4">
            <Button 
              size="xl" 
              variant="hero"
              onClick={handlePurchase}
              disabled={isProcessing}
              className="w-full"
            >
              <CreditCard className="w-5 h-5" />
              {isProcessing ? "Processing..." : `Unlock Now - ${pricingPlans.find(p => p.id === selectedPlan)?.price}`}
            </Button>
            
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Secure payment • 30-day money-back guarantee • Instant access
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Questions? This is an approximate measure, not a clinical diagnosis
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};