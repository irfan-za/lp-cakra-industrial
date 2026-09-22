import { ArrowUpRightIcon } from '@phosphor-icons/react'

import { Reveal } from './reveal'

const capabilities = [
  {
    number: '01',
    title: 'Infrastructure delivery',
    body: 'For operators who need a corporate story that moves from mandate to execution without overexplaining either.',
  },
  {
    number: '02',
    title: 'Manufacturing systems',
    body: 'A visual framework for businesses where process, people, and precision deserve equal attention.',
  },
  {
    number: '03',
    title: 'Industrial logistics',
    body: 'A composed structure for communicating connected operations across facilities, fleets, and regions.',
  },
]

export function Capabilities() {
  return (
    <section className="bg-walnut px-4 py-20 sm:px-6 sm:py-28 lg:min-h-[100dvh] lg:px-8 lg:py-24" id="capabilities">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <Reveal>
          <p className="ui-label text-ember">What the template holds</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="copy-wrap max-w-3xl text-4xl font-medium uppercase leading-[0.9] text-cream sm:text-5xl lg:text-7xl">
            A structure designed for serious work.
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 border-t border-cork">
        {capabilities.map((capability, index) => (
          <Reveal delay={index * 0.06} key={capability.number}>
            <article className="grid gap-6 border-b border-dashed border-cork py-9 md:grid-cols-[68px_minmax(0,1fr)_minmax(0,0.85fr)_auto] md:items-start md:gap-8">
              <p className="ui-label text-drift">{capability.number}</p>
              <h3 className="copy-wrap text-3xl font-medium uppercase leading-[0.92] text-cream sm:text-4xl">{capability.title}</h3>
              <p className="max-w-md text-base font-normal leading-relaxed text-cream sm:text-lg">{capability.body}</p>
              <a aria-label={`Learn more about ${capability.title}`} className="inline-flex size-10 items-center justify-center rounded-full border border-cream/50 text-cream transition-colors hover:border-ember hover:text-ember" href="mailto:hello@cakra.example">
                <ArrowUpRightIcon aria-hidden="true" size={20} weight="light" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
