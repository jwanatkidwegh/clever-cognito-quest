import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EmailCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EmailCaptureModal = ({ open, onOpenChange }: EmailCaptureModalProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate email capture
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Store email in localStorage for later use
    localStorage.setItem("userEmail", email);
    setIsLoading(false);
    onOpenChange(false);
    navigate("/test");
  };

  const handleSkip = () => {
    onOpenChange(false);
    navigate("/test");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Gift className="w-6 h-6 text-primary" />
            Bewaar Je Voortgang
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              Voer je e-mailadres in om je voortgang op te slaan en je gedetailleerde resultaten te ontvangen
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mailadres</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Voer je e-mailadres in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="bg-accent/10 p-4 rounded-lg">
              <h4 className="font-semibold text-sm mb-2 text-accent">
                Wat je krijgt:
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Voortgang automatisch opgeslagen</li>
                <li>• Resultaten direct gemaild</li>
                <li>• Exclusieve bonus inzichten</li>
                <li>• Tijdelijke korting op volledig rapport</li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button type="submit" size="lg" disabled={isLoading || !email}>
                {isLoading ? "Opslaan..." : "Doorgaan met E-mail"}
              </Button>
              <Button 
                type="button" 
                variant="ghost" 
                onClick={handleSkip}
                className="text-muted-foreground"
              >
                Nu overslaan
              </Button>
            </div>
          </form>
          
          <p className="text-xs text-muted-foreground text-center">
            We respecteren je privacy. Uitschrijven kan altijd.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};