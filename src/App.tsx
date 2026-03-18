import AboutMe from "./components/sections/about-me"
import Benefits from "./components/sections/benefits"
import Produtos from "./components/sections/produtos/index."
import Contact from "./components/sections/contact"
import FAQ from "./components/sections/faq"
import Footer from "./components/sections/footer"
import Header from "./components/sections/header"
import Hero from "./components/sections/hero"
import Services from "./components/sections/services"
import Testimonials from "./components/sections/testemonials"
import WhatsAppButton from "./components/wpp-button"

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Benefits />
      <Produtos />
      <Contact />
      <Services />
      <AboutMe />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
