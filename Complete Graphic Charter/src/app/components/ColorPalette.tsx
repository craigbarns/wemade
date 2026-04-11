import { Card } from "./ui/card";

export function ColorPalette() {
  const primaryColors = [
    { name: "Navy 900", var: "--wemade-navy-900", hex: "#0A2E5C" },
    { name: "Navy 800", var: "--wemade-navy-800", hex: "#0D3A73" },
    { name: "Navy 700", var: "--wemade-navy-700", hex: "#11468A" },
    { name: "Navy 600", var: "--wemade-navy-600", hex: "#1552A1" },
    { name: "Navy 500", var: "--wemade-navy-500", hex: "#1A5EB8" },
    { name: "Navy 400", var: "--wemade-navy-400", hex: "#4A7FC9" },
    { name: "Navy 300", var: "--wemade-navy-300", hex: "#7AA0DA" },
    { name: "Navy 200", var: "--wemade-navy-200", hex: "#AAC1EB" },
    { name: "Navy 100", var: "--wemade-navy-100", hex: "#D5E1F5" },
  ];

  const secondaryColors = [
    { name: "Gold 900", var: "--wemade-gold-900", hex: "#8B6A42" },
    { name: "Gold 800", var: "--wemade-gold-800", hex: "#A47D50" },
    { name: "Gold 700", var: "--wemade-gold-700", hex: "#BD905E" },
    { name: "Gold 600", var: "--wemade-gold-600", hex: "#D4A574" },
    { name: "Gold 500", var: "--wemade-gold-500", hex: "#DCBB8F" },
    { name: "Gold 400", var: "--wemade-gold-400", hex: "#E4CDA5" },
    { name: "Gold 300", var: "--wemade-gold-300", hex: "#EBDCBA" },
    { name: "Gold 200", var: "--wemade-gold-200", hex: "#F3EBD0" },
    { name: "Gold 100", var: "--wemade-gold-100", hex: "#F9F5E7" },
  ];

  const accentColors = [
    { name: "Red 900", var: "--wemade-red-900", hex: "#8A0820" },
    { name: "Red 800", var: "--wemade-red-800", hex: "#A00A26" },
    { name: "Red 700", var: "--wemade-red-700", hex: "#B60D2C" },
    { name: "Red 600", var: "--wemade-red-600", hex: "#C8102E" },
    { name: "Red 500", var: "--wemade-red-500", hex: "#D4394F" },
    { name: "Red 400", var: "--wemade-red-400", hex: "#DF6270" },
    { name: "Red 300", var: "--wemade-red-300", hex: "#E98B95" },
    { name: "Red 200", var: "--wemade-red-200", hex: "#F4B4BA" },
    { name: "Red 100", var: "--wemade-red-100", hex: "#FAD9DC" },
  ];

  const neutralColors = [
    { name: "Foreground", var: "--foreground", hex: "#1A2332" },
    { name: "Muted Foreground", var: "--muted-foreground", hex: "#6B7280" },
    { name: "Border", var: "--border", hex: "#E5E7EB" },
    { name: "Muted", var: "--muted", hex: "#F5F6F8" },
    { name: "Background", var: "--background", hex: "#FAFBFC" },
    { name: "Card", var: "--card", hex: "#FFFFFF" },
  ];

  const ColorCard = ({ name, hex, varName }: { name: string; hex: string; varName: string }) => (
    <div className="group">
      <div
        className="h-24 rounded-lg border border-border shadow-sm transition-transform hover:scale-105 cursor-pointer"
        style={{ backgroundColor: hex }}
      />
      <div className="mt-2">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground font-mono">{hex}</p>
        <p className="text-xs text-muted-foreground font-mono">{varName}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-12">
      {/* Introduction */}
      <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <h2 className="text-2xl font-bold text-primary mb-3">Palette de Couleurs Wemade</h2>
        <p className="text-muted-foreground mb-4">
          Notre palette de couleurs reflète la confiance, l'élégance et la connexion avec la Chine.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="font-semibold text-primary mb-1">🔵 Navy Blue</div>
            <p className="text-muted-foreground">
              Confiance, professionnalisme et stabilité
            </p>
          </div>
          <div>
            <div className="font-semibold text-secondary mb-1">✨ Gold</div>
            <p className="text-muted-foreground">
              Premium, élégance et qualité supérieure
            </p>
          </div>
          <div>
            <div className="font-semibold text-accent mb-1">🔴 Red</div>
            <p className="text-muted-foreground">
              Énergie, passion et lien avec la Chine
            </p>
          </div>
        </div>
      </Card>

      {/* Primary Colors - Navy */}
      <section>
        <h3 className="text-xl font-bold text-primary mb-4">
          Couleur Principale - Navy Blue
        </h3>
        <p className="text-muted-foreground mb-6">
          Utilisée pour les éléments principaux, headers, boutons primaires et textes importants.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {primaryColors.map((color) => (
            <ColorCard
              key={color.name}
              name={color.name}
              hex={color.hex}
              varName={color.var}
            />
          ))}
        </div>
      </section>

      {/* Secondary Colors - Gold */}
      <section>
        <h3 className="text-xl font-bold text-secondary mb-4">
          Couleur Secondaire - Gold
        </h3>
        <p className="text-muted-foreground mb-6">
          Pour les accents premium, badges, highlights et éléments de prestige.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {secondaryColors.map((color) => (
            <ColorCard
              key={color.name}
              name={color.name}
              hex={color.hex}
              varName={color.var}
            />
          ))}
        </div>
      </section>

      {/* Accent Colors - Red */}
      <section>
        <h3 className="text-xl font-bold text-accent mb-4">
          Couleur d'Accent - Red
        </h3>
        <p className="text-muted-foreground mb-6">
          Pour les call-to-action importants, alertes positives et éléments énergiques.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {accentColors.map((color) => (
            <ColorCard
              key={color.name}
              name={color.name}
              hex={color.hex}
              varName={color.var}
            />
          ))}
        </div>
      </section>

      {/* Neutral Colors */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">
          Couleurs Neutres
        </h3>
        <p className="text-muted-foreground mb-6">
          Pour les textes, backgrounds, borders et éléments UI généraux.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {neutralColors.map((color) => (
            <ColorCard
              key={color.name}
              name={color.name}
              hex={color.hex}
              varName={color.var}
            />
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <Card className="p-6 border-accent/20">
        <h3 className="text-lg font-bold mb-4">Règles d'Utilisation</h3>
        <div className="space-y-3 text-sm">
          <div className="flex gap-3">
            <span className="text-green-600">✓</span>
            <p>Utiliser Navy (900-700) pour tous les textes principaux et headers</p>
          </div>
          <div className="flex gap-3">
            <span className="text-green-600">✓</span>
            <p>Utiliser Gold pour mettre en valeur les services premium et certifications</p>
          </div>
          <div className="flex gap-3">
            <span className="text-green-600">✓</span>
            <p>Utiliser Red avec parcimonie pour les CTA et éléments importants</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600">✗</span>
            <p>Ne pas mélanger trop de teintes dans un même écran</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600">✗</span>
            <p>Ne pas utiliser Red et Gold ensemble sans Navy comme base</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
