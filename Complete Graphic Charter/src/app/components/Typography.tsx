import { Card } from "./ui/card";

export function Typography() {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <h2 className="text-2xl font-bold text-primary mb-3">Typographie Wemade</h2>
        <p className="text-muted-foreground">
          Notre système typographique est conçu pour la lisibilité et le professionnalisme,
          avec une hiérarchie claire adaptée au contenu B2B.
        </p>
      </Card>

      {/* Font Family */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Police de Caractères</h3>
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Police principale</p>
              <p className="text-4xl">Inter (System Default)</p>
              <p className="text-sm text-muted-foreground mt-2">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="text-sm text-muted-foreground">
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className="text-sm text-muted-foreground">
                0123456789
              </p>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Utiliser la police système par défaut pour une performance optimale.
                Alternative recommandée : Inter, Roboto, ou Helvetica Neue.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Headings */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Titres</h3>
        <div className="space-y-4">
          <Card className="p-6">
            <div className="mb-2 text-sm text-muted-foreground flex justify-between">
              <span>Heading 1 - Page Title</span>
              <span className="font-mono">2.5rem / 40px - Semibold</span>
            </div>
            <h1 className="text-5xl">Sourcing Expert avec la Chine</h1>
          </Card>

          <Card className="p-6">
            <div className="mb-2 text-sm text-muted-foreground flex justify-between">
              <span>Heading 2 - Section Title</span>
              <span className="font-mono">2rem / 32px - Semibold</span>
            </div>
            <h2 className="text-4xl">Nos Services de Sourcing</h2>
          </Card>

          <Card className="p-6">
            <div className="mb-2 text-sm text-muted-foreground flex justify-between">
              <span>Heading 3 - Subsection</span>
              <span className="font-mono">1.5rem / 24px - Semibold</span>
            </div>
            <h3 className="text-3xl">Gestion de la Chaîne Logistique</h3>
          </Card>

          <Card className="p-6">
            <div className="mb-2 text-sm text-muted-foreground flex justify-between">
              <span>Heading 4 - Card Title</span>
              <span className="font-mono">1.25rem / 20px - Semibold</span>
            </div>
            <h4 className="text-2xl">Contrôle Qualité</h4>
          </Card>
        </div>
      </section>

      {/* Body Text */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Corps de Texte</h3>
        <div className="space-y-4">
          <Card className="p-6">
            <div className="mb-2 text-sm text-muted-foreground flex justify-between">
              <span>Body Large</span>
              <span className="font-mono">1.125rem / 18px - Regular</span>
            </div>
            <p className="text-lg">
              Wemade facilite votre sourcing en Chine avec une expertise locale et
              une connaissance approfondie du marché asiatique. Nous vous accompagnons
              à chaque étape de votre projet.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-2 text-sm text-muted-foreground flex justify-between">
              <span>Body Regular</span>
              <span className="font-mono">1rem / 16px - Regular</span>
            </div>
            <p>
              Notre équipe bilingue et biculturelle assure une communication fluide
              entre vous et vos fournisseurs chinois. Nous gérons tous les aspects
              techniques, logistiques et administratifs de votre sourcing.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-2 text-sm text-muted-foreground flex justify-between">
              <span>Body Small</span>
              <span className="font-mono">0.875rem / 14px - Regular</span>
            </div>
            <p className="text-sm">
              Depuis 2010, nous avons aidé plus de 500 entreprises européennes à optimiser
              leur sourcing en Asie. Notre réseau de partenaires vérifiés garantit qualité
              et fiabilité.
            </p>
          </Card>
        </div>
      </section>

      {/* Font Weights */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Graisses de Police</h3>
        <Card className="p-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-normal">Regular (400)</span>
              <span className="text-sm text-muted-foreground font-mono">
                Corps de texte, paragraphes
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Medium (500)</span>
              <span className="text-sm text-muted-foreground font-mono">
                Labels, navigation
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Semibold (600)</span>
              <span className="text-sm text-muted-foreground font-mono">
                Titres, boutons, emphase
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Bold (700)</span>
              <span className="text-sm text-muted-foreground font-mono">
                Très forte emphase
              </span>
            </div>
          </div>
        </Card>
      </section>

      {/* Text Colors */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Couleurs de Texte</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6">
            <p className="text-foreground mb-2">
              <span className="font-semibold">Foreground</span> - Texte principal
            </p>
            <p className="text-muted-foreground mb-2">
              <span className="font-semibold">Muted Foreground</span> - Texte secondaire
            </p>
            <p className="text-primary mb-2">
              <span className="font-semibold">Primary</span> - Liens et éléments importants
            </p>
            <p className="text-secondary mb-2">
              <span className="font-semibold">Secondary</span> - Badges et highlights
            </p>
            <p className="text-accent">
              <span className="font-semibold">Accent</span> - Appels à l'action
            </p>
          </Card>

          <Card className="p-6 bg-primary text-primary-foreground">
            <p className="mb-2">
              <span className="font-semibold">Sur fond Primary</span>
            </p>
            <p className="opacity-80 mb-2">
              Texte principal en blanc pour un contraste optimal
            </p>
            <p className="opacity-60">
              Utiliser l'opacité pour varier l'importance
            </p>
          </Card>
        </div>
      </section>

      {/* Usage Guidelines */}
      <Card className="p-6 border-accent/20">
        <h3 className="text-lg font-bold mb-4">Règles Typographiques</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-green-600">✓</span>
              <p>Utiliser Semibold (600) pour tous les titres</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600">✓</span>
              <p>Line-height de 1.5 minimum pour la lisibilité</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600">✓</span>
              <p>Maximum 75 caractères par ligne pour les paragraphes</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-red-600">✗</span>
              <p>Ne pas utiliser plus de 3 tailles différentes par page</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-600">✗</span>
              <p>Éviter le texte en italique sauf citations</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-600">✗</span>
              <p>Ne pas utiliser de texte en majuscules pour les paragraphes</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
