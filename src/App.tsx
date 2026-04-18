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
              <a href="#contacto" className="text-[14px] font-semibold text-slate-800 hover:text-[#2563eb] transition-colors">Contacto</a>
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
