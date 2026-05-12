import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@base-ui/react";
import { MdArrowOutward } from "react-icons/md";


const faqs = [
    { q: "Quanto tempo leva para integrar?", a: "Em média entre 7 e 14 dias úteis, dependendo do seu ERP." },
    { q: "A AutoBoost atende fabricantes?", a: "Sim, temos um plano dedicado para indústrias e fabricantes." },
    { q: "Posso vender em vários marketplaces?", a: "Sim, conectamos os principais marketplaces do Brasil." },
    { q: "Existe fidelidade?", a: "Não. Você pode cancelar quando quiser, sem multa." },
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

                    <Button className="bg-gradient-cta text-cta-foreground hover:opacity-90 rounded-full px-7 h-12 w-fit whitespace-nowrap">
                        Fale com um excutivo
                        <MdArrowOutward className="ml-1 h-4 w-4" /> 
                    </Button>
                
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((f, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-2xl mb-3 px-5 border shadow-card">
                            <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}