import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
// import heroTeam from "@/assets/hero-team.jpg";
import { FaCircleCheck } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

export function Hero() {
  return (
    <section className="relative flex w-full rounded-xl mx-auto justify-center items-center bg-gradient-hero  overflow-hidden ">

      {/* <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%)] rounded-lg" /> */}
        <div className="text-brand-foreground w-full h-full ">

          <span className="inline-flex  gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium border border-white/15">
            <FaCircleCheck className="h-3.5 w-3.5 text-blue-500" /> Plataforma #1 do setor
          </span>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] whitespace-nowrap">
            Somos quem impulsiona o{" "}<br />
            <span className="text-gradient-cta whitespace-nowrap">Mercado Automotivo</span><br /> no digital
          </h1>

          <h2 className="mt-5 text-2xl text-brand-foreground/80 max-w-lg">
            O futuro do seu negócio está no digital
          </h2>

          <h3 className="mt-5 text-sm text-brand-foreground/80 max-w-lg">
            AUTOPEÇAS | DISTRIBUIDORAS | CONCESSIONÁRIAS | FÁBRICAS
          </h3>


          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="bg-gradient-cta text-cta-foreground hover:opacity-90 rounded-full px-7 h-12">
              Inpulsione agora <MdArrowOutward className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        
      <div className="relative flex w-full px-6 gap-2 items-center ">

        <div className="relative">

          <div className="absolute -inset-6 bg-gradient-cta rounded-b-3xl blur-3xl opacity-30" />
          <img
            src="/carrossel1.png"
            alt="Fundadores AutoBoost"
            width={1024}
            height={768}
            className="relative rounded-b-xl shadow-glow object-cover w-full h-full"
          /> 


        </div>
      </div>
    </section>
  );
}
