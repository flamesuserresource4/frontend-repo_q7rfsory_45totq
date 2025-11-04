import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden bg-gradient-to-b from-white via-[#f9fafb] to-[#eef2ff]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-28 flex items-center">
        <div className="max-w-3xl bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Yang Muda yang Berkarya.
          </h1>
          <p className="mt-5 text-slate-700 text-base md:text-lg leading-relaxed">
            Saya Alyssya Rhamadina — Social Media Strategist dan Google Student Ambassador yang percaya bahwa karya kecil pun bisa berdampak besar bila dilakukan dengan niat yang benar.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#9bb8ff] hover:bg-[#86a6ff] text-slate-900 font-medium px-6 py-3 transition-colors shadow-sm"
            >
              Connect with Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium px-6 py-3 transition-colors"
            >
              Lihat Karya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
