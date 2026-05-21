"use client";
import { basename } from "node:path";
import { useState } from "react";

const benefits = [
    { title: "CSP Cadastro", desc: "Automatize a criação de anúncio através do Código do Fabricante, e ganhe velocidade e assertividade na publicação e venda online", link: "www.outralpcompresuapeca.com.br", imagem:"/solution-section-carrossel/carrossel-solucoes-1.svg" },
    { title: "CSP Performance", desc: "Solução focada no mercado de autopeças que impulsiona suas vendas, através de estratégias e otimizações de tráfego pago em canais digitais, para seus anúncios acelerarem na venda online.", link: "www.outralpcompresuapeca.com.br", imagem:"/solution-section-carrossel/carrossel-solucoes-2.svg" },
    { title: "Venda sem precisar de estoque", desc: "Amplie seu catálogo e venda mais, sem precisar de estoque próprio (CSP Dropshipping).", link: "www.outralpcompresuapeca.com.br", imagem:"/solution-section-carrossel/carrossel-solucoes-3.svg" },
    { title: "Seu catálogo descomplicado e online, sempre atualizado para vendas digitais", desc: "O Catálogo CSP Online, disponibiliza anúncios prontos, com as informações e fotos atualizadas para seu cliente vender online, aumentando a reputação da sua marca no digital.", link: "www.outralpcompresuapeca.com.br", imagem:"/solution-section-carrossel/carrossel-solucoes-4.svg" },
    { title: "Controle todas as operações em só lugar", desc: "A Plataforma CSP (CompreSuaPeça) une soluções especializadas para o mercado automotivo, integrando canais de vendas online e sistemas, facilitando sua gestão e performance no digital.", link: "www.outralpcompresuapeca.com.br", imagem:"/solution-section-carrossel/carrossel-solucoes-5.svg" }
];

export function SolutionsSection() {
    const [activeBenefit, setActiveBenefit] = useState(0);
    return (
        <section id="soluções" className="py-5">

            <div className="mx-auto max-w-5xl  rounded-3xl py-5 bg-gray-100">

                <h1 className="text-center font-display text-3xl font-semibold max-w-3/4 mx-auto mt-10">
                    Conheça as soluções que <span className="font-bold">mudam</span>  o nível do seu negócio
                </h1>

                <div className="my-8 w-[90%] grid grid-cols-[0.90fr_1fr] gap-1 mx-auto ">

                    <div className="h-full">
                        <img
                            src={benefits[activeBenefit].imagem}
                            alt="{benefits[activeBenefit].title}"
                            className="h-full w-full object-cover rounded-3xl"
                        />
                    </div>

                    <div className="bg-card rounded-3xl pl-5 shadow-card">
                        <ul className=" space-y-5">
                            {benefits.map((b, index) => (
                                <li key={b.title}
                                    onClick={() => setActiveBenefit(index)}
                                    className="relative flex gap-3 cursor-pointer transition-all hover:translate-x-1">
                                    <div
                                        className={`absolute mt-1 left-0 top-0 h-[85%] w-3 rounded-sm  ${activeBenefit === index ? "bg-purple-700" : "bg-gray-300"}`}>
                                    </div>


                                    <div className="pl-5 pr-8">
                                        <h1 className={`font-semibold text-lg ${activeBenefit === index ? "text-amber-600" : "text-gray-300"}`}>{b.title}</h1>
                                        <h2 className={`text-sm ${activeBenefit === index ? "text-muted-foreground" : "text-gray-200"}`}>{b.desc}</h2>
                                        <a href={b.link} className="text-xs text-blue-600 ">{b.link}</a>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>
                <div className="flex justify-end mr-5">
                    <img
                        src="/icons/logotipo-CSP-2 5.svg" alt="Logotipo CSP" className="h-10 w-10" />
                </div>

            </div>

            <div>

            </div>
        </section>
    );
}
