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
            Save Your Progress
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              Enter your email to save your progress and receive your detailed results
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="bg-accent/10 p-4 rounded-lg">
              <h4 className="font-semibold text-sm mb-2 text-accent">
                What you'll get:
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Progress automatically saved</li>
                <li>• Results emailed instantly</li>
                <li>• Exclusive bonus insights</li>
                <li>• Limited-time discount on full report</li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button type="submit" size="lg" disabled={isLoading || !email}>
                {isLoading ? "Saving..." : "Continue with Email"}
              </Button>
              <Button 
                type="button" 
                variant="ghost" 
                onClick={handleSkip}
                className="text-muted-foreground"
              >
                Skip for now
              </Button>
            </div>
          </form>
          
          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};