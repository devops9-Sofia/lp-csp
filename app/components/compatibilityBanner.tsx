"use client";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";

export function CompatibilityBanner() {
  return (
    <section className="pt-10 ">
      
      <div className="relative overflow-visible bg-purple-950 ml-auto max-w-7xl min-h-80 px-6 flex gap-10 items-center text-brand-foreground rounded-l-3xl">
        
        <div className="my-10 ml-15 w-1/2">
          
          <h3 className=" font-display text-3xl font-semibold leading-tight ">
            Definir todas as compatibilidades é desafiador?
          </h3>
          
          <p className="mt-3 text-brand-foreground/80 max-w-md font-thin">
            <span className="font-medium">Banco de Dados</span>{" "}
            de compatibilidades completo em nossa {" "}
            <span className="font-medium text-amber-600">Plataforma | CSP</span>
          </p>
          
          <Button
           onClick={() => {
              window.gtag?.("event", "btn_diagnostico_compatibilidade", {
                event_category: "diagnostico_compatibilidade",
                event_label: `User clicked on button -agendar diagnostico-`,
              });
            }} 
          className="mt-6 bg-gradient-cta text-cta-foreground rounded-full px-6 hover:opacity-90">
            Agendar Diagnóstico 
            <MdArrowOutward className="ml-1 h-4 w-4" />
          </Button>
        </div>


            <img src="/compatibility-section-img.svg" 
            alt=""
            className="
            absolute
            right-0
            bottom-0
            w-100
            -translate-x-1/5
            translate-y-1/5" />
          


            

      </div>

    </section>
  );
}
