"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
// import heroTeam from "@/assets/hero-team.jpg";
import { FaCircleCheck } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const carrosselImages = [
    "/hero-section-carrossel/hero-carrossel-1.png",
    "/hero-section-carrossel/hero-carrossel-2.png"
];

export function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % carrosselImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="grid grid-cols-2 w-full px-4  overflow-hidden gap-1 ">

            {/* <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%)] rounded-lg" /> */}
            <div className="bg-purple-950 text-brand-foreground flex flex-col justify-center p-12 rounded-b-3xl">


                <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] whitespace-nowrap">
                    Somos quem impulsiona o <br />
                    <span className="text-gradient-cta">
                        Mercado Automotivo
                    </span>
                    <br />
                    no digital
                </h1>

                <h2 className="mt-5 text-2xl text-brand-foreground/80 max-w-lg">
                    O futuro do seu negócio está na presença online.
                </h2>

                <h3 className="mt-5 text-sm text-brand-foreground/80 max-w-lg">
                    AUTOPEÇAS | DISTRIBUIDORAS | CONCESSIONÁRIAS | FÁBRICAS
                </h3>

                <div className="mt-8 flex flex-wrap gap-3">
                    <Button
                        onClick={() => {
                            window.gtag?.("event", "btn_agendar_diagnostico", {
                                event_category: "btn_hero_diagnostico",
                                event_label: `User clicked on button -agendar-diagnostico-`,
                            });
                        }}
                        size="lg"
                        className="bg-gradient-cta text-cta-foreground hover:opacity-90 rounded-full px-7 h-12"
                    >
                        Agendar Diagnóstico
                        <MdArrowOutward className="ml-1 h-4 w-4" />
                    </Button>

                    <Button
                        onClick={() => {
                            window.gtag?.("event", "btn_conheca_solucoes", {
                                event_category: "btn_hero_solucoes",
                                event_label: `User clicked on solution button`,
                            });
                        }}
                        size="lg"
                        className="bg-gradient-cta text-cta-foreground hover:opacity-90 rounded-full px-7 h-12"
                    >
                        Conheça Soluções
                        <MdArrowOutward className="ml-1 h-4 w-4" />
                    </Button>
                </div>

                <div className="mt-10 flex py-2 items-center border-t w-3/4 justify-start border-gray-500">
                    <span className="items-center mt-5 inline-flex gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-sm font-medium border text-justify border-white/15 w-fit">
                        AUTOTECH Nº1 DO BRASIL
                        <img src="/icons/brasil-icon.svg" alt="Brasil" className="h-6 w-6" />
                    </span>




                </div>
            </div>

            <div className="relative h-full">
                <img
                    src={carrosselImages[currentImage]}
                    alt="Imagem do carrossel"
                    className="
                    w-full
                    h-full
                    object-cover
                    rounded-b-3xl
                    transition-all
                    duration-700"/>
            </div>




        </section>
    );
}
