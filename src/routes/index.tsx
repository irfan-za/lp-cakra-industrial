import { About } from '../components/about'
import { Approach, Closing } from '../components/approach'
import { Capabilities } from '../components/capabilities'
import { Hero } from '../components/hero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Capabilities />
      <Approach />
      <Closing />
    </main>
  )
}
