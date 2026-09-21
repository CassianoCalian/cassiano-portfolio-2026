export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* FUNDO */}
      <div className="ambient-light ambient-light-primary" aria-hidden="true" />

      <div
        className="ambient-light ambient-light-secondary"
        aria-hidden="true"
      />

      {/* HUD DECORATIVO */}
      <div className="hud-corner hud-top-left" aria-hidden="true" />

      <div className="hud-corner hud-bottom-right" aria-hidden="true" />

      <div className="holo-core hidden lg:block" aria-hidden="true">
        <div className="holo-ring holo-ring-outer" />

        <div className="holo-ring holo-ring-middle" />

        <div className="holo-ring holo-ring-inner" />

        <div className="holo-cross holo-cross-horizontal" />

        <div className="holo-cross holo-cross-vertical" />

        <div className="holo-center">
          <span className="holo-center-dot" />
        </div>

        <span className="holo-marker holo-marker-1" />
        <span className="holo-marker holo-marker-2" />
        <span className="holo-marker holo-marker-3" />

        <div className="holo-data holo-data-top">SYS / 01</div>

        <div className="holo-data holo-data-bottom">INTERFACE ACTIVE</div>
      </div>

      <div className="tech-grid" aria-hidden="true" />

      <div className="screen-vignette" aria-hidden="true" />

      {/* HERO */}
      <section className="relative z-10 min-h-screen px-6 md:px-10 lg:px-16">
        <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col justify-between py-7 md:py-10">
          {/* TOPO */}
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold tracking-[-0.05em]">
                CC
              </span>

              <span className="h-px w-8 bg-white/20" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Portfolio / 2026
              </span>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--cyan)] opacity-30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--cyan)]" />
              </span>

              <span className="text-[10px] uppercase tracking-[0.28em] text-white/50">
                Available for opportunities
              </span>
            </div>
          </header>

          <div className="grid items-end gap-12 lg:grid-cols-[1fr_340px] lg:gap-20"></div>

          {/* CONTEÚDO PRINCIPAL */}
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_340px] lg:gap-20">
            {/* TÍTULO */}
            <div>
              <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.38em] text-[var(--cyan)] md:text-xs">
                Software Developer
              </p>

              <h1 className="uppercase">
                <span className="block text-[clamp(4.5rem,11vw,11rem)] font-semibold leading-[0.78] tracking-[-0.075em]">
                  Cassiano
                </span>

                <span className="block text-[clamp(4.5rem,11vw,11rem)] font-semibold leading-[0.78] tracking-[-0.075em] text-white/30">
                  Calian<span className="text-[var(--cyan)]">.</span>
                </span>
              </h1>
            </div>

            {/* TEXTO LATERAL */}
            <div className="pb-2 lg:pb-3">
              <div className="mb-5 h-px w-full bg-white/10" />

              <p className="mb-8 max-w-sm text-sm leading-7 text-[var(--foreground-muted)] md:text-base">
                Desenvolvo experiências digitais e sistemas modernos, unindo
                desenvolvimento de software, interfaces e dados para transformar
                ideias em produtos reais.
              </p>

              <a
                href="#projects"
                className="group inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.22em] text-white"
              >
                Explorar projetos
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-[var(--cyan)] group-hover:text-[var(--cyan)]">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* RODAPÉ DO HERO */}
          <div className="flex items-end justify-between border-t border-white/[0.08] pt-5">
            <div className="flex gap-8">
              <div>
                <span className="block text-[9px] uppercase tracking-[0.3em] text-white/30">
                  Focus
                </span>

                <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-white/70">
                  Front-end / Full Stack
                </span>
              </div>

              <div className="hidden sm:block">
                <span className="block text-[9px] uppercase tracking-[0.3em] text-white/30">
                  Secondary
                </span>

                <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-white/70">
                  Data
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                Scroll
              </span>

              <span className="h-10 w-px bg-gradient-to-b from-[var(--cyan)] to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
