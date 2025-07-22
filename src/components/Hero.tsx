import { Button } from "@/components/ui/button";
import { Play, Award, Users, Target } from "lucide-react";
import heroImage from "@/assets/cricket-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cricket action" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master Your
            <span className="block bg-gradient-accent bg-clip-text text-transparent animate-cricket-bounce">
              Cricket Skills
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join the elite cricket academy where champions are made. Professional coaching, world-class facilities, and a path to cricket excellence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20">
              <Play className="w-5 h-5 mr-2" />
              Watch Training Videos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-scale-in">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8 text-accent mr-2" />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <p className="text-primary-foreground/80">Champions Trained</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-accent mr-2" />
                <span className="text-3xl font-bold">15</span>
              </div>
              <p className="text-primary-foreground/80">Expert Coaches</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-2">
                <Target className="w-8 h-8 text-accent mr-2" />
                <span className="text-3xl font-bold">98%</span>
              </div>
              <p className="text-primary-foreground/80">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-cricket-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;