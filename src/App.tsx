import AboutMe from "./components/sections/about-me"
import Benefits from "./components/sections/benefits"
import Categories from "./components/sections/categories/index."
import Contact from "./components/sections/contact"
import FAQ from "./components/sections/faq"
import Footer from "./components/sections/footer"
import Header from "./components/sections/header"
import Hero from "./components/sections/hero"
import Services from "./components/sections/services"
import Testimonials from "./components/sections/testemonials"

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Benefits />
      <Categories />
      <Contact />
      <Services />
      <AboutMe />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
