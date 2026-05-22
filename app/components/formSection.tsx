import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
// import event from "@/assets/event-crowd.jpg";
import { IoMdSend } from "react-icons/io";

export function FormSection() {
    return (
        <section className="py-10 ">
            <div className="flex mx-auto max-w-7xl bg-purple-950 rounded-3xl p-6 items-center text-brand-foreground justify-center">
                <div className="flex gap-10 items-center">
                    <div >
                        <iframe
                            className="rounded-3xl mx-auto"
                            width="600" height="400"
                            src="https://www.youtube.com/embed/HSVZLv2Z5Wo?si=Y_uEUS7tcwHRmx8F"
                            title="YouTube video player"
                            allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture; 
                            web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    </div>

                    <div className="">
                        <p className="mt-3 text-lg text-brand-foreground/80">
                            Entre em contato
                        </p>
                        <form className="mt-6 space-y-3 max-w-md">
                            <label htmlFor="name">Nome completo</label>
                            <input name="name" type="text" className="w-full rounded-lg bg-white text-foreground px-5 py-3 outline-none" />

                            <label htmlFor="company">Nome da Empresa</label>
                            <input name="company" type="text" className="w-full rounded-lg bg-white text-foreground px-5 py-3 outline-none" />

                            <label htmlFor="email">Seu melhor e-mail</label>
                            <input name="email" type="email" className="w-full rounded-lg bg-white text-foreground px-5 py-3 outline-none" />

                            <label htmlFor="phone">Telefone/WhatsApp</label>
                            <label htmlFor="ddd"></label>
                            <div className="flex gap-2">
                                <input name="ddd" type="tel" maxLength={2} className="w-1/4 rounded-lg bg-white text-foreground px-5 py-3 outline-none" placeholder="DDD" />
                                <input name="phone" type="tel" className="w-3/4 rounded-lg bg-white text-foreground px-5 py-3 outline-none" placeholder="Telefone" />
                            </div>

                            <Button className="rounded-full bg-cta text-cta-foreground hover:opacity-90 px-7 h-12" type="submit">
                                Enviar <IoMdSend className="mr-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}