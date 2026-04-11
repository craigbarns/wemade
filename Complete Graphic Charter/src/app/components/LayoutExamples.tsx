import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { 
  Package, 
  Ship, 
  Award, 
  Globe,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  Star,
  Users
} from "lucide-react";

export function LayoutExamples() {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <h2 className="text-2xl font-bold text-primary mb-3">Exemples de Layouts</h2>
        <p className="text-muted-foreground">
          Exemples d'application de la charte graphique dans différents contextes.
        </p>
      </Card>

      {/* Hero Section Example */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Hero Section</h3>
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-12">
            <div className="max-w-4xl">
              <Badge className="bg-secondary text-secondary-foreground mb-4">
                Expert depuis 2010
              </Badge>
              <h1 className="text-5xl font-bold mb-4">
                Votre Partenaire Sourcing en Chine
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Nous connectons les entreprises européennes avec les meilleurs fournisseurs chinois.
                Gestion complète de A à Z.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Démarrer un Projet
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Services Grid */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Section Services</h3>
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-3">
              Nos Services de Sourcing
            </h2>
            <p className="text-muted-foreground">
              Une gamme complète de services pour réussir vos achats en Chine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all border-primary/20 group cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <Package className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sourcing Produits</h3>
              <p className="text-muted-foreground mb-4">
                Identification et sélection des meilleurs fournisseurs selon vos critères.
              </p>
              <div className="flex items-center text-primary font-semibold">
                En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all border-secondary/20 group cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all">
                <Award className="h-7 w-7 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contrôle Qualité</h3>
              <p className="text-muted-foreground mb-4">
                Inspections sur place et validation de la conformité produits.
              </p>
              <div className="flex items-center text-primary font-semibold">
                En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all border-accent/20 group cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
                <Ship className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">Logistique Import</h3>
              <p className="text-muted-foreground mb-4">
                Gestion du transport, douanes et livraison jusqu'à vos entrepôts.
              </p>
              <div className="flex items-center text-primary font-semibold">
                En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Section Statistiques</h3>
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Clients Satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Années d'Expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">2500+</div>
              <div className="text-sm text-muted-foreground">Projets Réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Taux de Satisfaction</div>
            </div>
          </div>
        </Card>
      </section>

      {/* Testimonial */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Témoignage Client</h3>
        <Card className="p-8 border-secondary/20">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
            ))}
          </div>
          <p className="text-lg italic text-foreground mb-6">
            "Wemade a transformé notre chaîne d'approvisionnement. Leur expertise du marché chinois
            et leur professionnalisme nous ont permis de réduire nos coûts de 30% tout en améliorant
            la qualité de nos produits."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="font-semibold">Marie Dubois</div>
              <div className="text-sm text-muted-foreground">
                Directrice Achats, TechCorp France
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Call-to-Action</h3>
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-accent to-accent/80 text-white p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à Optimiser Votre Sourcing ?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Contactez-nous pour un audit gratuit de vos besoins et découvrez comment
                nous pouvons vous aider.
              </p>
              <Button size="lg" className="bg-white text-accent hover:bg-white/90">
                <Globe className="mr-2 h-5 w-5" />
                Demander un Devis Gratuit
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Contact Form */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Formulaire de Contact</h3>
        <Card className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Parlons de Votre Projet
              </h3>
              <p className="text-muted-foreground mb-6">
                Remplissez ce formulaire et notre équipe vous recontactera sous 24h.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Réponse rapide</p>
                    <p className="text-sm text-muted-foreground">
                      Sous 24h ouvrées
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Audit gratuit</p>
                    <p className="text-sm text-muted-foreground">
                      Sans engagement
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Expertise reconnue</p>
                    <p className="text-sm text-muted-foreground">
                      15+ ans d'expérience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Nom complet</label>
                <Input placeholder="Jean Dupont" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <Input type="email" placeholder="jean.dupont@entreprise.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Téléphone</label>
                <Input type="tel" placeholder="+33 6 12 34 56 78" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Votre besoin</label>
                <Input placeholder="Ex: Sourcing de composants électroniques" />
              </div>
              <Button className="w-full">
                Envoyer la Demande
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Footer Example */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Footer</h3>
        <Card className="overflow-hidden">
          <div className="bg-primary text-white p-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold mb-4">
                  WE<span className="text-secondary">MADE</span>
                </div>
                <p className="text-sm text-white/80">
                  Expert en sourcing avec la Chine depuis 2010
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Services</h4>
                <div className="space-y-2 text-sm text-white/80">
                  <p>Sourcing Produits</p>
                  <p>Contrôle Qualité</p>
                  <p>Logistique Import</p>
                  <p>Négociation</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Entreprise</h4>
                <div className="space-y-2 text-sm text-white/80">
                  <p>À propos</p>
                  <p>Notre équipe</p>
                  <p>Nos valeurs</p>
                  <p>Carrières</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Contact</h4>
                <div className="space-y-2 text-sm text-white/80">
                  <p>contact@wemade.fr</p>
                  <p>+33 1 23 45 67 89</p>
                  <p>Paris, France</p>
                  <p>Shanghai, China</p>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-white/20 text-center text-sm text-white/60">
              © 2026 Wemade. Tous droits réservés.
            </div>
          </div>
        </Card>
      </section>

      {/* Spacing Guidelines */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Espacements & Grid</h3>
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-3">Système d'espacement (8px base)</h4>
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div className="border-2 border-border p-2">
                  <div className="bg-primary h-2 w-2" />
                  <p className="mt-2 text-xs">2px - xs</p>
                </div>
                <div className="border-2 border-border p-2">
                  <div className="bg-primary h-4 w-4" />
                  <p className="mt-2 text-xs">4px - sm</p>
                </div>
                <div className="border-2 border-border p-2">
                  <div className="bg-primary h-8 w-8" />
                  <p className="mt-2 text-xs">8px - base</p>
                </div>
                <div className="border-2 border-border p-2">
                  <div className="bg-primary h-12 w-12" />
                  <p className="mt-2 text-xs">12px - md</p>
                </div>
                <div className="border-2 border-border p-2">
                  <div className="bg-primary h-16 w-16" />
                  <p className="mt-2 text-xs">16px - lg</p>
                </div>
                <div className="border-2 border-border p-2">
                  <div className="bg-primary h-24 w-24" />
                  <p className="mt-2 text-xs">24px - xl</p>
                </div>
                <div className="border-2 border-border p-2">
                  <div className="bg-primary h-32 w-32" />
                  <p className="mt-2 text-xs">32px - 2xl</p>
                </div>
                <div className="border-2 border-border p-2">
                  <div className="bg-primary h-48 w-48" />
                  <p className="mt-2 text-xs">48px - 3xl</p>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <h4 className="font-semibold mb-2">Règles d'utilisation</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Utiliser un système cohérent basé sur 8px</li>
                <li>• Container max-width: 1280px pour les layouts</li>
                <li>• Padding horizontal: 24px (mobile), 48px (desktop)</li>
                <li>• Gap entre sections: 48-96px selon l'importance</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
