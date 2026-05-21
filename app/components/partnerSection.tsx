const partners = [
  { logo: "/partiners-section-carrossel/magalu-carrossel.svg" },
  { logo: "/partiners-section-carrossel/sankhya-carrossel.svg" },
  { logo: "/partiners-section-carrossel/meli-carrossel.svg" },
  { logo: "/partiners-section-carrossel/tiny-carrossel.svg" },
  { logo: "/partiners-section-carrossel/shopify-carrossel.svg" },
  { logo: "/partiners-section-carrossel/shopee-carrossel.svg" },
  { logo: "/partiners-section-carrossel/tray-carrossel.svg" },
];

export function PartnerSection() {
  return (
    <section id="parceiros" className="py-10">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-2xl font-semibold uppercase tracking-wider text-gray-500">
          Parceiros de integração
        </p>

        <div className="marquee mt-5 rounded-3xl bg-gray-200 py-6">

          <div className="marquee-track">

            {[...partners, ...partners, ...partners].map((p, index) => (
              <div
                key={index}
                className="mx-10 shrink-0"
              >
                <img
                  src={p.logo}
                  alt=""
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}