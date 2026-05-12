import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
// import event from "@/assets/event-crowd.jpg";

export function FormSection() {
  return (
    <section className="py-10 ">
      <div className="mx-auto max-w-7xl bg-gradient-hero rounded-3xl p-6 grid grid-cols-2 gap-10 items-center text-brand-foreground">
        <div className="relative rounded-3xl overflow-hidden group">
          {/* <img src={event} alt="AutoBoost Experience" loading="lazy" width={1024} height={600}
            className="w-full h-[360px] object-cover" /> */}
          <div className="absolute inset-0 bg-black/30 grid place-items-center">
            <button className="flex items-center gap-2 bg-white/90 text-brand-deep rounded-full px-6 py-3 font-semibold hover:bg-white transition">
              <Play className="h-4 w-4 fill-current" /> Saiba mais
            </button>
          </div>
        </div>

        <div>
          <p className="mt-3 text-lg text-brand-foreground/80">
            Entre em contato
          </p>
          <form className="mt-6 space-y-3 max-w-md">
            <input className="w-full rounded-lg bg-white text-foreground px-5 py-3 outline-none" placeholder="Como quer ser chamado" />
            <input className="w-full rounded-lg bg-white text-foreground px-5 py-3 outline-none" placeholder="Seu melhor e-mail" />
            <input className="w-full rounded-lg bg-white text-foreground px-5 py-3 outline-none" placeholder="Telefone" />
            <Button className="rounded-full bg-cta text-cta-foreground hover:opacity-90 px-7 h-12">Enviar</Button>
          </form>
        </div>
      </div>
    </section>
  );
}