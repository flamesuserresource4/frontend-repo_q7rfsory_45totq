import React, { useState } from 'react';
import { ExternalLink, Mail, Instagram, Linkedin } from 'lucide-react';

const projects = [
  {
    title: '@mudaberkaryaa.id',
    desc:
      'Platform digital untuk menginspirasi anak muda melalui konten, kelas, dan komunitas.',
    link: 'https://instagram.com/mudaberkaryaa.id',
  },
  {
    title: 'Google Student Ambassador Content',
    desc:
      'Konten edukatif seputar teknologi, karier, dan produktivitas untuk generasi muda.',
    link: 'https://google.com',
  },
  {
    title: '“Kata Orang” Storytelling Video',
    desc:
      'Video pendek bertema perjalanan dan refleksi diri melalui sudut pandang naratif.',
    link: '#',
  },
  {
    title: 'Kolaborasi dengan @latheefah.id',
    desc:
      'Kampanye konten bernuansa soft dan minimal untuk audiens perempuan muda.',
    link: 'https://instagram.com/latheefah.id',
  },
];

export default function Projects() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Kolaborasi dengan Alyssya');
    const body = encodeURIComponent(`Halo Alyssya,%0D%0A%0D%0ASaya ${name}. ${message}`);
    window.location.href = `mailto:your@email.here?subject=${subject}&body=${body}`;
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Proyek & Kolaborasi</h2>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#f8fafc] p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-slate-700 leading-relaxed">{p.desc}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-600" />
              </div>
            </a>
          ))}
        </div>

        <div id="contact" className="mt-16 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="rounded-2xl border border-slate-200 bg-[#f9fafb] p-6 md:p-8">
            <h3 className="text-xl font-semibold text-slate-900">Mari Terhubung</h3>
            <p className="mt-2 text-slate-700">Email, DM, atau LinkedIn — pilih yang paling nyaman untuk Anda.</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="mailto:your@email.here"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-slate-800 hover:bg-slate-50"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
              <a
                href="https://instagram.com/mudaberkaryaa.id"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-slate-800 hover:bg-slate-50"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <a
                href="https://linkedin.com/in/alyssyarhamadina"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-slate-800 hover:bg-slate-50"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Kirim Pesan Singkat</h3>
            <p className="mt-2 text-slate-700">Form ini akan membuka email Anda dengan pesan yang sudah terisi.</p>
            <div className="mt-6 grid gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Anda"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#9bb8ff]"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis pesan singkat..."
                rows={4}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#9bb8ff]"
                required
              />
              <button
                type="submit"
                className="inline-flex justify-center rounded-full bg-[#9bb8ff] hover:bg-[#86a6ff] text-slate-900 font-medium px-6 py-3 transition-colors"
              >
                Buka Email
              </button>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Prefer DM? Hubungi melalui Instagram atau LinkedIn di samping.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
