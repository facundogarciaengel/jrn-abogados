import React, { useState } from 'react';

const BookingPage = () => {
  const [selectedService, setSelectedService] = useState('');
  const [modality, setModality] = useState('virtual');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col max-w-[1200px] flex-1 gap-8">
            {/* Page Heading */}
            <div className="flex flex-col gap-3 pb-6 border-b border-gray-200 dark:border-gray-800">
              <h1 className="text-[#111318] dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">Agende su Consulta Legal</h1>
              <p className="text-[#616f89] dark:text-gray-400 text-base sm:text-lg font-normal leading-normal max-w-2xl">
                Seleccione el tipo de servicio y el horario que mejor se adapte a usted. Sus datos están protegidos por secreto profesional y la más estricta confidencialidad.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Form Wizard */}
              <div className="lg:col-span-8 flex flex-col gap-10">
                
                {/* Step 1: Service & Modality */}
                <section className="flex flex-col gap-6 bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1A202C]">
                  <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-700 pb-4">
                    <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
                    <h2 className="text-[#111318] dark:text-white text-xl font-bold">Tipo de Servicio y Modalidad</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Service Select */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[#111318] dark:text-gray-300 text-sm font-semibold">Área Legal</label>
                      <div className="relative">
                        <select 
                          className="w-full appearance-none rounded-lg border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-surface-dark text-[#111318] dark:text-white p-3 pr-10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                        >
                          <option disabled value="">Seleccione un área...</option>
                          <option value="civil">Derecho Civil</option>
                          <option value="penal">Derecho Penal</option>
                          <option value="familia">Derecho de Familia</option>
                          <option value="laboral">Derecho Laboral</option>
                          <option value="comercial">Derecho Comercial</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                          <span className="material-symbols-outlined">expand_more</span>
                        </div>
                      </div>
                    </div>
                    {/* Modality Selection */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[#111318] dark:text-gray-300 text-sm font-semibold">Modalidad</label>
                      <div className="grid grid-cols-2 gap-3">
                        {/* Virtual Option */}
                        <label className="cursor-pointer group">
                          <input 
                            type="radio" 
                            name="modality" 
                            value="virtual" 
                            className="peer sr-only"
                            checked={modality === 'virtual'}
                            onChange={() => setModality('virtual')}
                          />
                          <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-[#dbdfe6] dark:border-gray-700 p-3 text-center transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary hover:bg-gray-50 dark:hover:bg-gray-800">
                            <span className="material-symbols-outlined">videocam</span>
                            <span className="text-sm font-medium">Virtual</span>
                          </div>
                        </label>
                        {/* In-Person Option */}
                        <label className="cursor-pointer group">
                          <input 
                            type="radio" 
                            name="modality" 
                            value="presencial" 
                            className="peer sr-only"
                            checked={modality === 'presencial'}
                            onChange={() => setModality('presencial')}
                          />
                          <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-[#dbdfe6] dark:border-gray-700 p-3 text-center transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary hover:bg-gray-50 dark:hover:bg-gray-800">
                            <span className="material-symbols-outlined">apartment</span>
                            <span className="text-sm font-medium">En Oficina</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Step 2: Date & Time */}
                <section className="flex flex-col gap-6 bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1A202C]">
                  <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-700 pb-4">
                    <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
                    <h2 className="text-[#111318] dark:text-white text-xl font-bold">Fecha y Hora</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Calendar (Static/Mock) */}
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-lg dark:text-white">Octubre 2023</span>
                        <div className="flex gap-2">
                          <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                            <span className="material-symbols-outlined text-sm">chevron_left</span>
                          </button>
                          <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                          </button>
                        </div>
                      </div>
                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-1 text-center text-sm">
                        {['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'].map(day => (
                          <div key={day} className="text-gray-400 text-xs font-medium py-2">{day}</div>
                        ))}
                        {/* Empty slots */}
                        <div className="py-2"></div><div className="py-2"></div>
                        {/* Days Mock */}
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map(day => (
                          <button 
                            key={day}
                            className={`py-2 rounded-full text-sm ${
                              day === 24 
                              ? 'bg-primary text-white shadow-md shadow-primary/30' 
                              : [1,2,5,6].includes(day) 
                                ? 'text-gray-400 line-through cursor-not-allowed' 
                                : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white'
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>
                    {/* Time Slots */}
                    <div className="flex flex-col gap-4">
                      <span className="font-semibold text-sm text-gray-500 dark:text-gray-400">Horarios disponibles para el 24 de Oct</span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {['09:00 AM', '09:30 AM', '10:00 AM', '11:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '04:00 PM', '05:00 PM'].map(time => (
                          <button 
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            disabled={time === '11:30 AM'}
                            className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                              selectedTime === time
                                ? 'bg-primary text-white shadow-md shadow-primary/20 border-primary'
                                : time === '11:30 AM'
                                  ? 'border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-600 bg-gray-50 dark:bg-gray-800 cursor-not-allowed line-through'
                                  : 'border-gray-200 dark:border-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Step 3: Contact Info */}
                <section className="flex flex-col gap-6 bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1A202C]">
                  <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-700 pb-4">
                    <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
                    <h2 className="text-[#111318] dark:text-white text-xl font-bold">Sus Datos de Contacto</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col flex-1">
                      <p className="text-[#111318] dark:text-gray-300 text-sm font-medium leading-normal pb-2">Nombre Completo</p>
                      <input className="w-full rounded-lg border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-surface-dark p-3 text-base text-[#111318] dark:text-white placeholder:text-[#616f89] focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Ej: Juan Pérez" type="text"/>
                    </label>
                    <label className="flex flex-col flex-1">
                      <p className="text-[#111318] dark:text-gray-300 text-sm font-medium leading-normal pb-2">Correo Electrónico</p>
                      <input className="w-full rounded-lg border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-surface-dark p-3 text-base text-[#111318] dark:text-white placeholder:text-[#616f89] focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="nombre@correo.com" type="email"/>
                    </label>
                    <label className="flex flex-col flex-1">
                      <p className="text-[#111318] dark:text-gray-300 text-sm font-medium leading-normal pb-2">Teléfono</p>
                      <input className="w-full rounded-lg border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-surface-dark p-3 text-base text-[#111318] dark:text-white placeholder:text-[#616f89] focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="+54 9 11 ..." type="tel"/>
                    </label>
                    <label className="flex flex-col flex-1 md:col-span-2">
                      <p className="text-[#111318] dark:text-gray-300 text-sm font-medium leading-normal pb-2">Breve descripción del caso (Opcional)</p>
                      <textarea className="w-full rounded-lg border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-surface-dark p-3 text-base text-[#111318] dark:text-white placeholder:text-[#616f89] focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" placeholder="Describa brevemente su consulta..." rows={3}></textarea>
                    </label>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <span className="material-symbols-outlined text-primary mt-0.5">lock</span>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Sus datos son confidenciales y están protegidos por secreto profesional bajo la normativa legal vigente.
                    </p>
                  </div>
                </section>
              </div>

              {/* Right Column: Summary Sticky */}
              <div className="lg:col-span-4 relative">
                <div className="sticky top-28 flex flex-col gap-6">
                  <div className="bg-surface-light dark:bg-surface-dark bg-white dark:bg-[#1A202C] rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <div className="bg-primary p-4">
                      <h3 className="text-white font-bold text-lg">Resumen de la Cita</h3>
                    </div>
                    <div className="p-6 flex flex-col gap-6">
                      {/* Service */}
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary">
                          <span className="material-symbols-outlined">gavel</span>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Servicio</p>
                          <p className="text-[#111318] dark:text-white font-semibold">
                            {selectedService ? selectedService.charAt(0).toUpperCase() + selectedService.slice(1) : 'No seleccionado'}
                          </p>
                        </div>
                      </div>
                      {/* Modality */}
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary">
                          <span className="material-symbols-outlined">videocam</span>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Modalidad</p>
                          <p className="text-[#111318] dark:text-white font-semibold">
                            {modality === 'virtual' ? 'Videoconferencia' : 'Presencial en Oficina'}
                          </p>
                        </div>
                      </div>
                      {/* Date */}
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary">
                          <span className="material-symbols-outlined">event</span>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Fecha y Hora</p>
                          <p className="text-[#111318] dark:text-white font-semibold">24 Octubre, 2023</p>
                          <p className="text-[#111318] dark:text-white font-bold text-lg">{selectedTime}</p>
                        </div>
                      </div>
                      <hr className="border-gray-100 dark:border-gray-700"/>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400 font-medium">Honorarios (Reserva)</span>
                        <span className="text-[#111318] dark:text-white font-bold text-xl">$50.00</span>
                      </div>
                      <button className="w-full py-4 rounded-xl bg-primary hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 group">
                        Confirmar Reserva
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </button>
                      <p className="text-xs text-center text-gray-400 leading-relaxed">
                        Al confirmar, usted acepta nuestros términos de servicio y política de privacidad.
                      </p>
                    </div>
                  </div>
                  {/* Help Card */}
                  <div className="bg-white dark:bg-[#1A202C] rounded-xl p-4 border border-gray-100 dark:border-gray-800 flex items-center gap-3 shadow-sm">
                    <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">chat</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#111318] dark:text-white">¿Necesita ayuda urgente?</p>
                      <a className="text-xs text-primary hover:underline cursor-pointer">Chat directo con secretaria</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;