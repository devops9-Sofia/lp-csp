import { Button } from "@/components/ui/button";

export function Navbar() {
  const links = ["Home", "Soluções", "Quem Somos", "Comunidade", "Conteudos"];
  return (
    <header className=" absolute w-full h-[5rem] items-center top-0 left-0 right-0 z-50">

      <div className=" mt-0 mx-auto w-[65%] h-14 px-6 py-5 flex items-center justify-between gap-2 bg-white rounded-xl shadow-gray-600 shadow-xl">

        <a href="#" className="flex items-center gap-2 text-brand-foreground font-display font-bold text-xl">
            <img src="/logo-csp.png" 
            alt="logo-nav"
            className=""
             />
        </a>
        <nav className="flex items-center gap-4 text-sm text-gray-600 whitespace-nowrap">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-brand-foreground transition">{l}</a>
          ))}
        </nav>
        <Button className="bg-gradient-cta text-cta-foreground hover:opacity-90 rounded-full px-5">
          Fale com vendas
        </Button>
      </div>

    </header>
  );
}