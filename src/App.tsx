import Header from "./components/sections/header"
import Hero from "./components/sections/hero"
import Benefits from "./components/sections/benefits"
import Produtos from "./components/sections/produtos"
import Testimonials from "./components/sections/testemonials"
import FAQ from "./components/sections/faq"
import Contact from "./components/sections/contact"
import Footer from "./components/sections/footer"
import WhatsAppButton from "./components/wpp-button"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />      {/* Entrega valor logo de cara */}
        <Produtos />      {/* Mostra o que ele quer comprar */}
        <Testimonials />  {/* Prova social para gerar confiança */}
        <FAQ />           {/* Tira as dúvidas que impedem a compra */}
        <Contact />       {/* Localização e canais diretos */}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App