import { ArrowUpRightIcon } from '@phosphor-icons/react'

import { Reveal } from './reveal'

export function About() {
  return (
    <section className="bg-walnut px-4 py-20 sm:px-6 sm:py-28 lg:min-h-[100dvh] lg:px-8 lg:py-24" id="about">
      <div className="dash-rule" />
      <div className="grid gap-10 pt-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.4fr)] lg:gap-20">
        <Reveal>
          <p className="ui-label text-ember">A clear point of view</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="copy-wrap max-w-4xl text-4xl font-medium uppercase leading-[0.9] text-cream sm:text-5xl lg:text-7xl">
            The work is physical. The digital presence should feel equally considered.
          </h2>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
        <Reveal className="overflow-hidden">
          <img alt="Aerial industrial infrastructure in Indonesia" className="ink-image aspect-[4/3] w-full object-cover" height={1050} loading="lazy" src="/images/facility-detail.webp" width={1400} />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-xl font-normal leading-[1.34] text-cream sm:text-2xl">
            CAKRA is a fictional Indonesian industrial group used to show how a corporate site can communicate scale, capability, and focus with fewer, stronger moments.
          </p>
          <a className="link-ember ui-label mt-8 inline-flex items-center gap-2 whitespace-nowrap" href="#approach">
            See the operating approach <ArrowUpRightIcon aria-hidden="true" size={17} weight="regular" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
