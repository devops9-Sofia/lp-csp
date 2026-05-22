"use client";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { CompatibilityBanner } from "./compatibilityBanner";

export function DifferentialsSection() {
    return (
        <section id="diferenciais" className="pt-16">

            <div className="mx-auto flex flex-col ">

                <div className="flex justify-center items-center">
                    <h2 className="font-display text-3xl font-semibold text-white bg-purple-950 p-4 rounded-2xl"> Diferenciais <span className="text-amber-600">CSP</span>
                    </h2>
                </div>

                <CompatibilityBanner />

                <div className=" flex flex-col gap-10 py-10 my-5">

                    <div className="flex  gap-6 max-w-[80%] bg-purple-950 rounded-r-2xl">
                        <FirstCard image="/card-elements/img-firstCard.png" title="Criamos seu" highlight="ativo digital"
                            desc="O seu estoque físico direto para o digital com todas as especificações técnicas, compatibilidades, descrições. Para você vender online." />
                    </div>

                    <div className="mt-6  max-w-[80%] bg-purple-950 rounded-l-2xl ml-auto">
                        <SecondCard image="/card-elements/img-secondCard.svg"
                            title="inteligente para canais digitais" highlight="Precificação" desc="Calcule seus preços de vendas de produtos para os Marketplaces e E-Commerce garantindo margem e rentabilidade antes mesmo de anunciar. Compare preços, acompanhe margens e encontre o posicionamento ideal para vender com mais competitividade e rentabilidade.

" />
                    </div>

                    <div className="my-6 max-w-[95%] gap-3 bg-purple-950 rounded-r-2xl">

                        <ThirdCard
                            csp="CSP | BUSCA POR PLACA"
                            title="Venda a peça certa pela"
                            highlight="busca por placa!"
                            desc="Implemente em seu canal de vendas a funcionalidade da busca por placa. Encontre e valide a peça correta do seu estoque pela placa do veículo e garanta uma venda assertiva e sem devoluções."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FirstCard({ image, title, highlight, desc }: { image: string; title: string; highlight: string; desc: string }) {
    return (
        <div className="rounded-r-3xl grid grid-cols-2 gap-3  p-8 ">
            <img src={image} />

            <div className="px-3">
                <span className="text-xs font-thin uppercase tracking-wider text-brand-foreground/75">CSP | CADASTRO DE PRODUTO</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                    {title} <span className="text-amber-600">{highlight}</span>
                </h3>
                <p className="mt-3 text-brand-foreground/75">{desc}</p>

                <Button
                    onClick={() => {
                        window.gtag?.("event", "btn_diagnostico_ativo_digital", {
                            event_category: "diagnostico_ativo_digital",
                            event_label: `User clicked on button -diagnostico-ativo-digital`,
                        });
                    }}
                    className="mt-6 bg-gradient-cta text-cta-foreground rounded-full px-6 hover:opacity-90">
                    Agendar Diagnóstico
                    <MdArrowOutward className="ml-1 h-4 w-4" />
                </Button>
            </div>

        </div>
    );
}

function SecondCard({ image, title, highlight, desc }: { image: string; title: string; highlight: string; desc: string }) {
    return (
        <div className="rounded-r-3xl  gap-3 flex justify-end  p-8 ">
            <div className="max-w-[40%]">
                <span className="text-xs font-thin uppercase tracking-wider text-brand-foreground/75">CSP | PRICING</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                    <span className="text-amber-600">{highlight}</span>{" "}{title}
                </h3>
                <p className="mt-3 text-brand-foreground/75">{desc}</p>

                <Button
                    onClick={() => {
                        window.gtag?.("event", "btn_executivo_diferencial", {
                            event_category: "btn_executivo_differencial",
                            event_label: `User clicked on link`,
                        });
                    }}
                    className="mt-6 bg-gradient-cta text-cta-foreground rounded-full p-4 hover:opacity-90">
                    Fale com um Executivo
                    <MdArrowOutward className="ml-1 h-4 w-4" />
                </Button>

                <img src="/icons/logo-csp-plataforma.svg" alt="csp-plataforma" className="mt-4" />
            </div>

            <img src={image} alt="" className=" w-88 h-88 mr-[10%]" />
        </div>)

}

function ThirdCard({ title, highlight, desc, csp }: any) {
    return (
        <div className="rounded-r-3xl flex  justify-center p-7 ">
            <div className="w-[50%]">
                <span className="flex text-xs font-thin uppercase tracking-wider text-brand-foreground/75">{csp}</span>
                <h4 className="mt-3 font-display text-2xl font-semibold text-white">{title}{" "}
                    <span className="text-amber-600 uppercase">{highlight}</span> {" "}
                </h4>
                <p className="mt-3 text-brand-foreground/75">{desc}</p>

            </div>


            <img src="/card-elements/img-fifthCard.svg" alt="" className="w-[15rem] h-[15rem]" />



        </div>
    );
}