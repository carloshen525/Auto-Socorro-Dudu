import React, { useState } from 'react';
import { Clock, Shield } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { regionalCities, highwaysCovered, businessInfo } from '../data/content';

export default function ServiceArea() {
  const [activeCity, setActiveCity] = useState(regionalCities[0]);

  return (
    <section id="atendimento" className="py-20 lg:py-24 bg-[#0a0c10] text-white relative overflow-hidden">
      
      {/* Background Skyline with gradient blend */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="/images/area-atendimento-bg-2x.jpg" 
          alt="Vista panorâmica São Luís à noite" 
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/80 to-[#0a0c10]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E51920]" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#E51920] uppercase font-['Montserrat',sans-serif]">
              ÁREA DE ATENDIMENTO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black font-['Montserrat',sans-serif] tracking-tight text-white uppercase leading-tight">
            São Luís e toda região
          </h2>

          <p className="mt-3 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Chegamos até você com rapidez e segurança, onde quer que esteja. Atendemos todos os bairros de São Luís e as principais cidades da região.
          </p>
        </div>

        {/* City and highway coverage details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Active City Detail Card */}
            <div className="md:col-span-2 bg-[#141822] rounded-2xl p-6 border border-neutral-800 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E51920]">
                  Destino Selecionado
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-green-400 font-semibold bg-green-950/40 px-2.5 py-1 rounded-full border border-green-800/40">
                  <Clock className="w-3.5 h-3.5" />
                  Previsão: {activeCity.time}
                </span>
              </div>

              <h3 className="text-2xl font-black font-['Montserrat',sans-serif] text-white">
                {activeCity.name}
              </h3>
              
              <p className="text-sm text-neutral-300 mt-1 mb-4">
                {activeCity.isHub 
                  ? "Atendemos todos os bairros de São Luís - MA e região metropolitana, incluindo Raposa, São José de Ribamar, Paço do Lumiar e demais localidades próximas."
                  : `Equipe de prontidão com rota direta para socorrer seu veículo em ${activeCity.name} com total segurança.`
                }
              </p>

              {/* Action Button for this location */}
              <a
                href={`https://wa.me/${businessInfo.phoneRaw}?text=${encodeURIComponent(`Olá! Preciso de um guincho urgente em ${activeCity.name}. Qual a previsão e valor?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95 group"
              >
                <WhatsAppIcon className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
                <span>Solicitar Guincho em {activeCity.name} via WhatsApp</span>
              </a>
            </div>

            {/* Quick City Selector Pill List */}
            <div className="bg-[#111319] rounded-2xl p-5 border border-neutral-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Cidades com Socorro Frequente
              </h4>
              <div className="flex flex-wrap gap-2">
                {regionalCities.map((city) => (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => setActiveCity(city)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeCity.name === city.name
                        ? 'bg-[#E51920] text-white shadow-sm'
                        : 'bg-neutral-800/80 text-neutral-300 hover:text-white hover:bg-neutral-700'
                    }`}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Highways List */}
            <div className="bg-[#111319] rounded-2xl p-5 border border-neutral-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#E51920]" />
                Atendimento em Rodovias da Região
              </h4>
              <ul className="space-y-2 text-xs text-neutral-300">
                {highwaysCovered.slice(0, 3).map((hw) => (
                  <li key={hw.name} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E51920]" />
                    <span className="font-semibold text-white">{hw.name}:</span>
                    <span className="text-neutral-400">{hw.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

        </div>

      </div>
    </section>
  );
}

