import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">CA</span>
              </div>
              <h3 className="text-2xl font-bold">Elite Cricket Academy</h3>
            </div>
            <p className="text-primary-foreground/80">
              Transforming passionate cricketers into champions through expert coaching, 
              world-class facilities, and personalized training programs.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <Youtube className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-primary-foreground/80 hover:text-accent transition-colors">Programs</a></li>
              <li><a href="#coaches" className="text-primary-foreground/80 hover:text-accent transition-colors">Coaches</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Junior Development</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Elite Performance</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Professional Prep</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Summer Camps</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Private Coaching</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">123 Cricket Lane, Sports City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">info@elitecricket.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Elite Cricket Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;