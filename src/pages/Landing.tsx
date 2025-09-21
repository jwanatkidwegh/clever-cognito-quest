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
            Ontdek Je
            <span className="block text-primary-glow animate-pulse-glow">
              Echte IQ
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Doe onze wetenschappelijk ontworpen 10-minuten IQ test en ontdek inzichten in je cognitieve vaardigheden
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleStartTest}
              className="min-w-[240px]"
            >
              <Clock className="w-5 h-5" />
              Start Gratis 10-Minuten Test
            </Button>
            <p className="text-white/80 text-sm">Geen registratie vereist</p>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Users className="w-8 h-8 mb-4 mx-auto text-primary-glow" />
              <h3 className="font-semibold mb-2">2M+ Tests Afgenomen</h3>
              <p className="text-sm text-white/80">Vertrouwd door miljoenen wereldwijd</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Shield className="w-8 h-8 mb-4 mx-auto text-primary-glow" />
              <h3 className="font-semibold mb-2">Wetenschappelijk Gevalideerd</h3>
              <p className="text-sm text-white/80">Gebaseerd op erkende kaders</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Award className="w-8 h-8 mb-4 mx-auto text-primary-glow" />
              <h3 className="font-semibold mb-2">Officieel Certificaat</h3>
              <p className="text-sm text-white/80">Downloadbare PDF resultaten</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Wat Maakt Onze Test Bijzonder?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-card-gradient p-6 rounded-xl shadow-elegant mb-4">
                <Clock className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Snel & Nauwkeurig</h3>
                <p className="text-muted-foreground text-sm">
                  Slechts 10 minuten voor uitgebreide resultaten
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card-gradient p-6 rounded-xl shadow-elegant mb-4">
                <Brain className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Adaptief Testen</h3>
                <p className="text-muted-foreground text-sm">
                  Vragen passen zich aan je niveau aan
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card-gradient p-6 rounded-xl shadow-elegant mb-4">
                <Star className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Gedetailleerde Analyse</h3>
                <p className="text-muted-foreground text-sm">
                  Uitsplitsing per cognitief gebied
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card-gradient p-6 rounded-xl shadow-elegant mb-4">
                <Award className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Officieel Certificaat</h3>
                <p className="text-muted-foreground text-sm">
                  Professioneel PDF certificaat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-card-gradient py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Wat Zeggen Onze Gebruikers?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 shadow-elegant">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <Star className="w-5 h-5 text-gray-300" />
                </div>
                <span className="ml-2 text-sm text-muted-foreground">4/5</span>
              </div>
              <p className="text-muted-foreground mb-4">
                "Zeer nauwkeurige test! De resultaten kwamen overeen met mijn verwachtingen. Het certificaat ziet er professioneel uit."
              </p>
              <div className="font-semibold">Sarah M.</div>
              <div className="text-sm text-muted-foreground">Psycholoog</div>
            </div>
            
            <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 shadow-elegant">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <Star className="w-5 h-5 text-gray-300" />
                </div>
                <span className="ml-2 text-sm text-muted-foreground">4/5</span>
              </div>
              <p className="text-muted-foreground mb-4">
                "Snel en gemakkelijk. Perfecte manier om mijn cognitieve vaardigheden te testen. Aanrader voor iedereen!"
              </p>
              <div className="font-semibold">Mark van der Berg</div>
              <div className="text-sm text-muted-foreground">Student</div>
            </div>
            
            <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 shadow-elegant">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <Star className="w-5 h-5 text-gray-300" />
                </div>
                <span className="ml-2 text-sm text-muted-foreground">4/5</span>
              </div>
              <p className="text-muted-foreground mb-4">
                "Geweldige gedetailleerde analyse. De uitsplitsing per categorie was zeer informatief en nuttig."
              </p>
              <div className="font-semibold">Lisa de Vries</div>
              <div className="text-sm text-muted-foreground">HR Manager</div>
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