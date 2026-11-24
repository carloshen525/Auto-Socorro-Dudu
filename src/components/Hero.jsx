import React from 'react';
import { Phone, Clock, ShieldCheck, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { businessInfo } from '../data/content';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#07080a]">
      
      {/* =========================================================================
          MOBILE LAYOUT (< lg): Exactly matching mobile reference
          Shows the full truck with the silver Jeep car on top, followed by
          headline, buttons side by side, and badges.
          ========================================================================= */}
      <div className="lg:hidden pt-20 pb-12 flex flex-col">
        
        {/* Mobile Vehicle Image Showcase: Car and Truck 100% visible */}
        <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] bg-[#07080a] overflow-hidden">
          <img
            src="/images/hero-user-provided.jpeg"
            alt="Caminhão de reboque transportando um carro em São Luís"
            className="w-full h-full object-cover object-[52%_center] filter brightness-[0.98]"
            loading="eager"
          />

          {/* Smooth bottom gradient blend into the content area */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07080a] via-[#07080a]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#0b0d11]/80 to-transparent pointer-events-none" />
        </div>

        {/* Mobile Content Area */}
        <div className="px-4 sm:px-6 -mt-3 relative z-10">
          
          {/* Main Headline */}
          <h1 className="text-[26px] sm:text-3xl font-black font-['Montserrat',sans-serif] tracking-tight text-white uppercase leading-[1.12]">
            REBOQUE 24 HORAS EM{' '}
            <span className="text-[#E51920] block relative mt-0.5">
              SÃO LUÍS E REGIÃO
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-2 text-xs sm:text-sm text-neutral-200 font-normal leading-relaxed">
            Precisou de ajuda com seu veículo? A Auto Socorro Dudu oferece atendimento rápido e seguro para remoção e transporte de veículos.
          </p>

          {/* 3 Badges Above Buttons (Mobile) - Matching exact reference */}
          <div className="grid grid-cols-3 gap-2 my-4 pt-1">
            
            {/* Badge 1: 24 horas */}
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-full border-2 border-[#E51920] flex items-center justify-center text-[#E51920] bg-black/40 mb-1.5 shadow-sm">
                <Clock className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-bold text-white leading-tight">
                24 horas
              </span>
            </div>

            {/* Badge 2: Equipe especializada */}
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-full border-2 border-[#E51920] flex items-center justify-center text-[#E51920] bg-black/40 mb-1.5 shadow-sm">
                <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-bold text-white leading-tight">
                Equipe especializada
              </span>
            </div>

            {/* Badge 3: São Luís e região */}
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-full border-2 border-[#E51920] flex items-center justify-center text-[#E51920] bg-black/40 mb-1.5 shadow-sm">
                <MapPin className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-bold text-white leading-tight">
                São Luís e região
              </span>
            </div>

          </div>

          {/* 2 Primary CTA Buttons Side by Side (Mobile) */}
          <div className="grid grid-cols-2 gap-2 mt-2">
            
            {/* Red Button: Call now */}
            <a
              href={businessInfo.phoneCallUrl}
              className="flex items-center justify-center gap-2 px-2.5 py-3 bg-[#E51920] active:bg-[#c91218] text-white rounded-xl shadow-lg shadow-red-950/60 font-bold border border-red-500/40"
              title={`Ligar agora: ${businessInfo.phoneDisplay}`}
            >
              <div className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="text-left leading-tight min-w-0">
                <span className="block text-[10px] font-bold text-red-100 uppercase">
                  Ligar agora
                </span>
                <span className="block text-[11px] font-black font-['Montserrat',sans-serif] tracking-tight truncate">
                  {businessInfo.phoneDisplay}
                </span>
              </div>
            </a>

            {/* Green Button: Contact on WhatsApp */}
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-2.5 py-3 bg-[#22C55E] active:bg-[#16A34A] text-white rounded-xl shadow-lg shadow-emerald-950/60 font-bold border border-emerald-400/40"
              title="Chamar no WhatsApp"
            >
              <div className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center flex-shrink-0">
                <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="text-left leading-tight min-w-0">
                <span className="block text-[10px] font-bold text-emerald-100 uppercase">
                  Chamar no
                </span>
                <span className="block text-xs font-black font-['Montserrat',sans-serif] tracking-tight truncate">
                  WhatsApp
                </span>
              </div>
            </a>

          </div>

        </div>

      </div>

      {/* =========================================================================
          DESKTOP LAYOUT (>= lg): Both the CAR (Jeep) AND TRUCK are 100% visible
          Panoramic composition with truck on right, Jeep in center-right, and text on left.
          ========================================================================= */}
      <div className="hidden lg:flex relative min-h-[580px] xl:min-h-[660px] 2xl:min-h-[720px] items-center pt-28 pb-20">
        
        {/* Full Desktop Panoramic Background with Truck AND Car clearly visible */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero-user-provided.jpeg"
            alt="Caminhão de reboque transportando um carro em São Luís"
            className="w-[110%] max-w-none h-full object-cover object-left filter brightness-[0.98]"
            loading="eager"
          />

          {/* Gentle left feathering to ensure pure black under left text while leaving car visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080a] via-[#07080a]/80 via-30% md:via-36% to-transparent pointer-events-none" />

          {/* Top and Bottom Vignettes */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0b0d11] via-[#0b0d11]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07080a] via-[#07080a]/80 to-transparent pointer-events-none" />

          {/* Ambient red glow behind text */}
          <div className="absolute top-1/3 left-0 w-80 h-80 bg-red-600/15 blur-[130px] pointer-events-none rounded-full" />
        </div>

        {/* Desktop Foreground Content (aligned to the left without covering the car) */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-[480px] xl:max-w-[540px]">

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-[46px] xl:text-[52px] font-black font-['Montserrat',sans-serif] tracking-tight text-white uppercase leading-[1.08] drop-shadow-md">
              REBOQUE 24 HORAS EM{' '}
              <span className="text-[#E51920] block relative mt-1">
                SÃO LUÍS E REGIÃO
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-white font-normal leading-relaxed drop-shadow">
              Precisou de ajuda com seu veículo? A Auto Socorro Dudu oferece atendimento rápido e seguro para remoção e transporte de veículos.
            </p>

            {/* 3 Red Badges in line */}
            <div className="flex items-center gap-4 xl:gap-6 my-6 text-white">
              
              {/* Badge 1 */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-[2.5px] border-[#E51920] flex items-center justify-center flex-shrink-0 text-[#E51920] bg-black/50 shadow-sm">
                  <Clock className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="text-xs font-semibold leading-tight text-neutral-100">
                  <span>Atendimento</span>
                  <span className="block font-bold">24 horas</span>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-[2.5px] border-[#E51920] flex items-center justify-center flex-shrink-0 text-[#E51920] bg-black/50 shadow-sm">
                  <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="text-xs font-semibold leading-tight text-neutral-100">
                  <span>Equipe</span>
                  <span className="block font-bold">especializada</span>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-[2.5px] border-[#E51920] flex items-center justify-center flex-shrink-0 text-[#E51920] bg-black/50 shadow-sm">
                  <MapPin className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="text-xs font-semibold leading-tight text-neutral-100">
                  <span>São Luís</span>
                  <span className="block font-bold">e região</span>
                </div>
              </div>

            </div>

            {/* 2 Primary Action CTA Buttons */}
            <div className="flex items-center gap-3 pt-1">
              
              {/* Red Button: Call now */}
              <a
                href={businessInfo.phoneCallUrl}
                className="flex-1 flex items-center gap-2.5 px-4 py-3 bg-[#E51920] hover:bg-[#c91218] active:scale-[0.98] text-white rounded-xl shadow-xl shadow-red-950/50 hover:shadow-red-600/40 transition-all duration-200 group border border-red-500/30"
                title={`Ligar agora: ${businessInfo.phoneDisplay}`}
              >
                <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white transition-transform group-hover:rotate-12" />
                </div>
                <div className="text-left leading-tight">
                  <span className="block text-[10px] font-bold text-red-100 uppercase">
                    Ligar agora
                  </span>
                  <span className="block text-sm font-black font-['Montserrat',sans-serif] tracking-tight">
                    {businessInfo.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* Green Button: Contact on WhatsApp */}
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-2.5 px-4 py-3 bg-[#22C55E] hover:bg-[#16A34A] active:scale-[0.98] text-white rounded-xl shadow-xl shadow-emerald-950/50 hover:shadow-emerald-600/40 transition-all duration-200 group border border-emerald-400/30"
                title="Chamar no WhatsApp"
              >
                <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
                </div>
                <div className="text-left leading-tight">
                  <span className="block text-[10px] font-bold text-emerald-100 uppercase">
                    Chamar no
                  </span>
                  <span className="block text-sm font-black font-['Montserrat',sans-serif] tracking-tight">
                    WhatsApp
                  </span>
                </div>
              </a>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
