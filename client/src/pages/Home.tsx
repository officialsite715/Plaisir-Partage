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
                <a href="tel:026733746">
                  <Phone className="mr-2 h-4 w-4" />
                  Nous Appeler
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
              src="https://pixabay.com/get/gd3c5ccfbaf18bf1c31b72470d08fb98fd9dbf6f468523994642832e1f92ae821656e4e36ff1995b0365fddcbbcf4f65fc384a71ef54aaa522b49736f1b19a875_1280.jpg" 
              alt="Délicieux brunch Plaisir Partagé" 
              className="relative z-10 w-full max-w-md lg:max-w-full h-auto aspect-[4/5] object-cover blob-shape-2 shadow-2xl shadow-black/10 border-8 border-card"
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
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" 
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
                  src="https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600&q=80" 
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
                  src="https://pixabay.com/get/g889abd47463241edee098a3e53931a2a01c09ac6d74bfeaa3c39f5da25508c1979d20fa0217c70104abe28b299423112c6851faed05df59feb29fef119f639c2_1280.jpg" 
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
                  src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&q=80" 
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
