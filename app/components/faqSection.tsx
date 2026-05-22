"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@base-ui/react";
import { MdArrowOutward } from "react-icons/md";


const faqs = [
    { q: "O que o CSP|Compre sua Peça faz?", p1: "Nós somos a Primeira Autotech do Brasil. Uma empresa de tecnologia voltada para o mercado automotivo a fim de digitalizar, estruturar e impulsionar a evolução desse setor.", p2: "Impulsionamos autopeças, distribuidores e fabricantes a escalarem suas vendas no digital, estruturando toda a base necessária para transformar produtos automotivos em oportunidades reais de venda online." },
    { q: "O que é uma Autotech?", p1: "Autotech é uma empresa que utiliza tecnologia para solucionar desafios do setor automotivo.", p2: "No CSP|Compre Sua Peça, nós aplicamos tecnologia, dados e inteligência operacional, para que as empresas garantam sua presença no digital e vendam com mais eficiência nos canais" },
    { q: "O que preciso fazer para começar no digital?", p1: "Para começar no digital, o primeiro passo é organizar a base da operação.", p2: "Isso envolve entender quais produtos serão vendidos, estruturar informações como código, aplicação, compatibilidade, fotos, preços e estoque, além de definir os canais de venda mais adequados para o seu negócio.", p3: "O CSP ajuda nesse processo desde a criação e padronização dos anúncios até a estruturação do catálogo, e-commerce e estratégias de performance garantindo uma operação planejada e organizada para crescer." },
    { q: "Como te atendemos?", p1: "Analisamos o momento atual da empresa. A partir disso, indicamos a estrutura mais adequada dentro das soluções do CSP.", p2: "Depois, conduzimos o processo com um time especializado, responsável por orientar a implantação, organizar as informações, acompanhar as entregas e apoiar a evolução da operação digital.", p3: "Nosso objetivo é tornar o digital mais claro, mais estruturado e mais eficiente para empresas do mercado automotivo." },
];

export function FaqSection() {
    return (

        <section className="py-10">

            <div className="flex gap-5  max-w-6xl items-center mx-auto ">
                <span className="inline-block rounded-full bg-purple-100 border border-purple-200 text-purple-700 px-4 py-1 text-xs font-semibold">
                    Plataforma
                </span>
                <img src="/elements/linhas.layout.svg" alt="linhas" className="flex-1" />
            </div>

            <div className="mt-5 mx-auto max-w-6xl px-6 grid grid-cols-2 gap-12">

                <div>
                    <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold">Dúvidas Frequentes</h3>

                    <p className="mt-3 text-muted-foreground">Respostas rápidas para as perguntas mais frequentes.</p>

                    <Button
                        onClick={() => {
                            window.gtag?.("event", "btn_executivo_faq", {
                                event_category: "btn_executivo_faq",
                                event_label: `User clicked on button -fale com um executivo-`,
                            });
                        }}
                        className="flex mt-5 bg-gradient-cta text-cta-foreground hover:opacity-90 rounded-lg items-center justify-center px-7 h-12 w-fit ">
                        Fale com um excutivo
                        <MdArrowOutward className="ml-1 h-4 w-4" />
                    </Button>

                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((f, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-2xl mb-3 px-5 border shadow-card">
                            <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                <p>{f.p1}</p>
                                {f.p2 && <p className="mt-2">{f.p2}</p>}
                                {f.p3 && <p className="mt-2">{f.p3}</p>}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}