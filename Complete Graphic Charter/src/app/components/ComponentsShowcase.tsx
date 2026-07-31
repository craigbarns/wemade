import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { 
  Package, 
  Ship, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  Globe,
  Users,
  Award
} from "lucide-react";
import { Progress } from "./ui/progress";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";

export function ComponentsShowcase() {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <h2 className="text-2xl font-bold text-primary mb-3">Composants UI</h2>
        <p className="text-muted-foreground">
          Bibliothèque de composants réutilisables pour construire l'interface Wemade.
        </p>
      </Card>

      {/* Buttons */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Boutons</h3>
        <div className="space-y-6">
          <Card className="p-6">
            <div className="mb-3 text-sm text-muted-foreground">Variations principales</div>
            <div className="flex flex-wrap gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="mb-3 text-sm text-muted-foreground">Tailles</div>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="mb-3 text-sm text-muted-foreground">Avec icônes</div>
            <div className="flex flex-wrap gap-4">
              <Button>
                <Package className="mr-2 h-4 w-4" />
                Nouveau Sourcing
              </Button>
              <Button variant="secondary">
                <Ship className="mr-2 h-4 w-4" />
                Suivre Livraison
              </Button>
              <Button variant="outline">
                <Globe className="mr-2 h-4 w-4" />
                Trouver Fournisseur
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-accent text-accent-foreground">
            <div className="mb-3 text-sm opacity-80">Call-to-Action principal</div>
            <Button size="lg" className="bg-white text-accent hover:bg-white/90">
              <TrendingUp className="mr-2 h-5 w-5" />
              Démarrer un Projet
            </Button>
          </Card>
        </div>
      </section>

      {/* Forms */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Formulaires</h3>
        <Card className="p-6">
          <div className="space-y-6 max-w-md">
            <div>
              <Label htmlFor="company">Nom de l'entreprise</Label>
              <Input id="company" placeholder="Votre société" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="email">Email professionnel</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="contact@votresociete.com" 
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="product">Type de produit recherché</Label>
              <Input 
                id="product" 
                placeholder="Ex: Électronique, Textile..." 
                className="mt-2"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="newsletter" />
              <Label htmlFor="newsletter" className="cursor-pointer">
                Recevoir les actualités du sourcing
              </Label>
            </div>
            <Button className="w-full">
              Envoyer la demande
            </Button>
          </div>
        </Card>
      </section>

      {/* Badges */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Badges & Labels</h3>
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <div className="mb-2 text-sm text-muted-foreground">Status badges</div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary">En cours</Badge>
                <Badge className="bg-secondary text-secondary-foreground">Premium</Badge>
                <Badge className="bg-accent">Urgent</Badge>
                <Badge className="bg-green-600">Validé</Badge>
                <Badge variant="outline">Brouillon</Badge>
                <Badge variant="secondary">Archive</Badge>
              </div>
            </div>
            <Separator />
            <div>
              <div className="mb-2 text-sm text-muted-foreground">Service badges</div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary border-primary/20" variant="outline">
                  <Package className="mr-1 h-3 w-3" />
                  Sourcing
                </Badge>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20" variant="outline">
                  <Award className="mr-1 h-3 w-3" />
                  Contrôle Qualité
                </Badge>
                <Badge className="bg-accent/10 text-accent border-accent/20" variant="outline">
                  <Ship className="mr-1 h-3 w-3" />
                  Logistique
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Cards */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Cards</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow border-primary/20">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h4 className="mb-2">Sourcing Produits</h4>
            <p className="text-sm text-muted-foreground">
              Trouvez les meilleurs fournisseurs chinois pour vos besoins.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-secondary/20">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-secondary" />
            </div>
            <h4 className="mb-2">Contrôle Qualité</h4>
            <p className="text-sm text-muted-foreground">
              Inspections rigoureuses selon vos standards.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-accent/20">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Ship className="h-6 w-6 text-accent" />
            </div>
            <h4 className="mb-2">Logistique</h4>
            <p className="text-sm text-muted-foreground">
              Gestion complète de l'import depuis la Chine.
            </p>
          </Card>
        </div>
      </section>

      {/* Icons */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Iconographie</h3>
        <Card className="p-6">
          <div className="mb-3 text-sm text-muted-foreground">
            Icônes Lucide React - Style: stroke, 24px
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-center">Package</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Ship className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-center">Ship</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-center">Check</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-center">Alert</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-center">Trending</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-center">Globe</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-center">Users</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-center">Award</span>
            </div>
          </div>
        </Card>
      </section>

      {/* Progress & Loading */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Progress & Feedback</h3>
        <Card className="p-6 space-y-6">
          <div>
            <Label className="mb-2 block">État du projet</Label>
            <Progress value={65} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">65% complété</p>
          </div>
          
          <Separator />
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Fournisseur trouvé et validé</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Échantillons reçus et approuvés</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <AlertCircle className="h-5 w-5 text-accent" />
              <span>Production en cours (80%)</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="h-5 w-5 rounded-full border-2 border-muted" />
              <span>Expédition (en attente)</span>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
