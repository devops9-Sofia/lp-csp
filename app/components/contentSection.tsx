import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function ContentSection() {
    return (
        <section className="py-10">

            <div className="mx-auto max-w-7xl px-6 space-y-16">

                <div className="grid grid-cols-2 gap-5 items-center bg-gray-200 p-6 rounded-3xl">

                    <div className="aspect-video rounded-3xl bg-muted shadow-card grid place-items-center">
                        <div className="h-16 w-16 rounded-full bg-gradient-cta grid place-items-center">
                            <Play className="h-6 w-6 text-cta-foreground fill-current" />
                        </div>
                    </div>

                    <div>
                        <h1 className="mt-3 font-display text-[27px]  font-semibold text-gray-600 ">
                            Somos autoridades no <span className=" font-bold">mercado digital auto</span>
                        </h1>
                        <p className="mt-3 text-gray-600">Veja o que separamos para compartilhar nosso conhecimento.</p>


                        <div className="mt-5">
                            <span className=" text-sm text-gray-600"> Veja nossos conteúdos e fique por dentro!</span>

                            <div className="flex flex-col mt-3 gap-3">

                                <Button className="w-full h-[4rem] bg-white text-black text-md border-gray-300">
                                    Webnar
                                </Button>

                                <Button className="w-full h-[4rem] bg-white text-black text-md border-gray-300">
                                    CSP | Academy
                                </Button>

                                <Button className="w-full h-[4rem] bg-white text-black text-md border-gray-300">
                                    Comunidade
                                </Button>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="flex mx-auto max-w-7xl space-y-16">

                    <div className="mx-auto">
                        <span className="text-lg font-semibold text-muted-foreground mx-auto">Depoimentos</span>
                        
                        <div className="mt-2">

                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/HSVZLv2Z5Wo?si=Tc3lAEuVVAeBTskr" 
                                title="YouTube video player" 
                                frameBorder="0" allow="accelerometer; 
                                autoplay; clipboard-write; encrypted-media; 
                                gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen> 
                            </iframe>

                        </div>
                    </div>
                    

                </div>

            </div>

        </section>
    );
}