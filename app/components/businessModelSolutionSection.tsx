"use client"
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { Check } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const planos = [
    { icon: "", name: "DISTRIBUIÇÃO", desc: "Venda seu estoque online  para todo o Brasil", features: ["E-commerce B2B - Canal Exclusivo de Vendas", "Marketplace Prório - HUB de Vendas", "Busca Inteligente de Aplicação", "Aceleração de Estoque parado"], button: "Assertividade dos SKUs e Maximização da Rentabilidade" },
    { icon: "", name: "VAREJISTA", desc: "Amplie a rede sem aumentar equipe", features: ["Ampliação da rede comercial", "E-commerce", "Catálogo em tempo real", "Venda Home Office", "Venda em múltiplos canais"], button: "Mais clientes, Mais Pedidos, Mais Assertividade" },
    { icon: "", name: "FABRICANTES", desc: "Venda direto sem abrir mão do canal", features: ["Governança Digital da Marca", "Catálogo Estratégico de peças e anúncios", "Radar de mercado - Acesso ao HUB de dados CSP"], button: "Acesso ao canal de digitalização da Reposição" },
    { icon: "", name: "CONCESSIONARIAS", desc: "Venda para empresas com escala", features: ["E-commerce B2C e B2B", "HUB Inteligente de Aplicação", "Aceleração de estoque parado", "Presença da marca no Digital"], button: "Acesso ao Aftermarket Digital" },
];



export function BusinessModelSolutionSection() {

    const [activeCard, setActiveCard] = useState(0);
    const nextCard = () => { setActiveCard((prev) => (prev + 1) % planos.length) };
    const prevCard = () => { setActiveCard((prev) => prev === 0 ? planos.length - 1 : prev - 1) };

    useEffect(() => {
        const interval = setInterval(() => {
            nextCard();
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="planos" className="py-5">

            <div className="mx-auto max-w-7xl px-6 items-center">
                <div className="flex flex-col items-center">
                    <h2 className="text-center font-display text-4xl font-semibold">
                        Soluções para cada modelo de negócio
                    </h2>

                    <p className="text-center text-[20px] text-gray-500 mt-2">Entenda qual formato faz mais sentido para o seu negócio</p>

                    <Button className="mt-2 bg-gradient-cta text-cta-foreground rounded-full p-6 hover:opacity-90">
                        Fale com um Executivo
                        <MdArrowOutward className="ml-1 h-4 w-4" />
                    </Button>
                </div>
                <div className="flex justify-center gap-2 mt-8">
                    {planos.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCard(index)}
                            className={`
                            h-2 rounded-full transition-all duration-300
                            ${activeCard === index
                                    ? "w-6 bg-purple-950"
                                    : "w-2 bg-gray-300"
                                }
                            `}
                        />
                    ))}
                </div>

                <div className="relative  h-100 mt-5 flex  justify-center">
                    {planos.map((p, index) => {
                        const offset = index - activeCard;

                        let x = 0;
                        let scale = 1;
                        let opacity = 1;
                        let zIndex = 20;

                        if (offset === -1) {
                            x = -320;
                            scale = 0.85;
                            opacity = 0.5;
                            zIndex = 10;
                        }

                        if (offset === 1) {
                            x = 320;
                            scale = 0.85;
                            opacity = 0.5;
                            zIndex = 10;
                        }

                        if (Math.abs(offset) > 1) {
                            opacity = 0;
                            scale = 0.7;
                            zIndex = 0;
                        }
                        return (
                            <motion.div
                                key={p.name}
                                animate={{
                                    x,
                                    scale,
                                    opacity,
                                }}
                                transition={{
                                    duration: 0.4,
                                }}
                                style={{ zIndex }}
                                className="
                                absolute
                                left-1/2
                                -translate-x-1/2">

                                <div key={p.name}
                                    className=" rounded-3xl p-7 shadow-card border bg-card flex flex-col w-[20rem]">

                                    <div className="flex items-center gap-3 ">
                                        <div className="w-10 h-10 rounded-lg bg-amber-600">
                                            {/* <img src={p.icon}/> */}
                                        </div>

                                        <div className="font-display text-xl font-semibold">{p.name}</div>
                                    </div>

                                    <div className="mt-4 text-sm font-medium">{p.desc}</div>

                                    <ul className="mt-6 space-y-3 text-sm flex-1">
                                        {p.features.map((f) => (
                                            <li key={f} className="flex gap-2 text-gray-500"><VscDebugBreakpointData className="h-4 w-4 text-gray-500 mt-0.5" />{f}</li>
                                        ))}
                                    </ul>

                                    <Button className="mt-6 bg-gradient-cta text-cta-foreground rounded-lg p-4 h-fit hover:opacity-90">
                                        <span className="text-sm text-center leading-tight whitespace-normal">
                                            {p.button}
                                        </span>
                                    </Button>
                                </div>


                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}