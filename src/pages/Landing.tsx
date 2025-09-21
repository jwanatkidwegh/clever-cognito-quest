import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Star, Award, Clock, Users, Shield } from "lucide-react";
import { EmailCaptureModal } from "@/components/EmailCaptureModal";

const Landing = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);

  const handleStartTest = () => {
    setShowEmailModal(true);
  };

  return (
    <div className="min-h-screen bg-hero-gradient">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-full">
              <Brain className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Your
            <span className="block text-primary-glow animate-pulse-glow">
              True IQ
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Take our scientifically designed 10-minute IQ test and unlock insights into your cognitive abilities
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleStartTest}
              className="min-w-[240px]"
            >
              <Clock className="w-5 h-5" />
              Start Free 10-Minute Test
            </Button>
            <p className="text-white/80 text-sm">No registration required</p>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Users className="w-8 h-8 mb-4 mx-auto text-primary-glow" />
              <h3 className="font-semibold mb-2">2M+ Tests Taken</h3>
              <p className="text-sm text-white/80">Trusted by millions worldwide</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Shield className="w-8 h-8 mb-4 mx-auto text-primary-glow" />
              <h3 className="font-semibold mb-2">Scientifically Validated</h3>
              <p className="text-sm text-white/80">Based on recognized frameworks</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Award className="w-8 h-8 mb-4 mx-auto text-primary-glow" />
              <h3 className="font-semibold mb-2">Official Certificate</h3>
              <p className="text-sm text-white/80">Downloadable PDF results</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Makes Our Test Special?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-card-gradient p-6 rounded-xl shadow-elegant mb-4">
                <Clock className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Quick & Accurate</h3>
                <p className="text-muted-foreground text-sm">
                  Just 10 minutes for comprehensive results
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card-gradient p-6 rounded-xl shadow-elegant mb-4">
                <Brain className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Adaptive Testing</h3>
                <p className="text-muted-foreground text-sm">
                  Questions adapt to your skill level
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card-gradient p-6 rounded-xl shadow-elegant mb-4">
                <Star className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Detailed Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Breakdown by cognitive areas
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card-gradient p-6 rounded-xl shadow-elegant mb-4">
                <Award className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Official Certificate</h3>
                <p className="text-muted-foreground text-sm">
                  Professional PDF certificate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EmailCaptureModal 
        open={showEmailModal} 
        onOpenChange={setShowEmailModal}
      />
    </div>
  );
};

export default Landing;