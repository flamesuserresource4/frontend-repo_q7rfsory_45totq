import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Tentang Alyssya</h2>
          <p className="mt-6 text-slate-700 leading-relaxed">
            Saya seorang Social Media Strategist, content creator, dan founder dari <span className="font-medium">@mudaberkaryaa.id</span> — platform digital yang menginspirasi anak muda untuk bertumbuh dan berkarya secara bermakna. Saya juga seorang mahasiswa dan <span className="italic">santriwati</span> yang menyeimbangkan belajar, bekerja, dan berkarya dengan tujuan.
          </p>

          <div className="mt-10 rounded-2xl bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] p-6 md:p-8 border border-slate-200">
            <blockquote className="text-lg md:text-xl text-slate-800 font-medium">
              “Berkarya bukan tentang seberapa cepat dikenal, tapi seberapa dalam manfaatnya dirasakan.”
            </blockquote>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Saya percaya setiap anak muda punya potensi untuk memberi dampak melalui karya digital yang bermakna — dari unggahan sederhana hingga program komunitas, semua bernilai bila dilandasi niat baik dan konsistensi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
