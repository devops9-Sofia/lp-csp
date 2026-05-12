
const items = [
    { icon: "/icons/money-icon.svg", strong: "Digitalize", text: "seu negócio" },
    { icon: "/icons/grafic-icon.svg", strong: "Escale", text: "suas operações" },
    { icon: "/icons/potencialize-icon.svg", strong: "Potencializar", text: "suas vendas" },
];

export function FutureSection() {
    return (
        <section className="pt-10 pb-5">
            <div className="flex gap-5  max-w-5xl items-center mx-auto ">
                <span className="inline-block rounded-full bg-purple-100 border border-purple-200 text-purple-700 px-4 py-1 text-xs font-semibold">
                    Plataforma
                </span>
                <img src="/elements/linhas.layout.svg" alt="linhas" className="flex-1" />
            </div>

            <div className="mx-auto max-w-3/4 grid grid-cols-[1.5fr_0.90fr] gap-8 items-start ">

                <div className="mx-auto">
                    <div>
                        <h2 className="mt-8 font-display text-3xl font-semibold leading-tight">
                            O futuro do seu negócio está a um{" "}

                            <span className="inline-flex items-center gap-2 whitespace-nowrap">
                                <span className="text-purple-700">clique</span>
                                de distância

                                <img
                                    src="/icons/click-icon.svg"
                                    alt="click-icon"
                                    className="h-8 w-8 shrink-0"
                                />
                            </span>
                        </h2>
                    </div>

                    <ul className="mt-8 space-y-4 items-end">
                        {items.map((it) => (
                            <li key={it.strong} className="grid grid-cols-[44px_1fr] gap-6 p-4 bg-gray-100 rounded-xl w-full items-center">
                                <div className="h-11 w-11 shrink-0 rounded-xl grid place-items-center text-purple-700">
                                    <img
                                        src={it.icon}
                                        alt=""
                                        className="h-8 w-8"
                                    />
                                </div>

                                <div className="flex flex-1 justify-center items-center">
                                    <p  className="text-center">
                                    <span className="font-semibold ">{it.strong}</span>
                                    {" "}
                                    {it.text}
                                    </p>
                                </div>

                            </li>
                        ))}
                    </ul>

                </div>


                <div className="justify-center items-end py-10">
                    <img src="/image-future-section.png" alt="Operação automotiva" loading="lazy"
                        className="w-full h-full" />

                </div>
            </div>
        </section>
    );
}