import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Calendar } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Junior Development",
      description: "Perfect foundation for young cricketers aged 8-14. Focus on basic skills, technique, and love for the game.",
      duration: "3 months",
      participants: "8-12 players",
      level: "Beginner",
      features: ["Basic batting & bowling", "Fielding fundamentals", "Match awareness", "Fitness training"],
      price: "$299",
      popular: false
    },
    {
      title: "Elite Performance",
      description: "Advanced training for serious cricketers aiming for competitive play and professional development.",
      duration: "6 months",
      participants: "6-8 players",
      level: "Advanced",
      features: ["Advanced techniques", "Mental conditioning", "Match strategy", "Video analysis", "1-on-1 coaching"],
      price: "$899",
      popular: true
    },
    {
      title: "Professional Prep",
      description: "Intensive program for players preparing for trials, tournaments, and professional cricket careers.",
      duration: "12 months",
      participants: "4-6 players",
      level: "Professional",
      features: ["Elite coaching", "Strength & conditioning", "Sports psychology", "Career guidance", "Tournament preparation"],
      price: "$1,599",
      popular: false
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Training Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect program to match your skill level and cricket aspirations. 
            Each program is designed to accelerate your development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-elegant transition-all duration-300 animate-fade-in ${
                program.popular ? 'ring-2 ring-secondary scale-105' : ''
              }`} 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {program.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-primary mb-2">{program.title}</CardTitle>
                <p className="text-muted-foreground">{program.description}</p>
                <div className="text-3xl font-bold text-secondary mt-4">
                  {program.price}
                  <span className="text-sm text-muted-foreground font-normal">/program</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Program Details */}
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">Duration: {program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">Group size: {program.participants}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">Level: {program.level}</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant={program.popular ? "hero" : "cricket"} 
                  className="w-full"
                  size="lg"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a customized program? We offer personalized training plans.
          </p>
          <Button variant="outline" size="lg">
            Contact for Custom Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;