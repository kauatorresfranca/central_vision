import { Suspense, lazy } from 'react' // Importamos as ferramentas de carregamento tardio
import Header from "./components/sections/header"
import Hero from "./components/sections/hero"

// As seções que ficam "abaixo da dobra" (que o usuário não vê de cara) são carregadas via lazy
const Benefits = lazy(() => import("./components/sections/benefits"))
const Produtos = lazy(() => import("./components/sections/produtos"))
const Testimonials = lazy(() => import("./components/sections/testemonials"))
const FAQ = lazy(() => import("./components/sections/faq"))
const Contact = lazy(() => import("./components/sections/contact"))
const Footer = lazy(() => import("./components/sections/footer"))
const WhatsAppButton = lazy(() => import("./components/wpp-button"))

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Benefits />
          <Produtos />
          <Testimonials />
          <FAQ />
          <Contact />
          <Footer />
          <WhatsAppButton />
        </Suspense>
      </main>
    </>
  )
}

export default App