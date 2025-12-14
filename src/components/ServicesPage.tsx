import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <div className="w-full">
        <div className="@container">
          <div 
            className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-8 relative" 
            style={{backgroundImage: 'linear-gradient(rgba(16, 22, 34, 0.7) 0%, rgba(16, 22, 34, 0.85) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAM3cK50iFFwtzzqXn7fA8zRGlWCzx34Z67pKJF-JR6hooupgGrW-cKc0lAiVl3LeWC_3ukCVcmisSEDRP4WaA-mkgGth8zfOt9eLrBLm2Lzlqc5Lh39QSKlU-YSyUIXwr2ZuWmgpDI1z_4fvsVmd9dogIW6nGz7MemTtLkYNYyzno2Xr5MuFqMKKxVMOcq3RuJxUFR9wAXHvudsoGveOEqGIdQMpxAi74lYJb0OdIxZxw1S6xrihIk4yUVTujbAvC7ZTubd4N_pP_M")'}}
          >
            <div className="flex flex-col gap-4 text-center max-w-[800px] z-10">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
                Soluciones Legales Integrales
              </h1>
              <h2 className="text-gray-200 text-base font-normal leading-relaxed md:text-lg max-w-[600px] mx-auto">
                Nuestro equipo de especialistas está preparado para defender sus derechos en cada etapa del proceso legal. Conozca nuestras áreas de práctica.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="px-4 py-12 md:px-10 lg:px-40 flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-[#111318] dark:text-white tracking-tight text-3xl font-bold leading-tight md:text-4xl max-w-[800px]">
              Áreas de Práctica
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed max-w-[720px]">
              Brindamos asesoramiento experto y representación legal estratégica en las principales ramas del derecho. Seleccione un servicio para conocer más.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1: Civil y Comercial */}
            <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
              <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">business_center</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">Civil y Comercial</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Redacción de contratos, reclamos por daños y perjuicios, constitución de sociedades, derecho corporativo y resolución de conflictos comerciales.
                </p>
              </div>
            </div>
            {/* Service Card 2: Derecho de Familia */}
            <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
              <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">family_restroom</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">Derecho de Familia</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Acompañamiento sensible en divorcios, determinación de cuota alimentaria, régimen de comunicación, adopciones y filiaciones.
                </p>
              </div>
            </div>
            {/* Service Card 3: Sucesiones */}
            <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
              <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">history_edu</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">Sucesiones</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Tramitación integral de sucesiones ab-intestato y testamentarias, declaratoria de herederos y partición de bienes.
                </p>
              </div>
            </div>
            {/* Service Card 4: ART y Accidentes */}
            <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
              <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">medical_services</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">ART y Accidentes Laborales</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Reclamos ante aseguradoras (ART) y comisiones médicas por accidentes de trabajo, in itinere y enfermedades profesionales.
                </p>
              </div>
            </div>
            {/* Service Card 5: Derecho Laboral */}
            <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
              <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">work</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">Derecho Laboral</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Asesoramiento en despidos con o sin causa, trabajo no registrado ("en negro"), liquidaciones finales, mobbing y acoso laboral.
                </p>
              </div>
            </div>
            {/* Service Card 6: Derecho Penal */}
            <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
              <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">gavel</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">Derecho Penal</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Defensa técnica y querella en causas penales. Asesoramiento preventivo, excarcelaciones y seguimiento de causas en instrucción.
                </p>
              </div>
            </div>
            {/* Service Card 7: Derecho del Consumidor */}
            <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
              <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">shopping_bag</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">Derecho del Consumidor</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Defensa ante prácticas abusivas de empresas, incumplimiento de garantías, servicios defectuosos y planes de ahorro.
                </p>
              </div>
            </div>
            {/* Service Card 8: Accidentes de Tránsito */}
            <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
              <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">directions_car</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">Accidentes de Tránsito</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Gestión de reclamos ante compañías de seguros por siniestros viales. Indemnizaciones por lesiones y daños materiales.
                </p>
              </div>
            </div>
            {/* Consultations Card */}
            <div className="group flex flex-col gap-4 rounded-xl border border-dashed border-primary/40 bg-blue-50/50 dark:bg-blue-900/10 p-6 items-center justify-center text-center transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20">
              <div className="size-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[30px]">question_mark</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">¿Otra consulta?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Si su caso no encuadra en las categorías anteriores, contáctenos. Analizamos cada situación de manera personalizada.
                </p>
                <button 
                  onClick={() => navigate('/contacto')}
                  className="mt-2 text-primary font-bold hover:underline bg-transparent border-none cursor-pointer"
                >
                  Hable con un abogado →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-background-light dark:bg-background-dark py-12 md:py-20">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="w-full max-w-[960px] rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="flex flex-col justify-end gap-8 px-6 py-12 md:px-16 md:py-16 relative z-10 text-center">
              <div className="flex flex-col gap-3">
                <h2 className="text-[#111318] dark:text-white text-3xl font-black leading-tight tracking-tight md:text-4xl">
                  ¿Listo para resolver su caso?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                  Ofrecemos modalidades de atención flexibles para su comodidad. Reserve su cita virtual desde su hogar o visítenos en nuestras oficinas.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
                <button 
                  onClick={() => navigate('/reservar')}
                  className="w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-[20px]">videocam</span>
                  <span>Agendar Cita Virtual</span>
                </button>
                <button 
                  onClick={() => navigate('/reservar')}
                  className="w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-white dark:bg-gray-700 text-[#111318] dark:text-white border border-gray-200 dark:border-gray-600 text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-gray-600 transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-[20px]">apartment</span>
                  <span>Agendar Cita Presencial</span>
                </button>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                * La primera consulta tiene un valor bonificado en caso de iniciar el trámite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;