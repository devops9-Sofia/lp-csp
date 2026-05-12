import { Button } from "@/components/ui/button";


export function CtaSection() {
  return (
    <section id="contato" className="py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="relative rounded-3xl overflow-hidden shadow-glow">

          <img src="./img-cta-section.png" alt="" loading="lazy" width={1280} height={512}
            className="w-full h-[280px] md:h-[340px] object-cover" />
            
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-brand-deep/70 to-transparent" />
          
          <div className="absolute inset-0 flex items-centerp-14">
            
            <div className="flex flex-col rounded-2xl p-6 max-w-md shadow-card bg-white">
              
              <span className="text-xs font-semibold uppercase tracking-wider text-brand p-3 bg-purple-200 rounded-full border border-purple-300 w-[50%]">Fale com um executivo</span>
              
              <h3 className="mt-2 font-display text-3xl font-semibold">
                Pronto para dar o próximo passo?
              </h3>
              
              <p className="mt-2 text-sm text-muted-foreground">
                Se busca facilidade e clareza para acelerar as vendas no digital, o momento de agir é agora.
              </p>

              <div className="items-center justify-center">
              <Button className="mt-5 rounded-full bg-gradient-cta text-white hover:opacity-90 p-6 w-[50%] ">
                Agendar Diagnóstico
              </Button>
            </div>

            </div>
          
          </div>
       
        </div>
     
      </div>
    
    </section>
  );
}
