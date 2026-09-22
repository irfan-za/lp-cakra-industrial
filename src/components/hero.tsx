'use client'

import { ArrowDownIcon, ArrowUpRightIcon } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#approach', label: 'Approach' },
]

export function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-walnut px-4 pb-6 pt-5 text-cream sm:px-6 lg:px-8">
      <img
        alt="Aerial industrial facility in Banten, Indonesia"
        className="ink-image absolute inset-0 size-full object-cover"
        fetchPriority="high"
        height={1300}
        src="/images/facility-hero.webp"
        width={2000}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,9,4,0.92)_0%,rgba(16,9,4,0.52)_43%,rgba(16,9,4,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(16,9,4,0.86)_0%,transparent_42%)]" />

      <nav aria-label="Primary" className="relative z-10 flex items-center justify-between gap-5">
        <a className="ui-label whitespace-nowrap text-cream" href="#top">
          CAKRA
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a className="ui-label whitespace-nowrap text-cream underline decoration-dashed underline-offset-8 transition-colors hover:text-ember" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="ui-label whitespace-nowrap text-cream underline underline-offset-4 transition-colors hover:text-ember" href="mailto:hello@cakra.example">
          Contact
        </a>
      </nav>

      <div className="relative z-10 flex min-h-[calc(100dvh-48px)] flex-col justify-between pt-16 lg:pt-20">
        <div className="max-w-5xl">
          <p className="ui-label mb-5 text-cream">Industrial clarity for Indonesia</p>
          <h1 className="display-lockup copy-wrap max-w-[9ch] text-cream">CAKRA</h1>
          <p className="mt-8 max-w-md text-lg font-normal leading-[1.35] text-cream sm:text-xl">
            A corporate landing page for companies shaping the real economy, from infrastructure and manufacturing to logistics.
          </p>
        </div>

        <div className="grid gap-6 pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)_auto] lg:items-end">
        <div className="rounded-[12px] border border-cream/25 bg-walnut/75 p-6 backdrop-blur-sm">
            <p className="ui-label text-ember">Corporate template</p>
            <div className="dash-rule my-5" />
            <p className="text-base font-normal leading-relaxed text-cream sm:text-lg">
              Built for teams that need an introduction with presence, without falling back on generic corporate polish.
            </p>
          </div>
          <motion.a
            className="ui-label inline-flex w-fit items-center gap-3 rounded-[36px] bg-bark px-6 py-4 text-cream transition-transform duration-200 active:translate-y-0"
            href="#capabilities"
            whileHover={reducedMotion ? undefined : { y: -2 }}
          >
            Explore the structure <ArrowDownIcon aria-hidden="true" size={17} weight="regular" />
          </motion.a>
          <a aria-label="Email Cakra" className="hidden items-center justify-center text-cream transition-colors hover:text-ember lg:flex" href="mailto:hello@cakra.example">
            <ArrowUpRightIcon aria-hidden="true" size={26} weight="light" />
          </a>
        </div>
      </div>
    </section>
  )
}
