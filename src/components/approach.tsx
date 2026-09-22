import { ArrowUpRightIcon } from '@phosphor-icons/react'

import { Reveal } from './reveal'

const principles = [
  ['Start with the operating reality', 'The opening line should explain the business in terms its audience already understands.'],
  ['Give the work room', 'Large visual moments create clarity when the business has real material to show.'],
  ['Let proof be specific', 'Add verified figures, clients, and certifications only after the template is adapted for a real company.'],
]

export function Approach() {
  return (
    <section className="relative overflow-hidden bg-walnut px-4 py-20 sm:px-6 sm:py-28 lg:min-h-[100dvh] lg:px-8 lg:py-24" id="approach">
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-bark/20" />
      <div className="relative">
        <div className="dash-rule" />
        <div className="grid gap-10 pt-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <Reveal>
            <p className="ui-label text-ember">Built to be replaced</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="copy-wrap max-w-3xl text-4xl font-medium uppercase leading-[0.9] text-cream sm:text-5xl lg:text-7xl">
              Make the company the object of attention.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <Reveal className="overflow-hidden">
            <img alt="Top view of an industrial complex" className="ink-image aspect-[4/3] w-full object-cover" height={1050} loading="lazy" src="/images/aerial-grid.webp" width={1400} />
          </Reveal>
          <div className="border-t border-cork">
            {principles.map(([title, body], index) => (
              <Reveal delay={index * 0.07} key={title}>
                <article className="border-b border-dashed border-cork py-7">
                  <h3 className="text-2xl font-medium uppercase leading-[0.94] text-cream">{title}</h3>
                  <p className="mt-4 max-w-lg text-base font-normal leading-relaxed text-cream sm:text-lg">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Closing() {
  return (
    <section className="bg-walnut px-4 pb-6 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pt-24">
      <div className="dash-rule" />
      <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-end">
        <Reveal>
          <p className="ui-label text-ember">CAKRA / Corporate template</p>
          <h2 className="copy-wrap mt-7 max-w-4xl text-5xl font-medium uppercase leading-[0.82] text-cream sm:text-7xl lg:text-8xl">
            Built for the businesses that keep Indonesia moving.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-md text-xl font-normal leading-[1.34] text-cream sm:text-2xl">
            Replace the name, images, verified proof points, and contact link. The visual system stays deliberate.
          </p>
          <a className="link-ember ui-label mt-8 inline-flex items-center gap-2 whitespace-nowrap" href="mailto:hello@cakra.example">
            Email the team <ArrowUpRightIcon aria-hidden="true" size={17} weight="regular" />
          </a>
        </Reveal>
      </div>
      <footer className="flex flex-col gap-5 border-t border-dashed border-cork py-6 text-cream sm:flex-row sm:items-center sm:justify-between">
        <p className="ui-label">CAKRA / Placeholder Corporate System</p>
        <p className="font-legal text-[8px] font-medium uppercase text-drift">Template imagery: Pexels, replace before client launch</p>
      </footer>
    </section>
  )
}
