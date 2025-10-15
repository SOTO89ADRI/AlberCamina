import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Heart, Users, Gift, Footprints, Target, Trophy, Share2, ChevronDown, ChevronUp, Menu, X } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'

// Importar imágenes
import heroImage from './assets/hero.jpg'
import communityImage from './assets/community.jpg'
import solidarityImage from './assets/solidarity.jpg'
import phoneImage from './assets/phone.jpg'
import rewardsImage from './assets/rewards.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1])
  const headerBlur = useTransform(scrollY, [0, 100], [0, 10])
const [openIndex, setOpenIndex] = useState(null);
const [visitCount, setVisitCount] = useState(null);

useEffect(() => {
  fetch('https://script.google.com/macros/s/AKfycbyJV6OCt8ZZpLuyq93cLkQvqa9h1OJKWpyvbpqIMPFDCPXVUxGktq8PCK4atEK9pQ95BQ/exec')
    .then(res => res.text())
    .then(data => setVisitCount(data));
}, []);

  // Cerrar menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  }
const faqList = [
 {
    question: "¿Es realmente gratis unirse a AlberCamina y usar WeWard?",
    answer: "Sí, es 100% gratuito. No tienes que pagar absolutamente nada para descargar la app ni para unirte a la comunidad. La aplicación se financia a través de sus socios (tiendas, marcas) y tú ganas puntos (Wards) simplemente por hacer algo que ya haces: caminar."
  },
  {
    question: "¿Tengo que hacer algo diferente o caminar más de lo normal?",
    answer: "Para nada. Ese es el punto clave: no necesitas hacer nada extra. Simplemente vive tu día a día. La app cuenta los pasos que ya das al ir a trabajar, a comprar o al pasear. El objetivo es recompensar tu actividad cotidiana, no exigirte un esfuerzo adicional."
  },
  {
    question: "¿Cómo funciona exactamente? ¿Cómo se convierten mis pasos en ayuda?",
    answer: "Es muy sencillo: 1. Caminas con tu móvil en el bolsillo. 2. La app cuenta tus pasos en segundo plano. 3. Abres la app una vez al día para 'validar' esos pasos y convertirlos en puntos llamados 'Wards'. 4. Esos Wards los puedes donar a las causas solidarias que aparecen en la app. ¡Así de fácil!"
  },
  {
    question: "¿Necesito tener la aplicación abierta todo el tiempo para que cuente los pasos?",
    answer: "No. La aplicación utiliza el podómetro interno de tu teléfono (Google Fit en Android o la app Salud en iOS). Funciona en segundo plano sin gastar apenas batería. Solo tienes que acordarte de abrirla un momento antes de que acabe el día para convertir tus pasos en Wards."
  },
  {
    question: "¿Qué tiene de divertido? ¿Es solo caminar y ya?",
    answer: "¡Es mucho más! WeWard lo convierte en un juego. Puedes explorar lugares en el mapa para ganar Wards extra, participar en desafíos de pasos (individuales o con la comunidad AlberCamina) y ver cómo subes en el ranking. Esto añade una capa de motivación y diversión a tus paseos."
  },
  {
    question: "Si dono mis Wards, ¿yo no gano nada?",
    answer: "Ganas lo más importante: la satisfacción de ayudar sin que te cueste dinero. Sin embargo, no estás obligado a donarlo todo. Puedes decidir donar una parte y guardar la otra para ti. Los Wards que te quedes los puedes canjear por descuentos, tarjetas regalo o incluso dinero."
  },
  {
    question: "¿Qué es AlberCamina y qué tiene que ver con WeWard?",
    answer: "WeWard es la aplicación que te permite ganar puntos por caminar. AlberCamina es la comunidad que hemos creado dentro de WeWard. Al unirte, tus pasos y donaciones se suman a los de los demás miembros, permitiéndonos alcanzar objetivos más grandes y apoyar causas de forma conjunta. Somos un equipo que camina con un propósito común."
  },
  {
    question: "Mencionáis un 'código de patrocinio', ¿es obligatorio?",
    answer: "No es obligatorio, pero sí muy recomendable. Si al registrarte usas el código 'CreativoCerdo0669', recibes Wards extra de bienvenida para empezar con buen pie. Es un pequeño impulso inicial como agradecimiento por unirte."
  },
  {
    question: "¿Qué pasa si un día se me olvida validar mis pasos?",
    answer: "No te preocupes, ¡nos ha pasado a todos! Los pasos de cada día tienes que validarlos antes de la medianoche. Si se te olvida, lamentablemente esos pasos no se convierten en Wards y se pierden. Un buen truco es ponerte una alarma o recordatorio diario en el móvil para que no se te escape ni uno."
  },
  {
    question: "¿Esta aplicación consume muchos datos o batería?",
    answer: "Está muy bien optimizada para que el impacto sea mínimo. Como usa el sensor de pasos nativo de tu teléfono (Google Fit o Salud de Apple), no necesita usar el GPS constantemente, que es lo que más batería gasta. El consumo de datos también es muy bajo, ya que solo los necesita para sincronizar tus pasos cuando abres la app."
  },
  {
    question: "¿Es seguro? ¿Qué hacen con mis datos de localización?",
    answer: "Sí, es una aplicación segura y cumple con la normativa de protección de datos europea. Tu localización exacta no se comparte. Solo se utiliza de forma anónima para ofrecerte recompensas en lugares asociados (tiendas, museos, etc.) que puedas visitar si quieres. Nunca se rastrea tu ubicación en tiempo real ni se comparten tus datos personales."
  },
  {
    question: "¿Solo se ganan Wards caminando o hay otras formas de acumular más?",
    answer: "Caminar es la forma principal y más divertida, ¡pero no la única! La app tiene una sección de 'Recompensas' o 'Tiendas' donde puedes ganar una gran cantidad de Wards extra haciendo tus compras online de siempre. El proceso es muy simple: entras a esa sección en WeWard, eliges tu tienda favorita como Amazon, Booking, AliExpress, El Corte Inglés, Carrefour, Nike y cientos más, y la app te redirige a su página oficial. Compras como lo harías normalmente y, por haber ido a través de WeWard, recibes un porcentaje de tu compra de vuelta en forma de Wards. Es una manera fantástica de sumar muchos puntos comprando cosas que ya necesitabas, sin ningún coste adicional."
  },
];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50">
      {/* Header/Navigation */}
      <motion.header 
        style={{ 
          opacity: headerOpacity,
          backdropFilter: useTransform(headerBlur, (v) => `blur(${v}px)`)
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-sm"
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <Footprints className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                AlberCamina
              </span>
            </motion.div>

            {/* Desktop Menu */}
<div className="hidden md:flex items-center gap-6">
  <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
    Inicio
  </button>
  <button onClick={() => scrollToSection('que-es')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
    ¿Qué es?
  </button>
  <button onClick={() => scrollToSection('proposito')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
    Propósito
  </button>
  <button onClick={() => scrollToSection('unirse')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
    Únete
  </button>
  <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
    FAQ
  </button>
  <button onClick={() => scrollToSection('beneficios')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
    Beneficios
  </button>
  <button onClick={() => scrollToSection('consulta')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
    Consulta
  </button>
  <Button 
    onClick={() => window.open('https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223', '_blank')}
    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
  >
    Descargar App
  </Button>
</div>


            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t pt-4"
            >
              <div className="flex flex-col gap-3">
                <button onClick={() => scrollToSection('inicio')} className="text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('que-es')} className="text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  ¿Qué es?
                </button>
                <button onClick={() => scrollToSection('proposito')} className="text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  Propósito
                </button>
                <button onClick={() => scrollToSection('unirse')} className="text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  Únete
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  FAQ
                </button>
                <button onClick={() => scrollToSection('beneficios')} className="text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  Beneficios
                </button>
                <Button 
                  onClick={() => window.open('https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223', '_blank')}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 w-full"
                >
                  Descargar App
                </Button>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AlberCamina
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
                Camina Cada Día, Ayuda Cada Día
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
  ¿Sabías que tus pasos pueden convertirse en ayuda real? Con WeWard y AlberCamina, caminar no solo mejora tu salud:  
  también apoya ONGs, impulsa causas solidarias y te recompensa por hacerlo.  
  Únete a AlberCamina y transforma lo cotidiano en impacto. Suma tus pasos. Multiplica el bien.
</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => window.open('https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223', '_blank')}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <Footprints className="w-5 h-5 mr-2" />
                  Únete Ahora
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('que-es')}
                  className="text-lg px-8 py-6 border-2 hover:bg-gray-50"
                >
                  Conoce Más
                  <ChevronDown className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={heroImage} 
                  alt="Personas caminando felices" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-white rounded-full p-6 shadow-xl"
              >
                <Heart className="w-12 h-12 text-red-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ¿Qué es WeWard? Section */}
      <section id="que-es" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ¿Qué es WeWard?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
  WeWard es una aplicación gratuita que te recompensa por caminar. Cada paso que das se convierte en puntos llamados Wards, 
  que puedes usar para conseguir descuentos, regalos o incluso convertir en dinero. Pero lo más importante: puedes donar esos Wards 
  a organizaciones solidarias que realmente lo necesitan. Con AlberCamina, te invitamos a formar parte de una comunidad que transforma 
  el simple acto de andar en una forma de ayudar. No necesitas dinero, ni tiempo extra. Solo caminar, sumar y donar. 
  Tu salud mejora, tu entorno se beneficia, y juntos generamos impacto real.
</p>


          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={phoneImage} 
                  alt="Aplicación móvil WeWard" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: Footprints, title: "Camina y Transforma", desc: "Tus pasos valen. Cada uno suma Wards que pueden cambiar vidas." },
{ icon: Gift, title: "Recompensas con Sentido", desc: "Canjea tus Wards por regalos, descuentos… o conviértelos en impacto real." },
{ icon: Heart, title: "Dona con tus Pasos", desc: "Sin gastar dinero, sin esfuerzo extra. Solo andar y ayudar." },
{ icon: Users, title: "Comunidad AlberCamina", desc: "Únete a quienes caminan por algo más grande. Juntos, hacemos que la ayuda llegue donde más se necesita." }

              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 p-3 rounded-lg">
                    <item.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="mt-12 text-center">
            <Button 
              size="lg"
              onClick={() => window.open('https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223', '_blank')}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              Instalar WeWard y Empezar a Sumar Pasos Solidarios
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Propósito Section */}
      <section id="proposito" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ¿Cuál es el Propósito de AlberCamina?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
  AlberCamina nace con una visión sencilla pero poderosa: transformar cada paso que das en una oportunidad de ayudar.  
  Todos caminamos cada día, sin pensarlo. Pero ¿y si esos pasos pudieran convertirse en apoyo real para quienes más lo necesitan?  
  Con la app WeWard, acumulas puntos simplemente por andar. Y gracias a AlberCamina, puedes donar esos puntos a causas solidarias,  
  sin gastar dinero ni hacer nada extra. Caminar ya es bueno para tu salud. Ahora, también puede ser bueno para el mundo.
</p>

          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div {...fadeInUp}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={solidarityImage} 
                  alt="Manos solidarias ayudando" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
  icon: Target,
  title: "Pasos que Importan",
  desc: "Convierte tus Wards en apoyo concreto: lucha contra el cáncer, infancia vulnerable, causas que necesitan acción, no excusas."
},
{
  icon: Heart,
  title: "Caminar con Empatía",
  desc: "No se trata solo de andar. Se trata de entender, sumar y avanzar juntos hacia un mundo más justo."
},
{
  icon: Trophy,
  title: "Desafíos con Propósito",
  desc: "Participa en retos que premian tu solidaridad. Porque ayudar también puede ser emocionante."
}

              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-lg">
                          <item.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

    {/* Cómo Unirse Section */}
<section id="unirse" className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4">
    <motion.div {...fadeInUp} className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
        ¿Cómo Unirse?
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Unirse es muy sencillo y gratuito. Solo sigue estos pasos:
      </p>
    </motion.div>

    <motion.div 
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-8 mb-12"
    >
      {[
        {
          step: "1",
          title: "Descarga WeWard",
          desc: "Descarga la App.",
          color: "from-green-500 to-emerald-500"
        },
        {
          step: "2",
          title: "Únete a la Comunidad",
          desc: "Accede directamente a AlberCamina con este enlace. ",
          color: "from-blue-500 to-cyan-500"
        },
        {
          step: "3",
          title: "Empieza a Caminar",
          desc: "¡Tus pasos ya cuentan y ayudan a los demás!",
          color: "from-purple-500 to-pink-500"
        }
      ].map((item, index) => (
        <motion.div key={index} variants={fadeInUp}>
          <Card className="text-center h-full hover:shadow-xl transition-all hover:-translate-y-2">
            <CardHeader>
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                {item.step}
              </div>
              <CardTitle className="text-2xl mb-3">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg mb-4">{item.desc}</p>

              {/* Mini pasos SOLO para el paso 1 */}
              {index === 0 && (
                <ul className="text-left text-gray-600 text-sm mb-4 list-disc list-inside">
                  <li>📲 HAZ CLICK EN EL BOTON: Descarga la App</li>
                  <li>⚙️ Sigue con el proceso de instalación</li>
                  <li>🎁 Código de patrocinio para tus primeros 100 Wards: <strong>(tenlo a mano apuntado en un papel)</strong>: <strong>CreativoCerdo0669</strong></li>
                  <li>✅ Termina de configurar la App y vuelve aquí para seguir con el : <strong>Paso 2</strong>, unirse a la comunidad</li>
                </ul>
              )}
              {/* Mini pasos SOLO para el paso 1 */}
              {index === 1 && (
                <ul className="text-left text-gray-600 text-sm mb-4 list-disc list-inside">
                  <li>✅ Una vez que te has unido a la comunidad</li>
                  <li>✅ Selecciona el grupo: Caminantes </li>
                  <li>✅  <strong>Decide el porcentaje de Wards que quieras destinar a la comunidad.</strong></li>
                  <li>✅ Configuración completada </li>
                </ul>
              )}

              {/* Botón debajo del paso 1 */}
              {index === 0 && (
                <Button 
                  size="sm"
                  onClick={() => window.open('https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223', '_blank')}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-sm px-6 py-3 shadow-md hover:shadow-lg transition-all"
                >
                  📲 Descarga la App
                </Button>
              )}

              {/* Enlace debajo del paso 2 */}
              {index === 1 && (
                <a 
                  href="https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  🔗 Ir a la Comunidad AlberCamina
                </a>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>

    {/* Botón final opcional */}
    <motion.div {...fadeInUp} className="text-center">
      <Button 
        size="lg"
        onClick={() => window.open('https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223', '_blank')}
        className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
      >
        <Users className="w-5 h-5 mr-2" />
        Unirme a la Comunidad AlberCamina
      </Button>
    </motion.div>
  </div>
</section>

{/* FAQ Section */}
<section id="faq" className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <motion.div {...fadeInUp} className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
        Preguntas Frecuentes
      </h2>
      <p className="text-lg text-gray-700">
        Resolvemos tus dudas más comunes sobre AlberCamina y WeWard.
      </p>
    </motion.div>

    <div className="space-y-4">
      {faqList.map((item, index) => (
        <motion.div key={index} {...fadeInUp} className="border-b pb-4">
          <button
            onClick={() => setOpenIndex(index === openIndex ? null : index)}
            className="w-full flex justify-between items-center text-left text-green-700 font-semibold text-lg hover:text-green-900 transition-colors"
          >
            <span>{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-green-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-green-600" />
            )}
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{item.answer}</p>
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Beneficios Section */}
      <section id="beneficios" className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ¿Por Qué Deberías Unirte?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
  icon: Heart,
  title: "Ayudar No Cuesta",
  desc: "Camina como siempre… pero ahora tus pasos tienen propósito. Es gratis, fácil y solidario."
},
{
  icon: Gift,
  title: "Impacto Real con Tus Wards",
  desc: "Dona lo que acumules a causas que cambian vidas: infancia, salud, inclusión y más."
},
{
  icon: Trophy,
  title: "Juega, Gana, Ayuda",
  desc: "Participa en retos, sorteos y premios. Porque la solidaridad también puede ser divertida."
},
{
  icon: Users,
  title: "Red Local con Propósito",
  desc: "Conecta con personas que caminan por algo más. Juntos, hacemos que la ayuda llegue."
}

              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <Card className="hover:shadow-lg transition-all hover:border-green-200">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-green-100 to-blue-100 p-3 rounded-lg flex-shrink-0">
                          <item.icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                          <CardDescription className="text-base text-gray-600">{item.desc}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...fadeInUp}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={rewardsImage} 
                  alt="Recompensas y logros" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonios y Comunidad Section */}
<section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4">
    <motion.div {...fadeInUp} className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        La Comunidad AlberCamina
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Miles de personas ya están caminando con propósito y generando un impacto positivo cada día.
      </p>
    </motion.div>

    <motion.div {...fadeInUp}>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
        <img 
          src={communityImage} 
          alt="Comunidad AlberCamina" 
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
          <div className="p-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Juntos Llegamos Más Lejos</h3>
            <p className="text-lg">Cada paso cuenta. Cada persona importa.</p>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Título del balance */}
    <motion.div {...fadeInUp} className="text-center mt-16 mb-6">
      <h3 className="text-2xl font-semibold text-gray-800">Balance Actual de la Comunidad</h3>
    </motion.div>

    <motion.div 
  variants={staggerContainer}
  initial="initial"
  whileInView="whileInView"
  viewport={{ once: true }}
  className="grid md:grid-cols-4 gap-8 mt-4"
>
  {[
    { number: "10,000+", label: "Pasos Solidarios Diarios" },
    { number: "2", label: "Miembros Activos" },
    { number: "0", label: "Causas Apoyadas" },
    { number: "40", label: "Wards Acumulados" } // ← nueva métrica añadida
  ].map((stat, index) => (
    <motion.div
      key={index}
      variants={fadeInUp}
    >
      <Card className="text-center hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {stat.number}
          </CardTitle>
          <CardDescription className="text-lg mt-2">{stat.label}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  ))}
</motion.div>

  </div>
</section>



      {/* CTA Final Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              No Esperes Más
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Únete hoy a AlberCamina. Camina con sentido, suma pasos solidarios y demuestra que juntos 
              podemos cuidar nuestra salud y cambiar vidas, paso a paso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={() => window.open('https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223', '_blank')}
                className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Footprints className="w-5 h-5 mr-2" />
                Únete Ahora Gratis
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => {
                  const text = "¡Únete a AlberCamina! Camina cada día y ayuda a quienes más lo necesitan. https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223"
                  const url = `https://wa.me/?text=${encodeURIComponent(text)}`
                  window.open(url, '_blank')
                }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-6"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Compartir en WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
{/* Formulario de Consulta */}
<section id="consulta" className="py-16 md:py-24 bg-gray-50">
  <div className="container mx-auto px-4 max-w-2xl">
    <motion.div {...fadeInUp} className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
        ¿Tienes dudas o quieres saber más?
      </h2>
      <p className="text-lg text-gray-700">
        Escríbeme y te contestare lo antes posible.
      </p>
    </motion.div>

    <form 
      action="https://formspree.io/f/mzzjjnan" 
      method="POST" 
      className="bg-white shadow-xl rounded-xl p-8 space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
        <input type="text" id="name" name="name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
        <input type="email" id="email" name="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
        <textarea id="message" name="message" rows="4" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
      </div>

      <div className="text-center">
        <button type="submit" className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all">
          📩 Enviar Consulta
        </button>
      </div>
    </form>
  </div>
</section>
<section className="py-12 bg-gradient-to-br from-green-50 to-blue-50 text-center">
  <div className="container mx-auto px-4">
    <motion.div {...fadeInUp}>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-700">
        👣 Eres el visitante número {visitCount ?? '...'}
      </h2>
      <p className="text-base md:text-lg text-gray-700 max-w-md mx-auto">
        Gracias por visitar la comunidad AlberCamina. Únete y juntos podremos ayudar a quienes lo necesitan.
      </p>
      <div className="mt-6">
        <Button
          size="lg"
          onClick={() => window.open('https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223', '_blank')}
          className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-4 rounded-md shadow-md hover:shadow-lg transition-all"
        >
          💚 Unirme a la Comunidad
        </Button>
      </div>
    </motion.div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Footprints className="w-6 h-6 text-green-500" />
                <span className="text-xl font-bold text-white">AlberCamina</span>
              </div>
              <p className="text-gray-400">
                Camina cada día, ayuda cada día. Transformando pasos en solidaridad.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('inicio')} className="hover:text-green-500 transition-colors">Inicio</button></li>
                <li><button onClick={() => scrollToSection('que-es')} className="hover:text-green-500 transition-colors">¿Qué es?</button></li>
                <li><button onClick={() => scrollToSection('proposito')} className="hover:text-green-500 transition-colors">Propósito</button></li>
                <li><button onClick={() => scrollToSection('unirse')} className="hover:text-green-500 transition-colors">Únete</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.wewardapp.com/es" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                    WeWard Oficial
                  </a>
                </li>
                <li>
                  <a href="https://www.wewardapp.com/es/mission" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                    Misión WeWard
                  </a>
                </li>
                <li>
                  <a href="https://www.wewardapp.com/es/communities" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                    Comunidades
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AlberCamina. Todos los derechos reservados. Una iniciativa solidaria para cambiar el mundo paso a paso. Pagina creada y Gestionada por Sorin. Para mas Info usar el formulario de Contacto</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
