import { ArrowUpRight, Github, Linkedin, Mail, Menu, Code2, Terminal, Database } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
      
      <nav className="flex justify-between items-center border-2 bg-white p-4 shadow-neo rounded-lg sticky top-4 z-50">
        <div className="font-black text-xl md:text-2xl uppercase tracking-tighter">
          Caliph<span className="text-main">.dev</span>
        </div>
        <div className="hidden md:flex gap-6 font-bold text-sm">
          <a href="#about" className="hover:underline decoration-main decoration-4 underline-offset-4">About</a>
          <a href="#work" className="hover:underline decoration-main decoration-4 underline-offset-4">Work</a>
          <a href="#contact" className="hover:underline decoration-main decoration-4 underline-offset-4">Contact</a>
        </div>
        <button className="bg-main text-white font-bold py-2 px-4 md:px-6 border-2 shadow-neo active:shadow-neo_sm active:translate-x-[2px] active:translate-y-[2px] transition-all rounded-md flex items-center gap-2">
          <span>Menu</span>
          <Menu className="w-4 h-4 md:hidden" />
        </button>
      </nav>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-4 md:mt-8 items-center">
        <div className="md:col-span-7 flex flex-col gap-6 order-2 md:order-1">
          <div className="w-fit bg-accent border-2 px-4 py-2 shadow-neo -rotate-2">
            <p className="font-bold text-sm md:text-base">👋 Backend Developer</p>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight">
            I'M <span className="text-main">CALIPH</span> <br />
            ATIBRATA<span className="text-main">.</span>
          </h1>

          <p className="text-lg md:text-xl font-medium max-w-xl border-l-4 border-main pl-4">
            Siswa SMAN 1 Sragen. Mengubah kopi menjadi kode yang bersih, efisien, dan skalabel. Fokus pada ekosistem JavaScript.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <a href="#projects" className="flex justify-center items-center gap-2 bg-dark text-white font-bold text-lg px-8 py-4 border-2 border-dark shadow-neo hover:bg-gray-800 active:shadow-neo_sm active:translate-x-[2px] active:translate-y-[2px] transition-all rounded-lg">
              Lihat Proyek <ArrowUpRight />
            </a>
            <a href="mailto:email@example.com" className="flex justify-center items-center gap-2 bg-white text-dark font-bold text-lg px-8 py-4 border-2 shadow-neo hover:bg-gray-50 active:shadow-neo_sm active:translate-x-[2px] active:translate-y-[2px] transition-all rounded-lg">
              Kontak Saya
            </a>
          </div>
        </div>

        <div className="md:col-span-5 relative order-1 md:order-2 flex justify-center">
          <div className="absolute top-0 right-0 w-full h-full bg-main border-2 rounded-full translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4"></div>
          <div className="relative w-full aspect-square bg-white border-2 shadow-neo rounded-full overflow-hidden flex items-center justify-center">
             <div className="text-9xl grayscale hover:grayscale-0 transition-all cursor-pointer">
                👨‍💻
             </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y-2 py-4 bg-accent -mx-4 md:-mx-8 rotate-1">
        <div className="flex gap-8 animate-marquee whitespace-nowrap font-black text-2xl uppercase">
          <span>Typescript</span> <span>•</span>
          <span>Node.js</span> <span>•</span>
          <span>Next.js</span> <span>•</span>
          <span>PostgreSQL</span> <span>•</span>
          <span>Docker</span> <span>•</span>
          <span>Typescript</span> <span>•</span>
          <span>Node.js</span> <span>•</span>
          <span>Next.js</span> <span>•</span>
          <span>PostgreSQL</span> <span>•</span>
          <span>Docker</span> <span>•</span>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 border-2 shadow-neo rounded-xl hover:-translate-y-1 transition-transform">
          <div className="w-12 h-12 bg-orange-100 border-2 flex items-center justify-center mb-4 rounded-md">
            <Code2 className="text-main w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black mb-2">Frontend</h3>
          <p className="font-medium">Membangun antarmuka responsif dengan React, Next.js, dan Tailwind CSS.</p>
        </div>
        <div className="bg-main p-6 border-2 shadow-neo rounded-xl hover:-translate-y-1 transition-transform">
          <div className="w-12 h-12 bg-white border-2 flex items-center justify-center mb-4 rounded-md">
            <Terminal className="text-dark w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black mb-2 text-white">Backend</h3>
          <p className="font-medium text-white">Rest API yang cepat dan aman menggunakan Express, NestJS, atau Go.</p>
        </div>
        <div className="bg-white p-6 border-2 shadow-neo rounded-xl hover:-translate-y-1 transition-transform">
          <div className="w-12 h-12 bg-purple-100 border-2 flex items-center justify-center mb-4 rounded-md">
            <Database className="text-accent w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black mb-2">Database</h3>
          <p className="font-medium">Manajemen data terstruktur dengan PostgreSQL, MySQL, dan Prisma ORM.</p>
        </div>
      </section>

      <footer className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 py-8 border-t-2">
        <p className="font-bold">© 2024 Caliph Atibrata.</p>
        <div className="flex gap-4">
            <a href="#" className="p-3 bg-white border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-main hover:text-white transition-colors rounded-md">
                <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-white border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-600 hover:text-white transition-colors rounded-md">
                <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-white border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-red-500 hover:text-white transition-colors rounded-md">
                <Mail className="w-5 h-5" />
            </a>
        </div>
      </footer>
    </main>
  );
}
