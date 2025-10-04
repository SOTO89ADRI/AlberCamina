import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Heart, Users, Gift, Footprints, Target, Trophy, Share2, ChevronDown, Menu, X } from 'lucide-react'
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
                AlbercaCamina
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
              <button onClick={() => scrollToSection('beneficios')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Beneficios
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
                  AlbercaCamina
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
                Camina Cada Día, Ayuda Cada Día
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                ¿Sabías que caminando puedes ayudar a personas que lo necesitan, apoyar ONGs y hasta recibir recompensas? 
                Únete a la comunidad AlbercaCamina: suma tus pasos y multiplica el bien.
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
              WeWard es una aplicación gratuita que recompensa por caminar. Convierte tus pasos diarios en puntos (Wards) 
              que puedes canjear por regalos, descuentos, donaciones a ONGs y, si lo deseas, incluso transferir a dinero real. 
              ¡Solo por andar contribuyes a tu salud y al bienestar de otros!
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
                { icon: Footprints, title: "Camina y Gana", desc: "Cada paso cuenta y se convierte en puntos Wards" },
                { icon: Gift, title: "Canjea Recompensas", desc: "Regalos, descuentos y hasta dinero real" },
                { icon: Heart, title: "Dona a ONGs", desc: "Apoya causas sociales con tus pasos" },
                { icon: Users, title: "Comunidad Activa", desc: "Únete a miles de personas solidarias" }
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
              ¿Cuál es el Propósito de AlbercaCamina?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              AlbercaCamina nace con una visión clara: que cada persona pueda transformar sus pasos diarios 
              en ayuda para quienes más lo necesitan.
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
                  title: "Donar a Causas Importantes",
                  desc: "Suma esfuerzos para donar Wards a ONGs, asociaciones de lucha contra el cáncer, organizaciones de apoyo a la infancia, personas vulnerables y otras causas sociales."
                },
                {
                  icon: Heart,
                  title: "Fomentar la Empatía",
                  desc: "Cada paso cuenta y entre todos llegamos más lejos. La colaboración es la clave para generar un impacto real."
                },
                {
                  icon: Trophy,
                  title: "Retos y Recompensas",
                  desc: "Ofrecer retos, recompensas y sorteos para motivar y premiar la solidaridad diaria de nuestra comunidad."
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
                desc: "Instala la aplicación gratuita desde el enlace seguro",
                color: "from-green-500 to-emerald-500"
              },
              {
                step: "2",
                title: "Únete a la Comunidad",
                desc: "Accede directamente a AlbercaCamina desde la app",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "3",
                title: "Empieza a Caminar",
                desc: "¡Tus pasos ya cuentan y ayudan a los demás!",
                color: "from-purple-500 to-pink-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="text-center h-full hover:shadow-xl transition-all hover:-translate-y-2">
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                      {item.step}
                    </div>
                    <CardTitle className="text-2xl mb-3">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-lg">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="text-center">
            <Button 
              size="lg"
              onClick={() => window.open('https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223', '_blank')}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Users className="w-5 h-5 mr-2" />
              Unirme a la Comunidad AlbercaCamina
            </Button>
          </motion.div>
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
                  title: "No Te Cuesta Nada",
                  desc: "Caminas como siempre… ¡y ahora tus pasos ayudan a los demás! Es completamente gratuito."
                },
                {
                  icon: Gift,
                  title: "Dona a Causas que Importan",
                  desc: "Puedes donar lo que acumules en la app a causas que realmente hacen la diferencia."
                },
                {
                  icon: Trophy,
                  title: "Accede a Juegos y Sorteos",
                  desc: "Por participar y caminar, accedes a juegos, sorteos, descuentos y hasta puedes canjear Wards por dinero real."
                },
                {
                  icon: Users,
                  title: "Forma Parte de una Red Local",
                  desc: "Te sentirás parte de una red local de personas comprometidas, empáticas y generosas."
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
              Nuestra Comunidad
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Miles de personas ya están caminando con propósito y generando un impacto positivo cada día.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <img 
                src={communityImage} 
                alt="Comunidad AlbercaCamina" 
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

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {[
              { number: "10,000+", label: "Pasos Solidarios Diarios" },
              { number: "500+", label: "Miembros Activos" },
              { number: "50+", label: "Causas Apoyadas" }
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
              Únete hoy a AlbercaCamina. Camina con sentido, suma pasos solidarios y demuestra que juntos 
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
                  const text = "¡Únete a AlbercaCamina! Camina cada día y ayuda a quienes más lo necesitan. https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Footprints className="w-6 h-6 text-green-500" />
                <span className="text-xl font-bold text-white">AlbercaCamina</span>
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
            <p>&copy; 2025 AlbercaCamina. Todos los derechos reservados. Una iniciativa solidaria para cambiar el mundo paso a paso.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
