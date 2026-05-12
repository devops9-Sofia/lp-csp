const partners =[ {logo:"./partiners-section-carrossel/magalu-carrossel.svg"},
                  {logo:"./partiners-section-carrossel/sankhya-carrossel.svg"},
                  {logo:"./partiners-section-carrossel/meli-carrossel.svg"},
                  {logo:"./partiners-section-carrossel/tiny-carrossel.svg"},
                  {logo:"./partiners-section-carrossel/shopify-carrossel.svg"},
                  {logo:"./partiners-section-carrossel/shopee-carrossel.svg"},
                  {logo:"./partiners-section-carrossel/tray-carrossel.svg"},

]

export function PartnerSection() {
  return (
    <section id="parceiros" className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-2xl font-semibold uppercase tracking-wider text-gray-500">
          Parceiros de integração
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 bg-gray-200 p-4 rounded-3xl">
          {partners.map((p) => (
            <span key={p.logo} className="font-display font-bold text-2xl text-muted-foreground hover:text-brand transition">
              <img src={p.logo} 
              alt=""
              className="w-20 h-15"
               />
            </span>

          ))}
        </div>
      </div>
    </section>
  );
}