import { Button } from "@/components/ui/button";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { Check } from "lucide-react";

const plans = [
  {icon:"", name: "DISTRIBUIÇÃO", desc: "Venda seu estoque online  para todo o Brasil", features: ["E-commerce", "Marketplaces", "Venda da peça certa com inteligência", "Giro de estoque parado"] },
  {icon:"", name: "VAREJISTA", desc: "Amplie a rede sem aumentar equipe", features: ["Venda sem sair de casa", "Site B2B", "Catálogo vivo", "Ampliação da rede comercial", "Venda em múltiplos canais"]},
  {icon:"", name: "FABRICANTES", desc: "Venda direto sem abrir mão do canal", features: ["Catálogo online", "Distribuição digital", "Padronização da presença digital", "Escalada de rede"] },
  {icon:"", name: "CONCESSIONARIAS", desc: "Venda para empresas com escala", features: ["Portal de compras para PJ", "Venda recorrente e automática", "Gestão de canais e representantes", "Integração com ERP e NF-e"] },
];

export function BusinessModelSolutionSection() {
  return (
    <section id="planos" className="py-5">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center font-display text-4xl font-semibold">
          Soluções para cada modelo de negócio
        </h2>

        <p className="text-center text-[20px] text-gray-500 mt-3">Entenda qual formato faz mais sentido para o seu negócio</p>

        <div className="mt-12 flex gap-4">

          {plans.map((p) => (
            <div key={p.name}
              className="relative rounded-3xl p-7 shadow-card border bg-card flex flex-col w-[20rem]">

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
              
              <Button className="mt-6 bg-gradient-cta text-cta-foreground rounded-full hover:opacity-90">
                Começar agora
              </Button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}