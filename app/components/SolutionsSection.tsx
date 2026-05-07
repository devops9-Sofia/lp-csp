const benefits = [
    { title: "Cadastro de produtos automático", desc: "Automatize o cadastro de produtos e ganhe velocidade na publicação de seus anúncios.", link: "www.outralpcompresuapeca.com.br" },
    { title: "Impulsione suas vendas on-line", desc: "Estratégias e otimização para impulsionar seus anúncios e acelerar suas vendas online.", link: "www.outralpcompresuapeca.com.br" },
    { title: "Venda sem precisar de estoque", desc: "Amplie todo seu catálogo e venda mais, sem precisar de estoque próprio", link: "www.outralpcompresuapeca.com.br" },
    { title: "Conecte todo seu catálogo com todos os Marketplaces de uma vez", desc: "Ferramentas de integração que conecta sua operação aos marketplaces", link: "www.outralpcompresuapeca.com.br" },
    { title: "Controle todas as operações em só lugar", desc: "O ecossista de soluções para o mercado automotivo Plataforma do Compre Sua Peça que reúne soluções digitais para integração", link: "www.outralpcompresuapeca.com.br" }
];

export function SolutionsSection() {
    return (
        <section id="soluções" className="py-5">

            <div className="mx-auto max-w-5xl  rounded-3xl py-5 bg-gray-100">

                <h1 className="text-center font-display text-3xl font-semibold max-w-3/4 mx-auto mt-10">
                    Conheça as soluções que <span className="font-bold">mudam</span>  o nível do seu negócio
                </h1>

                <div className="mt-8 w-[90%] grid grid-cols-[0.90fr_1fr] gap-1 mx-auto ">

                    <div className="h-full">
                        <img
                            src="/carrossel-solucoes-1.svg"
                            alt=""
                            className="h-full w-full object-cover rounded-3xl"
                        />
                    </div>

                    <div className="bg-card rounded-3xl pl-5 shadow-card">
                        <ul className=" space-y-5">
                            {benefits.map((b) => (
                                <li key={b.title} className="relative flex gap-3">
                                    <div
                                        className="absolute left-0 top-0 h-full w-2 rounded-full bg-purple-700">
                                    </div>


                                    <div className=" px-5">
                                        <div className="font-semibold text-lg">{b.title}</div>
                                        <div className=" text-sm text-muted-foreground">{b.desc}</div>
                                        <a href={b.link} className="text-xs text-blue-600 ">{b.link}</a>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>

            </div>

            <div>

            </div>
        </section>
    );
}
