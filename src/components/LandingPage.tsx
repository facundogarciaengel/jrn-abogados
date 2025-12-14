import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white dark:bg-background-dark">
      {/* Hero Section */}
      <div className="w-full bg-white dark:bg-background-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-10 lg:py-16">
          <div className="@container">
            <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="flex flex-col gap-6 flex-1 text-left">
                <div className="flex flex-col gap-4">
                  <h1 className="text-[#111318] dark:text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                    Soluciones Legales Expertas para sus Momentos Decisivos
                  </h1>
                  <h2 className="text-[#616f89] dark:text-gray-300 text-lg sm:text-xl font-normal leading-normal">
                    Asesoría integral en derecho civil, penal, laboral y comercial. Protegemos sus intereses con experiencia y compromiso.
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button 
                    onClick={() => navigate('/reservar')}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-primary/30"
                  >
                    <span className="material-symbols-outlined mr-2 text-[20px]">videocam</span>
                    <span className="truncate">Cita Virtual</span>
                  </button>
                  <button 
                    onClick={() => navigate('/reservar')}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#f0f2f4] dark:bg-gray-800 hover:bg-[#e0e2e4] dark:hover:bg-gray-700 text-[#111318] dark:text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors border border-transparent dark:border-gray-700"
                  >
                    <span className="material-symbols-outlined mr-2 text-[20px]">apartment</span>
                    <span className="truncate">Cita Presencial</span>
                  </button>
                </div>
                {/* Trust Badges */}
                <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-600 text-[20px]">check_circle</span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Atención 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-600 text-[20px]">check_circle</span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">+15 Años de experiencia</span>
                  </div>
                </div>
              </div>
              {/* Hero Image */}
              <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-2xl aspect-[4/3] relative group">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <div 
                  className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-700" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_J90thnMuEy7Ff3PMiaGn8tcRIdXB-O785shXZsSTGbtX_tKp--Ko_hO9kfFJMcbGoim9ZHlPtarqDfd2PK9dW3vZS7otivGB-p94Hot7FNwZppW6f-zqcVsbE6T_Tqk5ZkZDJ9jwXSarB-yoI039zZKEAIRphJlHH3fAwgEO9xXiC8KfgLQzkQIunCt62yPERBeM_ZKxeudd3xSNo5WhLN3prEW0BsWOoVf8vF0t3X3sDRqOd0V5ujYrSTfuvOSsNiDUUupxAXvm")'}}
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hook Section / Problem Identification */}
      <div className="w-full bg-background-light dark:bg-background-dark py-16">
        <div className="max-w-[960px] mx-auto px-4 sm:px-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-center items-center">
              <span className="text-primary font-bold tracking-wider text-sm uppercase">¿En qué podemos ayudarle?</span>
              <h2 className="text-[#111318] dark:text-white text-3xl sm:text-4xl font-bold leading-tight max-w-[720px]">
                Identifique su situación legal
              </h2>
              <p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-normal max-w-[600px]">
                Seleccione el área que mejor describe su problema actual para encontrar una solución rápida y efectiva con nuestros especialistas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div onClick={() => navigate('/servicios')} className="flex flex-col gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1A202C] p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[28px]">work_off</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">¿Despido Injustificado?</h3>
                  <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-relaxed">
                    Defendemos sus derechos laborales, calculamos su indemnización y le representamos ante la empresa.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div onClick={() => navigate('/servicios')} className="flex flex-col gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1A202C] p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[28px]">diversity_3</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">¿Problemas Familiares?</h3>
                  <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-relaxed">
                    Divorcios, custodias, pensiones de alimentos y herencias manejados con total discreción y empatía.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div onClick={() => navigate('/servicios')} className="flex flex-col gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1A202C] p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[28px]">gavel</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">¿Problemas Penales?</h3>
                  <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-relaxed">
                    Defensa penal experta y urgente. Estamos disponibles para asistirle en los momentos más críticos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section Preview */}
      <div className="w-full bg-white dark:bg-background-dark py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-gray-100 dark:border-gray-800 pb-4">
              <div className="flex flex-col">
                <h2 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Nuestras Áreas de Práctica</h2>
                <p className="text-[#616f89] dark:text-gray-400 mt-2">Experiencia legal diversificada para cada necesidad</p>
              </div>
              <button onClick={() => navigate('/servicios')} className="text-primary font-medium hover:underline flex items-center gap-1 cursor-pointer">
                Ver todos los servicios 
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Service 1 */}
              <div className="group relative flex flex-col justify-end overflow-hidden rounded-xl h-64 bg-gray-100 dark:bg-gray-800 cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBD0n3gCRd2kRGXhl2b4OfMoySyTO0Us7B2l639CJv8PTJAMhXknWNd-jFYHTcdpRpbQYMKeuGqP_I-yx97eLEJErhpZkjYw1uzH0PRnZ48gBMSUvkJL6AwjM80ykAG7PyTrRgujY7T49uw-dtS0NxDz6HSyyz7MWbHYAAq7e3Fcicsiu5rnCGUtCK-cO_Wdb5ggpj56qYMUkBRSkcX3eRACI7vJ-j2tvg-kiQzanrG3S-dW7V53itwkwQPx97V0MUO2kdXZeHpMCPe")'}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative p-5 text-white">
                  <span className="material-symbols-outlined mb-2 text-3xl">policy</span>
                  <h3 className="text-xl font-bold">Derecho Civil</h3>
                  <p className="text-sm text-gray-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-hidden">Contratos, propiedad y responsabilidad civil.</p>
                </div>
              </div>
              {/* Service 2 */}
              <div className="group relative flex flex-col justify-end overflow-hidden rounded-xl h-64 bg-gray-100 dark:bg-gray-800 cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZwYVSLY2JZv9qO3mt04j1D3LErbNLrKUTHAGEw_T5tn6bRzFYJAwzNiTqYa0rlEmsag7JxDguomAyCS6aAupKhrPLMWe2PaqdUnWkwqZz98rbZAF7EAaS1uR6HVgsKCyJXflaD5m4TV9DRN2UGtsJsxXsbIurKk9NPHtn9ABRz73CIfNhre17pNAHMR8G-JZrTUI23rog6DjkgEZANR-H_wpjoph4Vv3pHTnoYOXXin7_kd3wW_DPN2k_rORi8_rqfWmE8EF932Bu")'}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative p-5 text-white">
                  <span className="material-symbols-outlined mb-2 text-3xl">store</span>
                  <h3 className="text-xl font-bold">Comercial</h3>
                  <p className="text-sm text-gray-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-hidden">Constitución de empresas y asesoría corporativa.</p>
                </div>
              </div>
              {/* Service 3 */}
              <div className="group relative flex flex-col justify-end overflow-hidden rounded-xl h-64 bg-gray-100 dark:bg-gray-800 cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjhnU5ojE_HmYOEbN96AksIV8J69RZcU7s4gaWsoNZQCR3MuJ693XunGgbq25fHR_b-FJG2j-Pkd4bEP9drqxfOVZNJydAetJQAcin_-HFVsJCBZezT7YwCWdrfy91Y5QDAI1kMSx6bk6h6QwENJv7TkCFZBeSAJ1y0GCREeRDj0z_KkvKYY4zwInn0AE_RKRoBffHTJ5F4T3GWLn2u94ShyaQt2jchbJGy12yexRhXXeuabka1x88ymgJJiQ_Yo_vQE1u8Md_UGvT")'}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative p-5 text-white">
                  <span className="material-symbols-outlined mb-2 text-3xl">shield</span>
                  <h3 className="text-xl font-bold">Derecho Penal</h3>
                  <p className="text-sm text-gray-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-hidden">Defensa estratégica y litigios.</p>
                </div>
              </div>
              {/* Service 4 */}
              <div className="group relative flex flex-col justify-end overflow-hidden rounded-xl h-64 bg-gray-100 dark:bg-gray-800 cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAywgWeWyNle2u20zF1zKDsJMO_2usZX0XCibBkb4XMjOAImg8rUIim52dJvXNP_Q61pvJN-ji7cC2RtXvxeCKStVNvxjZ1mD34Rw0nFcR04s-sONegDgLYm-LOXTeSqCEl2H0AvVKFBTcCtHj94J9lBv4Sq_5ItFG8nPuaGXLrth5URDJdnzPpHrqZMt7rO2F-90bxBW5D2pnKtwgFutW657LC_JeILE3qoxjuej6Qm5mj37egcvBQ_Funi4Ia3BQKNaHc4xRfJYQ5")'}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative p-5 text-white">
                  <span className="material-symbols-outlined mb-2 text-3xl">badge</span>
                  <h3 className="text-xl font-bold">Laboral</h3>
                  <p className="text-sm text-gray-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-hidden">Negociaciones, despidos y contratos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="w-full bg-[#f8f9fa] dark:bg-[#151b26] py-20 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#111318] dark:text-white">Por qué elegir Estudio JRN</h2>
            <p className="text-[#616f89] dark:text-gray-400 mt-2">Compromiso, ética y resultados comprobados.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="size-16 rounded-full bg-white dark:bg-[#1A202C] shadow-md flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-4xl">verified</span>
              </div>
              <h3 className="text-xl font-bold text-[#111318] dark:text-white">Resultados Comprobados</h3>
              <p className="text-[#616f89] dark:text-gray-400">Historial exitoso en resoluciones de casos complejos con un alto índice de satisfacción de clientes.</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="size-16 rounded-full bg-white dark:bg-[#1A202C] shadow-md flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-4xl">visibility</span>
              </div>
              <h3 className="text-xl font-bold text-[#111318] dark:text-white">Transparencia Total</h3>
              <p className="text-[#616f89] dark:text-gray-400">Sin letras chicas. Mantenemos una comunicación clara y constante sobre el estado de su proceso.</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="size-16 rounded-full bg-white dark:bg-[#1A202C] shadow-md flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-4xl">devices</span>
              </div>
              <h3 className="text-xl font-bold text-[#111318] dark:text-white">Tecnología y Modernidad</h3>
              <p className="text-[#616f89] dark:text-gray-400">Gestión de casos digitalizada y facilidades para reuniones virtuales adaptadas a su tiempo.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-primary relative overflow-hidden">
        {/* Abstract Decoration Background */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtMv-hGfU8J_M-tH4H-rUUgLrKcrHWKKV0gqdwwYFKGqpUgx_KG81RCWmdpEWAYBemEuCMaZXkPz06jPtIp3SM__gBJEb3q9B2M8jEkrsESp3jGrR2_nRijcZ52U2dABd090EpGobt4iqtgvnesh1J6Tj4Ghw2cT0u1R2W8vFiFpBZEss2KzsJ49LpMy3NM64nBGbcEL1e0PQL6McBPwJ-7tTAFdk6_EEtPTzNaItHXWcHZum5-wkw6XFzHgjmvCEJD6g5UNLpYPmv")'}}
        ></div>
        <div className="max-w-[960px] mx-auto px-4 sm:px-10 py-16 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">¿Listo para resolver su caso?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">La primera consulta es fundamental para trazar el camino hacia la solución. Reserve su espacio con nuestros especialistas hoy mismo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/reservar')}
              className="flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-xl"
            >
              <span className="material-symbols-outlined">calendar_month</span>
              Agendar Cita Ahora
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              <span className="material-symbols-outlined">call</span>
              Llamar al (555) 123-4567
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;