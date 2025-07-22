import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-field">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Start Your Cricket Journey
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Ready to take your cricket skills to the next level? Get in touch with us today 
            and begin your transformation into a cricket champion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-primary mb-2 block">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div>
                <label className="text-sm font-medium text-primary mb-2 block">Phone</label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
              <div>
                <label className="text-sm font-medium text-primary mb-2 block">Program Interest</label>
                <select className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md">
                  <option>Select a program</option>
                  <option>Junior Development</option>
                  <option>Elite Performance</option>
                  <option>Professional Prep</option>
                  <option>Custom Program</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-primary mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your cricket experience and goals..." 
                  className="min-h-[100px]"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Address</p>
                      <p className="text-muted-foreground">123 Cricket Lane, Sports City, SC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Email</p>
                      <p className="text-muted-foreground">info@elitecricket.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Hours</p>
                      <p className="text-muted-foreground">Mon-Fri: 6AM-9PM, Sat-Sun: 7AM-6PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="cricket" className="w-full justify-start">
                    Schedule a Trial Session
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Download Brochure
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    View Facilities Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;