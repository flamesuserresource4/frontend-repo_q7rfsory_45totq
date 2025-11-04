import React from 'react';
import { Star } from 'lucide-react';

const experiences = [
  {
    title: 'Google Student Ambassador',
    desc:
      'Mewakili mahasiswa di seluruh Indonesia untuk berbagi pengetahuan digital dan inovasi.',
  },
  {
    title: 'Founder & Strategist, Muda Berkarya',
    desc:
      'Mengelola strategi konten, keterlibatan komunitas, dan storytelling untuk pemberdayaan pemuda.',
  },
  {
    title: 'Public Speaking & MC',
    desc:
      'Aktif di acara kampus dan komunitas seperti Google Talks, FKA Talks UGM, dan Malaka Project.',
  },
  {
    title: 'Educator & Volunteer',
    desc:
      'Mengajar Tahfiz dan Bahasa Arab di Betuah Islamic School serta berkiprah dalam literasi Islam.',
  },
];

const skills = [
  'Social Media & Content Strategy',
  'Storytelling & Copywriting',
  'Public Speaking & Hosting',
  'Visual Design (soft & minimal)',
  'Productivity & Time Management',
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#f9fafb]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Pengalaman</h2>
            <div className="mt-6 space-y-5">
              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 md:p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-full bg-[#e0e7ff] text-[#3b82f6] p-2 mt-1">
                      <Star className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{exp.title}</h3>
                      <p className="mt-1 text-slate-700 leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Keahlian</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-white border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Nilai-Nilai</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">
                Karya yang baik lahir dari niat yang benar, konsistensi, dan empati terhadap audiens. Fokus pada dampak yang dirasakan, bukan sekadar pengakuan yang instan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
