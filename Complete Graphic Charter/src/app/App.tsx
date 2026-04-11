import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { ColorPalette } from "./components/ColorPalette";
import { Typography } from "./components/Typography";
import { ComponentsShowcase } from "./components/ComponentsShowcase";
import { LayoutExamples } from "./components/LayoutExamples";
import { LogoGuidelines } from "./components/LogoGuidelines";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-1">Wemade Design System</h1>
              <p className="text-muted-foreground">
                Charte graphique complète - Sourcing avec la Chine
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">www.wemade.fr</div>
              <div className="text-xs text-muted-foreground mt-1">Version 1.0</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <Tabs defaultValue="colors" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="colors">Couleurs</TabsTrigger>
            <TabsTrigger value="typography">Typographie</TabsTrigger>
            <TabsTrigger value="components">Composants</TabsTrigger>
            <TabsTrigger value="logo">Logo</TabsTrigger>
            <TabsTrigger value="layouts">Exemples</TabsTrigger>
          </TabsList>

          <TabsContent value="colors">
            <ColorPalette />
          </TabsContent>

          <TabsContent value="typography">
            <Typography />
          </TabsContent>

          <TabsContent value="components">
            <ComponentsShowcase />
          </TabsContent>

          <TabsContent value="logo">
            <LogoGuidelines />
          </TabsContent>

          <TabsContent value="layouts">
            <LayoutExamples />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-8 bg-card">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 Wemade - Expert en sourcing avec la Chine</p>
          <p className="mt-2">
            Cette charte graphique définit l'identité visuelle complète de la marque
          </p>
        </div>
      </footer>
    </div>
  );
}
