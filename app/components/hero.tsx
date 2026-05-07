import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
// import heroTeam from "@/assets/hero-team.jpg";
import { FaCircleCheck } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

export function Hero() {
    return (
        <section className="grid grid-cols-2 w-full px-4  overflow-hidden gap-1 ">

            {/* <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%)] rounded-lg" /> */}
            <div className="bg-gradient-hero text-brand-foreground flex flex-col justify-center p-12 rounded-b-3xl">

                <span className="inline-flex gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium border border-white/15 w-fit">
                    <FaCircleCheck className="h-3.5 w-3.5 text-blue-500" />
                    Plataforma #1 do setor
                </span>

                <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] whitespace-nowrap">
                    Somos quem impulsiona o <br />
                    <span className="text-gradient-cta">
                        Mercado Automotivo
                    </span>
                    <br />
                    no digital
                </h1>

                <h2 className="mt-5 text-2xl text-brand-foreground/80 max-w-lg">
                    O futuro do seu negócio está no digital
                </h2>

                <h3 className="mt-5 text-sm text-brand-foreground/80 max-w-lg">
                    AUTOPEÇAS | DISTRIBUIDORAS | CONCESSIONÁRIAS | FÁBRICAS
                </h3>

                <div className="mt-8 flex flex-wrap gap-3">
                    <Button
                        size="lg"
                        className="bg-gradient-cta text-cta-foreground hover:opacity-90 rounded-full px-7 h-12"
                    >
                        Impulsione agora
                        <MdArrowOutward className="ml-1 h-4 w-4" />
                    </Button>
                </div>

                <div className="mt-10 flex py-2 items-center border-t w-3/4 justify-start border-gray-500">
                    <img src="/digital.png" alt="digital" />
                    <span className=" flex flex-col text-xl">
                        Conheça soluções
                        <span className="text-xs text-brand-foreground/90 font-light"> para impulsionar o seu negócio</span> 
                      </span>
                    
                    


                </div>
            </div>

            <div className="relative h-full">
                <img
                    src="/carrossel1.png"
                    alt="Fundadores AutoBoost"
                    className="w-full h-full object-cover rounded-b-3xl"
                />
            </div>




        </section>
    );
}
