import React from 'react';

const ContactPage = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 bg-background-light dark:bg-background-dark min-h-screen">
      {/* Page Heading */}
      <div className="flex flex-col gap-4 mb-10 text-center lg:text-left">
        <h1 className="text-[#111318] dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
          Contacto y Ubicación
        </h1>
        <p className="text-[#616f89] dark:text-gray-400 text-lg font-normal leading-relaxed max-w-2xl lg:mx-0 mx-auto">
          Estamos a su disposición para resolver sus dudas legales. Visítenos en nuestras oficinas, coordine una cita virtual o envíenos un mensaje directo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Contact Info & Map */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Info Card */}
          <div className="bg-white dark:bg-[#1a2332] rounded-xl shadow-sm border border-[#e5e7eb] dark:border-gray-800 p-6">
            <h2 className="text-[#111318] dark:text-white text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">info</span>
              Información de Contacto
            </h2>
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111318] dark:text-white">Nuestra Oficina</p>
                  <p className="text-sm text-[#616f89] dark:text-gray-400 mt-1">Av. Libertador 1234, Piso 5, Oficina B<br/>C1001 Buenos Aires, Argentina</p>
                  <a className="inline-block mt-2 text-primary text-sm font-medium hover:underline cursor-pointer">Ver en Google Maps</a>
                </div>
              </div>
              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111318] dark:text-white">Horarios de Atención</p>
                  <ul className="text-sm text-[#616f89] dark:text-gray-400 mt-1 space-y-1">
                    <li className="flex justify-between w-48"><span>Lunes - Viernes:</span> <span>09:00 - 18:00</span></li>
                    <li className="flex justify-between w-48"><span>Sábados:</span> <span>Con Cita Previa</span></li>
                  </ul>
                </div>
              </div>
              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111318] dark:text-white">Teléfonos</p>
                  <p className="text-sm text-[#616f89] dark:text-gray-400 mt-1">Atención inmediata y urgencias.</p>
                  <div className="flex flex-col gap-2 mt-2">
                    <a className="text-[#111318] dark:text-white font-medium hover:text-primary transition-colors flex items-center gap-2" href="tel:+5491112345678">
                      +54 9 11 1234 5678 (WhatsApp)
                    </a>
                    <a className="text-[#616f89] dark:text-gray-400 text-sm hover:text-primary transition-colors" href="tel:+541143210000">
                      +54 11 4321 0000 (Línea Fija)
                    </a>
                  </div>
                </div>
              </div>
              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111318] dark:text-white">Correo Electrónico</p>
                  <a className="text-sm text-[#616f89] dark:text-gray-400 mt-1 hover:text-primary block break-all" href="mailto:consultas@jrn-abogados.com">consultas@jrn-abogados.com</a>
                </div>
              </div>
            </div>
            {/* Social Media */}
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Síguenos en redes</p>
              <div className="flex gap-4">
                <a className="size-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
                </a>
                <a className="size-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm-2.37 6.938a5.645 5.645 0 117.944 7.944 5.645 5.645 0 01-7.944-7.944zm4.457-3.792a1.472 1.472 0 100 2.944 1.472 1.472 0 000-2.944zM12 8.303a3.697 3.697 0 100 7.394 3.697 3.697 0 000-7.394z" fillRule="evenodd"></path></svg>
                </a>
                <a className="size-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div>
          {/* Map Container */}
          <div className="bg-white dark:bg-[#1a2332] rounded-xl shadow-sm border border-[#e5e7eb] dark:border-gray-800 overflow-hidden relative group h-[300px]">
            <img 
              alt="Mapa de ubicación" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5kMzbja1K845R4Le0TCspZYkBLKNgboz2VsvL4hJoU4JhfteSe9ooRqC2Fi4ZqVv67ixpZKO-OxGS0KtK3jRb7j3V9uFuzgvNanosrx6p-UonI7I8NnRNqzPZdE_TRprNXIb-zxOVOrB94b-1V5JGACUYOlXvRGDSMEzBm27JnWx8KkvxbiGdZQ8pBIo3TMH1gXNhEAnnY8aBKVxVGihsfsIEC2HipExxAE_bpMZlD7bgMkoI-lSZr76taNbXlmoNUDous5J1lGUD"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white dark:bg-[#101622] text-[#111318] dark:text-white px-6 py-3 rounded-full font-bold shadow-lg transform transition-transform group-hover:scale-105 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">map</span>
                Ver Mapa Interactivo
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-[#1a2332] rounded-xl shadow-lg shadow-gray-200/50 dark:shadow-none border border-[#e5e7eb] dark:border-gray-800 p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#111318] dark:text-white mb-2">Envíenos su Consulta</h2>
              <p className="text-[#616f89] dark:text-gray-400">Complete el formulario a continuación y un miembro de nuestro equipo legal se pondrá en contacto con usted dentro de las 24 horas.</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#111318] dark:text-gray-200" htmlFor="name">Nombre Completo</label>
                  <input className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 px-4 py-3 text-[#111318] dark:text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="name" name="name" placeholder="Juan Pérez" type="text"/>
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#111318] dark:text-gray-200" htmlFor="email">Correo Electrónico</label>
                  <input className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 px-4 py-3 text-[#111318] dark:text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="email" name="email" placeholder="juan@ejemplo.com" type="email"/>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#111318] dark:text-gray-200" htmlFor="phone">Teléfono</label>
                  <input className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 px-4 py-3 text-[#111318] dark:text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="phone" name="phone" placeholder="+54 11 ..." type="tel"/>
                </div>
                {/* Legal Area */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#111318] dark:text-gray-200" htmlFor="area">Área de Práctica</label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 px-4 py-3 text-[#111318] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all pr-10" id="area" name="area" defaultValue="">
                      <option disabled value="">Seleccione una opción</option>
                      <option value="civil">Derecho Civil</option>
                      <option value="comercial">Derecho Comercial</option>
                      <option value="familia">Derecho de Familia</option>
                      <option value="laboral">Derecho Laboral</option>
                      <option value="penal">Derecho Penal</option>
                      <option value="otro">Otro Asunto</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <span className="material-symbols-outlined text-xl">expand_more</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#111318] dark:text-gray-200" htmlFor="message">Mensaje</label>
                <textarea className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 px-4 py-3 text-[#111318] dark:text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" id="message" name="message" placeholder="Describa brevemente su situación legal..." rows={5}></textarea>
              </div>
              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <div className="flex items-center h-5">
                  <input className="size-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700" id="consent" name="consent" type="checkbox"/>
                </div>
                <div className="text-sm">
                  <label className="text-[#616f89] dark:text-gray-400" htmlFor="consent">Acepto la <a className="text-primary hover:underline" href="#">Política de Privacidad</a> y consiento el tratamiento de mis datos para ser contactado.</label>
                </div>
              </div>
              {/* Submit Button */}
              <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg shadow-primary/30 transform active:scale-[0.99] transition-all flex items-center justify-center gap-2" type="submit">
                <span className="material-symbols-outlined">send</span>
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;