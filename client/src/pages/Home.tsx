import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { 
  Coffee, 
  Leaf, 
  Heart, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram,
  Star,
  Quote
} from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-semibold text-primary hover:opacity-80 transition-opacity">
            Plaisir Partagé
          </a>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">Le Lieu</a>
            <a href="#menu" className="text-foreground/80 hover:text-primary transition-colors font-medium">Notre Menu</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors font-medium">Avis</a>
            <Button asChild variant="secondary" className="rounded-full px-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <a href="#contact">Réserver</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left z-10"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary-foreground/80 text-sm font-medium mb-6">
              Brunch & Café à Watermael-Boitsfort
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6 text-foreground">
              Le Brunch <br />
              <span className="text-primary italic">Incontournable</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 font-light">
              Une cuisine fraîche, savoureuse et bio pour des moments suspendus. Venez partager un instant de douceur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full text-base h-14 px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300">
                <a href="#menu">Voir le Menu</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-base h-14 px-8 border-2 hover:bg-secondary/10 hover:text-secondary-foreground hover:border-secondary transition-all duration-300">
                <a href="https://wa.me/32486225017" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4" />
                  Réserver via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-accent/20 blob-shape-1 transform rotate-12 scale-105 z-0 blur-2xl"></div>
            {/* aesthetic top-down brunch layout */}
            <img 
              src="data:image/jpeg;base64,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"
            />
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 sm:bottom-10 sm:-left-10 z-20 bg-card p-4 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="bg-primary/20 p-3 rounded-full text-primary">
                <Star className="h-6 w-6 fill-current" />
              </div>
              <div>
                <p className="font-display font-bold text-xl leading-none">4.8/5</p>
                <p className="text-sm text-muted-foreground">Avis clients</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-card relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeIn}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] -rotate-3 z-0"></div>
              {/* cozy cafe interior */}
              <img 
                src="https://assets.grok.com/users/70b49081-2200-4973-b73a-69d82707c366/generated/78365e92-88c7-4a34-903a-fdba6cdc489e/image.jpg" 
                alt="Intérieur chaleureux du restaurant" 
                className="relative z-10 rounded-[2.5rem] shadow-xl w-full object-cover aspect-square"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl mb-6">Un lieu <span className="text-secondary italic">chaleureux</span> au cœur de Bruxelles</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Plaisir Partagé n'est pas qu'un restaurant, c'est un espace de vie. Un lieu accueillant où l'on se sent aussi bien que les plats que l'on y déguste. 
                Notre engagement ? Vous offrir une parenthèse gourmande inoubliable.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg mb-1">100% Bio & Frais</h4>
                    <p className="text-sm text-muted-foreground">Des produits de saison sélectionnés avec soin.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-xl text-secondary mt-1">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg mb-1">Fait Maison</h4>
                    <p className="text-sm text-muted-foreground">Chaque plat est préparé avec amour sur place.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:col-span-2">
                  <div className="bg-accent/20 p-3 rounded-xl text-accent-foreground mt-1">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg mb-1">Inclusif & Bienveillant</h4>
                    <p className="text-sm text-muted-foreground">Un safe space LGBTQ+ friendly où chacun·e est le·la bienvenu·e, tel·le qu'iel est.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Notre Menu <span className="text-primary italic">Signature</span></h2>
            <p className="text-muted-foreground text-lg">
              Des options gourmandes, végétariennes et saines, allant de 10€ à 20€. Mangez sur place ou à emporter.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Menu Item 1 */}
            <motion.div variants={fadeIn} className="bg-card rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50 group flex flex-col">
              <div className="h-48 w-full rounded-2xl overflow-hidden mb-6 relative shrink-0">
                {/* salmon toast or brunch */}
                <img 
                  src="https://www.istockphoto.com/en/photo/table-full-of-various-fresh-food-in-luxury-modern-restaurant-gm1457259411-492086731?searchscope=image%2Cfilm" 
                  alt="Formule Brunch" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur text-foreground font-semibold px-3 py-1 rounded-full text-sm">
                  18€ - 20€
                </div>
              </div>
              <h3 className="text-2xl font-display mb-2">Formule Brunch</h3>
              <p className="text-muted-foreground mb-4">L'expérience complète : boisson chaude, jus frais, assiette salée et douceur sucrée du jour.</p>
            </motion.div>

            {/* Menu Item 2 */}
            <motion.div variants={fadeIn} className="bg-card rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50 group flex flex-col">
              <div className="h-48 w-full rounded-2xl overflow-hidden mb-6 relative shrink-0">
                {/* quiche slice */}
                <img 
                  src="https://www.istockphoto.com/en/photo/crepes-thin-pancakes-with-cream-cheese-ricotta-and-fresh-strawberries-marble-gm2179326131-598532053?searchscope=image%2Cfilm" 
                  alt="Quiches Maison" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur text-foreground font-semibold px-3 py-1 rounded-full text-sm">
                  12€ - 15€
                </div>
              </div>
              <h3 className="text-2xl font-display mb-2">Quiches de Saison</h3>
              <p className="text-muted-foreground mb-4">Nos fameuses quiches, préparées chaque matin avec les légumes bio du marché. Option végé toujours dispo !</p>
            </motion.div>

            {/* Menu Item 3 */}
            <motion.div variants={fadeIn} className="bg-card rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50 group flex flex-col">
              <div className="h-48 w-full rounded-2xl overflow-hidden mb-6 relative shrink-0">
                {/* avocado toast or salad */}
                <img 
                  src="https://www.istockphoto.com/en/photo/breakfast-coffee-table-gm1772714735-546002409?searchscope=image%2Cfilm" 
                  alt="Toasts & Salades" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur text-foreground font-semibold px-3 py-1 rounded-full text-sm">
                  10€ - 16€
                </div>
              </div>
              <h3 className="text-2xl font-display mb-2">Toasts Saumon & Végé</h3>
              <p className="text-muted-foreground mb-4">Pain au levain, saumon fumé de qualité, avocat frais ou options 100% végétales pleines de couleurs.</p>
            </motion.div>
          </motion.div>
          
          <div className="mt-12 text-center">
             <Button asChild variant="outline" className="rounded-full px-8 h-12 text-base">
                <a href="#contact">Venez goûter par vous-même</a>
             </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 lg:py-32 bg-primary/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl mb-4">Ce qu'iels en <span className="text-secondary italic">disent</span></h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div {...fadeIn} className="bg-card p-8 rounded-3xl shadow-sm border border-primary/10 relative">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20 rotate-180" />
              <div className="flex gap-1 text-accent mb-6">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-lg text-foreground mb-6 italic">"On a mangé comme des reines ! Les portions sont généreuses et le personnel est d'une gentillesse incroyable."</p>
              <p className="font-semibold text-muted-foreground">— Camille & Sophie</p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-card p-8 rounded-3xl shadow-sm border border-primary/10 relative">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20 rotate-180" />
              <div className="flex gap-1 text-accent mb-6">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-lg text-foreground mb-6 italic">"Un vrai plaisir pour les yeux et les papilles. Mention spéciale pour la quiche aux légumes de saison."</p>
              <p className="font-semibold text-muted-foreground">— Thomas L.</p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="bg-card p-8 rounded-3xl shadow-sm border border-primary/10 relative lg:col-span-1 md:col-span-2 md:w-1/2 lg:w-full md:mx-auto lg:mx-0">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20 rotate-180" />
              <div className="flex gap-1 text-accent mb-6">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-lg text-foreground mb-6 italic">"Le meilleur brunch de Watermael-Boitsfort, sans aucun doute. L'ambiance est chill et le café est parfait."</p>
              <p className="font-semibold text-muted-foreground">— Sarah M.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-card pt-20 pb-10 border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            
            {/* Info Side */}
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-display mb-8">Venez nous <span className="text-primary italic">voir</span></h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 group">
                  <div className="bg-background p-3 rounded-full shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Adresse</h4>
                    <p className="text-muted-foreground">Rue du Ministre 26,<br/>1170 Watermael-Boitsfort</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-background p-3 rounded-full shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Heures d'ouverture</h4>
                    <p className="text-muted-foreground">À partir de 9h00, le jeudi.</p>
                    <span className="inline-block mt-1 text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-md">Sur place ou à emporter (pas de livraison)</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-background p-3 rounded-full shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Contact</h4>
                    <a href="tel:026733746" className="text-muted-foreground hover:text-primary transition-colors">02 673 37 46</a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-muted rounded-3xl overflow-hidden shadow-inner relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                  <MapPin className="h-8 w-8 mb-2 opacity-50" />
                  <span className="text-sm font-medium">Carte Google Maps</span>
                </div>
                {/* In a real app, embed iframe here */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.4385150821865!2d4.4077673!3d50.8038753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c5c163013d11%3A0x6e788bc27db30058!2sRue%20du%20Ministre%2026%2C%201170%20Watermael-Boitsfort!5e0!3m2!1sfr!2sbe!4v1700000000000!5m2!1sfr!2sbe" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="relative z-10"
                ></iframe>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-background p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-border/50">
              <h3 className="text-2xl font-display mb-2">Une question ? Une réservation ?</h3>
              <p className="text-muted-foreground mb-8">Envoyez-nous un petit mot, nous vous répondrons avec plaisir.</p>
              <ContactForm />
            </motion.div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/60">
            <p className="font-display font-semibold text-xl text-primary mb-4 md:mb-0">Plaisir Partagé</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Plaisir Partagé.</p>
              <span className="w-1 h-1 bg-muted-foreground/30 rounded-full"></span>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
