import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";

export function DifferentialsSection() {
    return (
        <section id="diferenciais" className="py-10 ">
            <div className="mx-auto max-w-7xl p-12 bg-purple-700 rounded-3xl">
                <div>
                    <h2 className="font-display text-3xl font-semibold text-white"> Diferenciais </h2>
                </div>

                <div className="mt-6 gap-6 max-w-[95%] mx-auto">
                    <FirstCard image="/card-elements/img-firstCard.png" title="Criamos seu" highlight="ativo digital"
                        desc="O seu estoque físico direto para o digital com todas as especificações técnicas, compatibilidades, descrições. Para você vender online." />
                </div>

                <div className="grid grid-cols-[2fr_0.80fr] max-w-[95%] gap-5 bg-white/5 border rounded-3xl border-white/10 p-8 backdrop-blur mt-6 mx-auto">
                    <SecondCard image="/card-elements/img-secondCard.svg"
                        title="Adquira uma" highlight="Precificação" desc="Acompanhe preços e margens para equilibrar competitividade no mercado e rentabilidade na operação" />
                    <ThirdCard title="Estudo de" highlight="precificação" desc="Compare preços, acompanhe margens e encontre o posicionamento ideal para vender com mais competitividade e rentabilidade," />
                </div>

                <div className="my-6 grid grid-cols-[0.90fr_.90fr] max-w-[95%] gap-3 mx-auto">
                    <FourthCard
                        csp="CSP | PERFORMANCE"
                        title="Escale a"
                        highlight="perfomance"
                        text="das suas vendas"
                        desc="Eleve sua visibilidade no digital aumentando suas vendas e o seu faturamento. Tráfego pago, conversão e catálogo inteligente para escalar com margem e ROI."

                    />
                    <FifthCard
                        csp="CSP | BUSCA POR PLACA"
                        title="Venda a peça certa pela"
                        highlight="busca por placa"
                        text="!"
                        desc="Implemente em sua plataforma nossa funcionalidade, Ache qualquer peça do seu estoque pela placa do veiculo do seu cliente"
                    />
                </div>
            </div>
        </section>
    );
}

function FirstCard({ image, title, highlight, desc }: { image: string; title: string; highlight: string; desc: string }) {
    return (
        <div className="rounded-3xl grid grid-cols-2 gap-3 bg-white/5 border border-white/10 p-8 backdrop-blur">
            <img src={image} />

            <div className="px-3">
                <span className="text-xs font-thin uppercase tracking-wider text-brand-foreground/75">CSP | CADASTRO DE PRODUTO</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                    {title} <span className="text-amber-600">{highlight}</span>
                </h3>
                <p className="mt-3 text-brand-foreground/75">{desc}</p>

                <Button className="mt-6 bg-gradient-cta text-cta-foreground rounded-full px-6 hover:opacity-90">
                    Agendar Diagnóstico
                    <MdArrowOutward className="ml-1 h-4 w-4" />
                </Button>
            </div>

        </div>
    );
}

function SecondCard({ image, title, highlight, desc }: { image: string; title: string; highlight: string; desc: string }) {
    return (
        <div className="rounded-3xl  gap-3 grid grid-cols-[1fr_1fr] bg-white/5 border border-white/10 p-8 backdrop-blur">
            <div>

                <span className="text-xs font-thin uppercase tracking-wider text-brand-foreground/75">CSP | PRICING</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">{title}{" "}
                    <span className="text-amber-600">{highlight}</span>{" "} mais estratégica
                </h3>
                <p className="mt-3 text-brand-foreground/75">{desc}</p>

                <Button className="mt-6 bg-gradient-cta text-cta-foreground rounded-full px-6 hover:opacity-90">
                    Agendar Diagnóstico
                    <MdArrowOutward className="ml-1 h-4 w-4" />
                </Button>
            </div>

            <img src={image} alt="" className="h-full w-full" />
        </div>)

}

function ThirdCard({ title, highlight, desc }: any) {
    return (
        <div className="rounded-3xl  gap-3  bg-white/5 border border-white/10 p-8 backdrop-blur" >
            <div>
                <span className="flex text-xs font-thin uppercase tracking-wider text-brand-foreground/75 justify-between">CSP | PRICING <img src="/icons/logotipo-CSP-2 5.svg" alt="" className="h-10 w-10" /></span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">{title}{" "}
                    <span className="text-amber-600">{highlight}</span>{" "} do mercado
                </h3>
                <p className="mt-3 text-brand-foreground/75">{desc}</p>
            </div>

        </div>
    )
}

function FourthCard({ title, highlight, text, desc, csp }: any) {
    return (
        <div className="rounded-3xl bg-white/5 border border-white/10 p-7 backdrop-blur flex flex-col">
            <div>
                <span className="flex text-xs font-thin uppercase tracking-wider text-brand-foreground/75 justify-between">{csp}</span>
                <h4 className="mt-3 font-display text-2xl font-semibold text-white">{title}{" "}
                    <span className="text-amber-600">{highlight}</span> {" "}
                    {text}</h4>
                <div className="mt-3 grid grid-cols-[1fr_1fr]">
                    <p className="text-brand-foreground/75">{desc}</p>
                    <img src="/card-elements/img-fourthCard.svg" alt="" />
                </div>

            </div>
        </div>
    );
}

function FifthCard({ title, highlight, text, desc, csp }: any) {
    return (
        <div className="relative rounded-3xl grid grid-cols-[1.20fr_0.80fr] bg-white/5 border border-white/10 p-7 backdrop-blur">
            <div>
                <span className="flex text-xs font-thin uppercase tracking-wider text-brand-foreground/75 justify-between">{csp}</span>
                <h4 className="mt-3 font-display text-2xl font-semibold text-white">{title}{" "}
                    <span className="text-amber-600">{highlight}</span> {" "}
                    {text}
                </h4>
                <p className="mt-3 text-brand-foreground/75">{desc}</p>

            </div>


            <img src="/card-elements/img-fifthCard.svg" alt=""
                className="absolute
                right-0
                bottom-0
                w-60
                translate-x-[15%]" />



        </div>
    );
}