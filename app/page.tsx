"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Megaphone,
  Target,
  Wifi,
  Bot,
  Calendar,
  MapPin,
  Smartphone,
  Users,
  Heart,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react"

export default function Entera2Landing() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-green-50 to-blue-50">
      {/* Sección 1: Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-green-400/10 to-blue-400/10 animate-pulse"></div>

        <div
          className={`text-center max-w-4xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <Megaphone className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Título Principal */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
            Entera2
          </h1>

          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
            Tu conexión con el futuro empieza aquí 🌍
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            La app que conecta a los territorios olvidados de Colombia con oportunidades educativas, laborales y
            sociales
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Conoce más <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Sección 2: El Problema */}
      <section className="py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              La Realidad de los Territorios Olvidados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una historia que se repite en Buenaventura, Chocó, Amazonas y muchas regiones más...
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-slate-50 border-l-4 border-slate-400 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-slate-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">María, 19 años - Buenaventura</h3>
                    <p className="text-slate-700">
                      "Nunca me enteré de la beca del ICETEX para estudiar enfermería. Se cerró la convocatoria y yo ni
                      sabía que existía."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border-l-4 border-slate-400 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-slate-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Carlos, 22 años - Chocó</h3>
                    <p className="text-slate-700">
                      "Hay un bootcamp de programación gratis, pero no sé cómo inscribirme. La página web no carga bien
                      con mi internet."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border-l-4 border-slate-400 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-slate-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Ana, 25 años - Amazonas</h3>
                    <p className="text-slate-700">
                      "Quiero capacitarme en emprendimiento, pero no sé dónde buscar. Nadie me avisa de estos
                      programas."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Las Barreras Reales:</h3>
              <div className="space-y-4">
                {[
                  "Desconocimiento de cómo buscar información en internet",
                  "Poca difusión de convocatorias locales o nacionales",
                  "Falta de centralización de oportunidades",
                  "Bajo acceso por problemas de conectividad",
                ].map((barrier, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{barrier}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Funcionalidades */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Cómo Entera2 Cambia el Juego</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnología simple pero poderosa para conectar oportunidades con personas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Filtro Inteligente",
                description: "Solo ves oportunidades relevantes para tu edad, ubicación, intereses y nivel educativo",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: Wifi,
                title: "Modo Offline + SMS",
                description: "Funciona sin internet y envía notificaciones importantes por mensaje de texto",
                color: "from-green-400 to-blue-500",
              },
              {
                icon: Bot,
                title: "Asistente Virtual",
                description: "Un chatbot que te explica todo en español coloquial, como un amigo del barrio",
                color: "from-blue-400 to-purple-500",
              },
              {
                icon: Calendar,
                title: "Calendario Comunitario",
                description: "La comunidad comparte eventos locales: charlas, brigadas de salud, cursos",
                color: "from-purple-400 to-pink-500",
              },
              {
                icon: MapPin,
                title: "Mapa de Recursos",
                description: "Encuentra Wi-Fi gratis, bibliotecas, CADEs y centros de formación cercanos",
                color: "from-pink-400 to-red-500",
              },
              {
                icon: Users,
                title: "Red Comunitaria",
                description: "Conecta con otros jóvenes de tu región que buscan las mismas oportunidades",
                color: "from-red-400 to-yellow-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 4: Mockup */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Entera2 en Acción</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interfaz simple y amigable, diseñada para todos los niveles de experiencia digital
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-green-800">Notificación Personalizada</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-600 mb-2">🎯 Para ti, María (19 años, Buenaventura)</p>
                  <p className="font-medium text-gray-800">
                    "¡Ey! Hay una beca nueva del ICETEX para estudiar enfermería. Se cierra en 5 días. ¿Te ayudo a
                    aplicar?"
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Bot className="w-6 h-6 text-blue-500" />
                  <h3 className="font-semibold text-blue-800">Asistente Virtual</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <p className="text-sm text-blue-800">"¿Cómo me inscribo al curso de programación?"</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm text-gray-800">
                      "¡Fácil! Te mando el link directo. Solo necesitas tu cédula y un correo. El curso empieza el lunes
                      y es 100% gratis 😊"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                  <h3 className="font-semibold text-yellow-800">Recursos Cercanos</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-sm text-gray-800">📶 Wi-Fi Gratis - Biblioteca Municipal</span>
                    <Badge variant="secondary">200m</Badge>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-sm text-gray-800">🏢 CADÉ - Centro de Servicios</span>
                    <Badge variant="secondary">500m</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                {/* Mockup interactivo del celular */}
                <div className="w-80 h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Header de la app */}
                    <div className="bg-green-500 px-6 py-4 flex items-center justify-between">
                      <h3 className="text-white font-bold text-lg">Entera2</h3>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Contenido de la app */}
                    <div className="p-4 space-y-4">
                      {/* Saludo personalizado */}
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                        <p className="text-green-800 font-medium">¡Hola María! Hay 3 oportunidades nuevas para ti</p>
                      </div>

                      {/* Lista de oportunidades */}
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-blue-600">🎓</span>
                            <h4 className="font-semibold text-blue-800">Beca ICETEX</h4>
                          </div>
                          <p className="text-sm text-blue-700">Educación Superior - Cierra en 5 días</p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-green-600">💻</span>
                            <h4 className="font-semibold text-green-800">Curso SENA</h4>
                          </div>
                          <p className="text-sm text-green-700">Programación Básica - Inicia lunes</p>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-purple-600">🏥</span>
                            <h4 className="font-semibold text-purple-800">Brigada de Salud</h4>
                          </div>
                          <p className="text-sm text-purple-700">Centro Cultural - Mañana 9am</p>
                        </div>
                      </div>

                      {/* Asistente */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Bot className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-medium text-gray-800">Asistente Entera2</span>
                        </div>
                        <p className="text-sm text-gray-700">
                          ¿Te interesa la beca del ICETEX? Te ayudo a aplicar paso a paso 😊
                        </p>
                      </div>
                    </div>

                    {/* Botón flotante de Wi-Fi */}
                    <div className="absolute bottom-20 right-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <Wifi className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Indicador de notificaciones */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-bounce flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Impacto e Invitación */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-400 via-green-400 to-blue-500">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">El Impacto que Buscamos</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Users,
                  title: "Conectividad Informativa",
                  description: "Miles de jóvenes enterados de oportunidades sin navegar en cientos de sitios web",
                },
                {
                  icon: Smartphone,
                  title: "Inclusión Digital",
                  description: "Acceso a información crucial incluso con baja conectividad a internet",
                },
                {
                  icon: Heart,
                  title: "Empoderamiento Local",
                  description: "Líderes comunitarios amplificando el alcance de sus actividades y programas",
                },
              ].map((impact, index) => (
                <Card key={index} className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
                  <CardContent className="p-8 text-center">
                    <impact.icon className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-4">{impact.title}</h3>
                    <p className="text-white/90">{impact.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-12 mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">"Con Entera2, nadie se queda por fuera"</h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Porque cada joven en Colombia merece conocer y acceder a las oportunidades que pueden cambiar su futuro,
              sin importar dónde haya nacido.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Únete al Movimiento
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg rounded-full transition-all duration-300 bg-transparent"
              >
                Conoce Más
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/80 text-lg">
              🇨🇴 Construyendo puentes digitales para una Colombia más conectada e inclusiva
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
