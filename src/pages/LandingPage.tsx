import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Car, 
  Shield, 
  Brain, 
  Bell, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  FileCheck,
  Sparkles,
  ArrowRight,
  BarChart3,
  AlertTriangle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Predictions",
    description: "Predict vehicle inspection outcomes before they happen with 94% accuracy"
  },
  {
    icon: Shield,
    title: "Compliance Monitoring",
    description: "Real-time tracking of registration, insurance, and fitness certificates"
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Automated notifications for expiring documents and predicted failures"
  },
  {
    icon: BarChart3,
    title: "Fleet Analytics",
    description: "Comprehensive dashboards with actionable insights for fleet managers"
  }
];

const stats = [
  { value: "50K+", label: "Vehicles Managed" },
  { value: "94%", label: "Prediction Accuracy" },
  { value: "30%", label: "Cost Reduction" },
  { value: "99.9%", label: "Uptime" }
];

const aiInsights = [
  {
    icon: AlertTriangle,
    title: "Predictive Failure Detection",
    description: "Our AI analyzes historical data, maintenance patterns, and vehicle age to predict which cars are likely to fail their next inspection.",
    color: "text-warning"
  },
  {
    icon: TrendingUp,
    title: "Risk Scoring",
    description: "Each vehicle receives a dynamic risk score based on compliance history, document status, and AI analysis.",
    color: "text-ai-prediction"
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description: "Get actionable recommendations to improve fleet compliance and reduce operational costs.",
    color: "text-success"
  }
];

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate sign in
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
      });
      navigate("/dashboard");
    }, 1000);
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate sign up
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created!",
        description: "Welcome to AutoComply AI. Let's get started.",
      });
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-ai-prediction/5 to-success/5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ai-prediction/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <nav className="flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">AutoComply AI</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#ai-insights" className="text-muted-foreground hover:text-foreground transition-colors">AI Insights</a>
              <a href="#auth" className="text-muted-foreground hover:text-foreground transition-colors">Get Started</a>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai-prediction/10 border border-ai-prediction/20">
                <Sparkles className="h-4 w-4 text-ai-prediction" />
                <span className="text-sm font-medium text-ai-prediction">AI-Powered Compliance Management</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Smart Vehicle <br />
                <span className="bg-gradient-to-r from-primary to-ai-prediction bg-clip-text text-transparent">
                  Compliance System
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Harness the power of AI to predict inspection failures, automate compliance tracking, 
                and keep your fleet roadworthy with intelligent alerts and analytics.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2" onClick={() => document.getElementById('auth')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <FileCheck className="h-4 w-4" /> View Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Auth Card */}
            <div id="auth" className="lg:pl-12">
              <Card className="glass-card border-border/50 shadow-2xl">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl">Welcome</CardTitle>
                  <CardDescription>Sign in to your account or create a new one</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="signin" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="signin">Sign In</TabsTrigger>
                      <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="signin">
                      <form onSubmit={handleSignIn} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email-signin">Email</Label>
                          <Input 
                            id="email-signin" 
                            type="email" 
                            placeholder="name@company.com" 
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="password-signin">Password</Label>
                            <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
                          </div>
                          <Input 
                            id="password-signin" 
                            type="password" 
                            placeholder="••••••••" 
                            required 
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                          {isLoading ? "Signing in..." : "Sign In"}
                        </Button>
                      </form>
                    </TabsContent>
                    
                    <TabsContent value="signup">
                      <form onSubmit={handleSignUp} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstname">First Name</Label>
                            <Input id="firstname" placeholder="John" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastname">Last Name</Label>
                            <Input id="lastname" placeholder="Doe" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input id="company" placeholder="Acme Fleet Services" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email-signup">Email</Label>
                          <Input 
                            id="email-signup" 
                            type="email" 
                            placeholder="name@company.com" 
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password-signup">Password</Label>
                          <Input 
                            id="password-signup" 
                            type="password" 
                            placeholder="••••••••" 
                            required 
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                          {isLoading ? "Creating account..." : "Create Account"}
                        </Button>
                        <p className="text-xs text-center text-muted-foreground">
                          By signing up, you agree to our{" "}
                          <a href="#" className="text-primary hover:underline">Terms of Service</a>
                          {" "}and{" "}
                          <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                        </p>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything You Need for Fleet Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to manage vehicle compliance, powered by artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Insights Section */}
      <section id="ai-insights" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai-prediction/10 border border-ai-prediction/20 mb-6">
                <Brain className="h-4 w-4 text-ai-prediction" />
                <span className="text-sm font-medium text-ai-prediction">AI-Powered Intelligence</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Predictive Insights That <br />
                <span className="text-ai-prediction">Save You Money</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our machine learning models analyze thousands of data points to predict compliance issues 
                before they become costly problems. Stay ahead with intelligent recommendations.
              </p>

              <div className="space-y-6">
                {aiInsights.map((insight) => (
                  <div key={insight.title} className="flex gap-4">
                    <div className={`h-10 w-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 ${insight.color}`}>
                      <insight.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{insight.title}</h4>
                      <p className="text-sm text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Demo Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-ai-prediction/20 to-primary/20 rounded-3xl blur-3xl" />
              <Card className="relative glass-card border-ai-prediction/30 overflow-hidden">
                <CardHeader className="border-b border-border/50 bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-ai-prediction/20 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-ai-prediction" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">AI Risk Analysis</CardTitle>
                      <CardDescription>Real-time vehicle assessment</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">KA-05-MN-1234</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-warning/20 text-warning font-medium">High Risk</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Predicted to fail inspection in 15 days based on maintenance history and age
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">MH-12-AB-5678</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-success/20 text-success font-medium">Low Risk</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Well maintained. 98% probability of passing next inspection
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-ai-prediction/10 border border-ai-prediction/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Fleet Summary</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-ai-prediction/20 text-ai-prediction font-medium">3 Insights</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      3 vehicles require attention in the next 30 days
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-ai-prediction/5 to-success/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Fleet Compliance?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of fleet managers who trust AutoComply AI to keep their vehicles roadworthy and compliant.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2" onClick={() => document.getElementById('auth')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Users className="h-4 w-4" /> Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Car className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">AutoComply AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 AutoComply AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
