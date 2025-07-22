import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users } from "lucide-react";
import coachImage from "@/assets/coach-training.jpg";

const Coaches = () => {
  const coaches = [
    {
      name: "Michael Anderson",
      title: "Head Coach & Former International Player",
      experience: "15 years",
      specialization: "Batting & Strategy",
      achievements: ["International Cricket", "50+ Test Matches", "World Cup Winner"],
      description: "Former opening batsman with extensive experience in international cricket."
    },
    {
      name: "Sarah Williams",
      title: "Bowling Coach & Biomechanics Expert",
      experience: "12 years",
      specialization: "Fast Bowling & Technique",
      achievements: ["Sports Science PhD", "Olympic Coach", "500+ Wickets"],
      description: "Specialist in fast bowling techniques and injury prevention through proper biomechanics."
    },
    {
      name: "Rajesh Kumar",
      title: "Spin Bowling & Mental Coach",
      experience: "18 years",
      specialization: "Spin Bowling & Psychology",
      achievements: ["County Cricket", "Mental Performance", "Youth Development"],
      description: "Expert in spin bowling variations and mental conditioning for peak performance."
    }
  ];

  return (
    <section id="coaches" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Meet Our Expert Coaches
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from the best. Our coaching team brings together decades of professional 
            experience and proven teaching methods.
          </p>
        </div>

        {/* Featured Coach Section */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-elegant">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={coachImage} 
                  alt="Professional cricket coaching" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-secondary text-secondary-foreground">
                  Featured Coach
                </Badge>
                <h3 className="text-3xl font-bold text-primary mb-4">
                  World-Class Training Experience
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Our coaches have trained over 500 cricketers, including multiple international 
                  players and domestic champions. Experience personalized coaching that adapts 
                  to your unique playing style and goals.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-secondary">500+</div>
                    <div className="text-sm text-muted-foreground">Players Trained</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">25+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">15</div>
                    <div className="text-sm text-muted-foreground">International Players</div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Coach Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <Card 
              key={index} 
              className="hover:shadow-cricket transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {coach.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-2">{coach.name}</h3>
                <p className="text-secondary font-medium mb-3">{coach.title}</p>
                <p className="text-muted-foreground text-sm mb-4">{coach.description}</p>

                {/* Stats */}
                <div className="flex justify-center space-x-6 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-accent" />
                    <span>{coach.experience}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-accent" />
                    <span>{coach.specialization}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  {coach.achievements.map((achievement, idx) => (
                    <Badge key={idx} variant="outline" className="mr-1 mb-1 text-xs">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;