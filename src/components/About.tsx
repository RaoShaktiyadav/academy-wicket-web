import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, BookOpen, Heart, Zap } from "lucide-react";
import facilitiesImage from "@/assets/academy-facilities.jpg";

const About = () => {
  const values = [
    {
      icon: Trophy,
      title: "Excellence",
      description: "Striving for the highest standards in cricket training and player development."
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Continuous improvement through innovative training methods and techniques."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Fostering a deep love for cricket that drives lifelong dedication to the sport."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Maximizing potential through focused training and mental conditioning."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Building Cricket 
                <span className="block text-secondary">Champions</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                For over two decades, Elite Cricket Academy has been the premier destination for aspiring cricketers. 
                Our comprehensive training programs combine traditional cricket wisdom with modern sports science to 
                develop well-rounded players.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From beginners taking their first steps to professionals refining their skills, we provide 
                personalized coaching that adapts to each player's unique journey.
              </p>
              <Button variant="cricket" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={facilitiesImage} 
              alt="Cricket academy facilities" 
              className="rounded-lg shadow-elegant w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-cricket transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;