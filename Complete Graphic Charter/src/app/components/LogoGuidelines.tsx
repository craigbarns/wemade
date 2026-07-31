import { Card } from "./ui/card";

export function LogoGuidelines() {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <h2 className="text-2xl font-bold text-primary mb-3">Logo & Identité Visuelle</h2>
        <p className="text-muted-foreground">
          Guidelines pour l'utilisation correcte du logo Wemade et des éléments visuels de la marque.
        </p>
      </Card>

      {/* Logo Concept */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Concept du Logo</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-white flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="inline-block">
                <div className="text-6xl font-bold text-primary mb-2">
                  WE<span className="text-accent">MADE</span>
                </div>
                <div className="text-sm text-muted-foreground tracking-wider">
                  SOURCING WITH CHINA
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="font-bold mb-3">Signification</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-primary">WE - Navy Blue</p>
                <p className="text-muted-foreground">
                  Représente le partenariat, la collaboration et la confiance
                </p>
              </div>
              <div>
                <p className="font-semibold text-accent">MADE - Rouge</p>
                <p className="text-muted-foreground">
                  Évoque "Made in China" et l'action, la création, le dynamisme
                </p>
              </div>
              <div>
                <p className="font-semibold text-muted-foreground">Tagline</p>
                <p className="text-muted-foreground">
                  Clarté et transparence sur l'expertise principale
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Logo Variations */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Variations du Logo</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Version principale */}
          <Card className="p-8">
            <div className="text-sm text-muted-foreground mb-4">Version principale</div>
            <div className="bg-white border-2 border-border rounded-lg p-8 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">
                  WE<span className="text-accent">MADE</span>
                </div>
                <div className="text-xs text-muted-foreground tracking-wider mt-1">
                  SOURCING WITH CHINA
                </div>
              </div>
            </div>
          </Card>

          {/* Version sans tagline */}
          <Card className="p-8">
            <div className="text-sm text-muted-foreground mb-4">Sans tagline (réseaux sociaux)</div>
            <div className="bg-white border-2 border-border rounded-lg p-8 flex items-center justify-center min-h-[200px]">
              <div className="text-4xl font-bold text-primary">
                WE<span className="text-accent">MADE</span>
              </div>
            </div>
          </Card>

          {/* Version fond sombre */}
          <Card className="p-8">
            <div className="text-sm text-muted-foreground mb-4">Sur fond sombre</div>
            <div className="bg-primary rounded-lg p-8 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">
                  WE<span className="text-secondary">MADE</span>
                </div>
                <div className="text-xs text-white/80 tracking-wider mt-1">
                  SOURCING WITH CHINA
                </div>
              </div>
            </div>
          </Card>

          {/* Version monochrome */}
          <Card className="p-8">
            <div className="text-sm text-muted-foreground mb-4">Monochrome (impression)</div>
            <div className="bg-white border-2 border-border rounded-lg p-8 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground">
                  WEMADE
                </div>
                <div className="text-xs text-muted-foreground tracking-wider mt-1">
                  SOURCING WITH CHINA
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Clear Space */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Espace de Protection</h3>
        <Card className="p-8">
          <div className="bg-white border-2 border-border rounded-lg p-12 flex items-center justify-center">
            <div className="relative">
              {/* Grid overlay */}
              <div className="absolute inset-0 -m-12 border-4 border-dashed border-accent/30 rounded-lg" />
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">
                  WE<span className="text-accent">MADE</span>
                </div>
                <div className="text-xs text-muted-foreground tracking-wider mt-1">
                  SOURCING WITH CHINA
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Maintenir un espace minimum équivalent à la hauteur du "W" autour du logo
            (zone en pointillés rouge).
          </p>
        </Card>
      </section>

      {/* Size Guidelines */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Tailles Minimales</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-4">Print (impression)</div>
            <div className="border-2 border-border rounded-lg p-6 flex items-center justify-center bg-white">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  WE<span className="text-accent">MADE</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-center mt-3">Minimum 30mm de largeur</p>
          </Card>

          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-4">Web (écran)</div>
            <div className="border-2 border-border rounded-lg p-6 flex items-center justify-center bg-white">
              <div className="text-center">
                <div className="text-xl font-bold text-primary">
                  WE<span className="text-accent">MADE</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-center mt-3">Minimum 120px de largeur</p>
          </Card>

          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-4">Favicon/App icon</div>
            <div className="border-2 border-border rounded-lg p-6 flex items-center justify-center bg-white">
              <div className="text-center">
                <div className="text-base font-bold text-primary">
                  W<span className="text-accent">M</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-center mt-3">Version simplifiée "WM"</p>
          </Card>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">À Faire et À Éviter</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border-green-600/20">
            <div className="flex items-center gap-2 mb-4 text-green-600">
              <span className="text-2xl">✓</span>
              <h4>À Faire</h4>
            </div>
            <div className="space-y-3 text-sm">
              <p>• Utiliser les couleurs officielles de la marque</p>
              <p>• Respecter l'espace de protection minimum</p>
              <p>• Maintenir les proportions d'origine</p>
              <p>• Utiliser les versions approuvées uniquement</p>
              <p>• Assurer un contraste suffisant avec le fond</p>
            </div>
          </Card>

          <Card className="p-6 border-red-600/20">
            <div className="flex items-center gap-2 mb-4 text-red-600">
              <span className="text-2xl">✗</span>
              <h4>À Éviter</h4>
            </div>
            <div className="space-y-3 text-sm">
              <p>• Ne pas modifier les couleurs du logo</p>
              <p>• Ne pas déformer ou étirer le logo</p>
              <p>• Ne pas ajouter d'effets (ombre, contour, etc.)</p>
              <p>• Ne pas séparer "WE" et "MADE"</p>
              <p>• Ne pas utiliser sur des fonds trop chargés</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Pattern & Graphics */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">Éléments Graphiques Complémentaires</h3>
        <Card className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="h-32 rounded-lg bg-gradient-to-br from-primary to-primary/50 mb-3" />
              <p className="text-sm font-semibold">Gradient Primary</p>
              <p className="text-xs text-muted-foreground">Headers, bannières</p>
            </div>
            <div>
              <div className="h-32 rounded-lg bg-gradient-to-br from-secondary to-secondary/50 mb-3" />
              <p className="text-sm font-semibold">Gradient Gold</p>
              <p className="text-xs text-muted-foreground">Badges premium</p>
            </div>
            <div>
              <div className="h-32 rounded-lg bg-gradient-to-br from-accent to-accent/50 mb-3" />
              <p className="text-sm font-semibold">Gradient Accent</p>
              <p className="text-xs text-muted-foreground">Call-to-action</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-muted-foreground">
              Utiliser des dégradés subtils pour ajouter de la profondeur aux interfaces.
              Toujours du ton foncé vers le ton clair, de gauche à droite ou de haut en bas.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
