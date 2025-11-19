import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import ClickSpark from "./components/bits/clicksparck";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Header />
        <main className="relative">
          <div className="grid-bg fixed inset-0 -z-10" />
          <Hero />
          <About />
          <Projects />  
          <Skills />
          <Contact />
          <Toaster position="bottom-center" />
        </main>
        <Footer />
      </ClickSpark>
    </div>
  );
}

export default App;
