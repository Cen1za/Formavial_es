import {
  Menu,
  ShoppingCart,
  User,
  LogOut,
  Package,
  CarFront,
  CheckCircle2,
  Smartphone,
  ChevronDown,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-[1024px] mx-auto px-4 md:px-10">
          <div className="flex justify-between items-center h-[70px]">
            <div className="flex items-center gap-2">
              <span className="font-[800] text-[24px] text-[#1e3a8a] tracking-[-0.5px]">FORMAVIAL</span>
            </div>
            
            <div className="hidden md:flex items-center gap-[30px]">
              <a href="#" className="text-[14px] font-semibold text-slate-800 hover:text-[#2563eb] transition-colors">Inicio</a>
                            <a 
                href="https://wa.me/34639262075" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[14px] font-semibold text-slate-800 hover:text-[#2563eb] transition-colors"
              >
                Contacto
              </a>
            </div>
              
            <div className="flex items-center gap-5">
              <div className="relative">
                <button 
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                  className="flex items-center gap-1 text-[14px] font-semibold text-slate-800 hover:text-[#2563eb] transition-colors"
                  style={{textDecoration:'none', color:'var(--text-dark)'}}
                >
                  Mi Cuenta
                  <ChevronDown className={`w-3 h-3 transition-transform ${isAccountOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAccountOpen && (
                  <div className="absolute right-0 top-full mt-3 w-48 bg-white rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-slate-100 py-2 z-50">
                    <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                      <User className="w-4 h-4 text-slate-400" /> Iniciar sesión
                    </a>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                      <Package className="w-4 h-4 text-slate-400" /> Pedidos
                    </a>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                      <LogOut className="w-4 h-4 text-slate-400" /> Perfil
                    </a>
                  </div>
                )}
              </div>
              
              <button className="relative w-[32px] h-[32px] bg-[#f1f5f9] rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-200 transition-colors">
                <ShoppingCart className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#2563eb] text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  0
                </span>
              </button>

              <button className="md:hidden text-slate-600 hover:text-slate-900 ml-2">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#1e3a8a] md:h-[200px] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,58,138,0.8)] to-[rgba(30,58,138,0.8)]"></div>
          
          <div className="max-w-[1024px] mx-auto px-4 md:px-10 relative flex flex-col md:flex-row items-center justify-between w-full py-10 md:py-0">
            <div className="max-w-[500px] z-10 text-white w-full">
              <h1 className="text-[32px] md:text-[42px] font-bold leading-none mb-[10px]">
                Conduce tu futuro
              </h1>
              <p className="text-[16px] text-white/90 leading-snug">
                Formación especializada para los profesionales de la seguridad vial de mañana.
              </p>
            </div>
            
            {/* Hero Image */}
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80" 
              alt="Prácticas de autoescuela" 
              className="relative md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2 w-full md:w-[400px] h-[140px] object-cover rounded-[8px] mt-6 md:mt-0 z-10 shadow-xl border-[4px] border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Courses Section */}
        <section id="cursos" className="flex-1 px-4 py-8 md:px-10 md:py-[30px] max-w-[1024px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-[30px]">
            {/* Course 1 */}
            <div className="bg-white border border-slate-200 rounded-[12px] p-[24px] flex flex-col relative w-full">
              <span className="text-[11px] font-semibold uppercase text-slate-500 mb-2 block">
                Aula de formación
              </span>
              <div className="w-full h-[140px] rounded-[6px] overflow-hidden mb-[16px] shadow-sm">
                <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80" alt="Aula de formación vial" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h2 className="text-[18px] font-bold text-[#1e3a8a] mb-[8px]">
                Curso 1ª Evaluación o 2ª Evaluación PFV
              </h2>
              <div className="text-[28px] font-[800] mb-[12px] text-slate-800">
                180€
              </div>
              <p className="text-[13px] text-slate-500 leading-[1.5] mb-[12px]">
                Orientado a docentes que se preparan para afrontar la evaluación del curso académico. Revisamos y reforzamos contenidos teóricos y prácticos.
              </p>
              
              <div className="text-[12px] mb-[16px] pl-[18px] text-slate-800">
                • Actualización normativa y pedagógica.<br/>
                • Herramientas de evaluación y repaso.<br/>
                • Técnicas para enseñanza práctica.
              </div>

              <a href="#" className="mt-auto p-[12px] rounded-[6px] text-center font-[700] bg-[#1e3a8a] text-white no-underline">
                ¡Inscríbete ya!
              </a>
            </div>

            {/* Course 2 */}
            <div className="bg-white border-2 border-[#2563eb] rounded-[12px] p-[24px] flex flex-col relative shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] w-full">
              <div className="absolute top-[-12px] right-[24px] bg-[#059669] text-white px-[12px] py-[4px] rounded-[20px] text-[11px] font-[700] uppercase">
                Oferta Destacada
              </div>
              
              <span className="text-[11px] font-semibold uppercase text-[#2563eb] mb-2 block">
                Formación Híbrida Inteligente
              </span>
              <div className="w-full h-[140px] rounded-[6px] overflow-hidden mb-[16px] shadow-sm border border-slate-100">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="App móvil Tutor Vial" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <h2 className="text-[18px] font-bold text-[#1e3a8a] mb-[8px]">
                Curso 1ª y 2ª Evaluación Fase XXIX + Pack de Clases Online
              </h2>
              <div className="text-[28px] font-[800] mb-[12px] text-slate-800">
                300€
              </div>
              
              <p className="text-[13px] text-slate-500 leading-[1.5] mb-[12px]">
                <strong className="text-slate-800">Bono Especial:</strong> Incluye la aplicación <strong className="text-slate-800">Tutor Vial</strong> de test y mucho más GRATUITAMENTE.
                <br /><br />
                Curso integral con metodologías didácticas actualizadas y criterios de evaluación específicos.
              </p>
              
              <div className="text-[12px] mb-[16px] pl-[18px] text-slate-800">
                • Acceso completo a contenidos clave.<br/>
                • Pack de clases online en directo y diferido.<br/>
                • Metodologías didácticas avanzadas.
              </div>

              <a href="#" className="mt-auto p-[12px] rounded-[6px] text-center font-[700] bg-[#2563eb] text-white no-underline">
                ¡No esperes más y empieza hoy!
              </a>
            </div>
          </div>
        </section>

        {/* App Promo Section */}
        <section className="bg-white mx-4 md:auto max-w-[944px] md:mx-auto md:w-[calc(100%-80px)] mb-[30px] rounded-[12px] border border-slate-200 px-[30px] py-6 md:h-[100px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-[18px] mb-[4px] font-bold text-slate-800">
              Prepárate en cualquier lugar con nuestra App Oficial
            </h3>
            <p className="text-[13px] text-slate-500">
              Optimiza tu estudio con test actualizados y seguimiento de progreso en tiempo real.
            </p>
          </div>
          <div>
            <a 
              href="https://tutor-vial-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-[24px] py-[12px] rounded-[8px] text-[14px] font-[600] whitespace-nowrap no-underline"
            >
              Descargar Tutor Vial App
            </a>
          </div>
        </section>
        
        {/* Contact Selection */}
        <section id="contacto" className="bg-slate-900 text-white py-16">
          <div className="max-w-[1024px] mx-auto px-4 md:px-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-[500px]">
                <h2 className="text-[32px] font-bold mb-4">¿Hablamos?</h2>
                <p className="text-slate-400 text-[16px] leading-relaxed mb-8">
                  Estamos aquí para resolver todas tus dudas sobre nuestra formación y ayudarte a dar el siguiente paso en tu carrera profesional.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center border border-blue-500/20">
                      <User className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[14px] text-slate-400 uppercase font-bold tracking-wider">Atención Directa</p>
                      <p className="text-[18px] font-semibold">Ángel</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center border border-blue-500/20">
                      <Smartphone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[14px] text-slate-400 uppercase font-bold tracking-wider">Teléfono de contacto</p>
                      <p className="text-[20px] font-bold text-white tracking-wide">639 262 075</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-[16px] w-full md:w-[380px] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-8 h-8 fill-[#25D366]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="text-[18px] font-bold text-white">¡Aceptamos WhatsApp!</span>
                </div>
                <p className="text-slate-300 text-sm mb-6">
                  Si lo prefieres, mándanos un mensaje y te responderemos lo antes posible.
                </p>
                <a 
                  href="https://wa.me/34639262075" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-[12px] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#25D366]/20"
                >
                  Enviar mensaje por WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer minimalista preserving component logic */}
      <footer className="bg-white border-t border-slate-200 py-6 text-slate-500 mt-auto">
        <div className="max-w-[1024px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[16px] text-[#1e3a8a]">FORMAVIAL</span>
          </div>
          <div className="flex gap-4 md:gap-6 text-[12px] font-medium">
            <a href="#" className="hover:text-slate-800 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Términos y Condiciones</a>
          </div>
          <div className="text-[12px]">
            &copy; {new Date().getFullYear()} Formavial. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
