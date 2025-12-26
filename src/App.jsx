import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  Code, 
  MapPin, 
  Briefcase, 
  Mail, 
  ArrowUpRight, 
  Terminal,
  Cpu,
  Send,
  MousePointerClick,
  Zap,
  Wifi,
  Database,
  Bot
} from 'lucide-react';

const NeoButton = ({ children, className = "", onClick, type = "button" }) => (
  <motion.button
    whileHover={{ x: 2, y: 2, boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)" }}
    whileTap={{ x: 4, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
    type={type}
    onClick={onClick}
    className={`
      px-6 py-3 font-bold text-black bg-white border-4 border-black 
      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
      transition-all duration-200 
      uppercase tracking-wider ${className}
    `}
  >
    {children}
  </motion.button>
);

const NeoCard = ({ children, className = "", color = "bg-white" }) => (
  <motion.div 
    whileHover={{ y: -4, boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)" }}
    className={`
      border-4 border-black p-6 ${color}
      shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
      transition-all duration-300
      ${className}
    `}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ title, color = "bg-yellow-400" }) => (
  <div className="flex items-center gap-4 mb-12">
    <div className={`h-8 w-8 border-2 border-black ${color}`}></div>
    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter stroke-black text-black">
      {title}
    </h2>
  </div>
);

const FloatingIcon = ({ icon: Icon, delay, className }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ 
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut"
    }}
    className={`absolute ${className} z-20 bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-none`}
  >
    <Icon size={24} />
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAvatarClick = async () => {
    await controls.start({
      scale: 0.95,
      rotate: 0,
      x: 0,
      y: 0,
      transition: { duration: 0.1 }
    });
    await controls.start({
      scale: 1,
      rotate: 0,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    });
  };

  const projects = [
    {
      title: "IoT Smart Home Dashboard",
      desc: "Kontrol lampu & monitoring suhu real-time menggunakan React & ESP32 via protokol MQTT.",
      tags: ["REACT", "IOT", "MQTT"],
      icon: Wifi,
      bgIcon: "bg-blue-100"
    },
    {
      title: "PID Line Follower Robot",
      desc: "Robot otonom berkecepatan tinggi dengan algoritma PID Control untuk presisi pergerakan maksimal.",
      tags: ["C++", "ARDUINO", "HARDWARE"],
      icon: Bot,
      bgIcon: "bg-red-100"
    },
    {
      title: "Sistem Manajemen Inventaris",
      desc: "Aplikasi web manajemen alat bengkel sekolah dengan tracking peminjaman & QR Code.",
      tags: ["NEXT.JS", "TAILWIND", "SQL"],
      icon: Database,
      bgIcon: "bg-green-100"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f0f0f0] bg-neo-grid text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-4 border-black ${isScrolled ? 'bg-white py-4' : 'bg-[#f4f4f5] py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ rotate: 2, scale: 1.1 }}
            className="text-2xl font-black tracking-tighter bg-black text-white px-2 py-1 transform -rotate-2 cursor-pointer"
          >
            BINTANG.DEV
          </motion.div>
          <div className="hidden md:flex gap-6 font-bold">
            {['Tentang', 'Proyek', 'Kontak'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:underline decoration-4 decoration-pink-500 underline-offset-4"
              >
                {item}
              </button>
            ))}
          </div>
          <a 
            href="#contact"
            className="md:hidden p-2 border-2 border-black bg-yellow-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            <Mail size={20} />
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-20 container mx-auto px-4 min-h-screen flex flex-col justify-center overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block border-2 border-black bg-red-500 px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white"
            >
              BELUM BUKA KOMISI
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
              BINTANG <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500" style={{ WebkitTextStroke: '3px black' }}>
                PUTRA
              </span>
            </h1>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <NeoButton className="bg-pink-400" onClick={() => scrollToSection('proyek')}>
                Lihat Karya
              </NeoButton>
              <NeoButton className="bg-blue-400" onClick={() => scrollToSection('kontak')}>
                Hubungi Saya
              </NeoButton>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center items-center h-[500px]">
            <motion.div 
              className="relative w-full max-w-md aspect-square cursor-pointer"
              onClick={handleAvatarClick}
              whileHover="hover"
              whileTap="tap"
              initial="initial"
            >
              
              <FloatingIcon icon={Terminal} delay={0} className="-top-6 -left-6 bg-cyan-300" />
              <FloatingIcon icon={Code} delay={1} className="top-1/2 -right-8 bg-pink-300" />
              <FloatingIcon icon={Cpu} delay={2} className="-bottom-4 -left-4 bg-yellow-300" />

              <motion.div 
                className="absolute inset-0 bg-[#fbbf24] border-4 border-black z-0"
                variants={{
                  initial: { x: 12, y: 12, rotate: 0 },
                  hover: { x: 20, y: 20, rotate: -2 },
                  tap: { x: 4, y: 4, rotate: 0 } 
                }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              />
              
              <motion.div 
                 className="absolute inset-0 bg-violet-500 border-4 border-black z-0 opacity-0"
                 variants={{
                   initial: { opacity: 0, x: 0, y: 0 },
                   hover: { opacity: 1, x: -10, y: -10, rotate: 2 },
                   tap: { opacity: 0, x: 0, y: 0 }
                 }}
              />

              <motion.div 
                className="relative z-10 w-full h-full border-4 border-black bg-white overflow-hidden"
                animate={controls}
                variants={{
                  hover: { y: -5, x: -5 },
                  tap: { y: 4, x: 4 }
                }}
              >
                <div className="absolute inset-0 bg-violet-500 opacity-20 mix-blend-overlay"></div>
                <img 
                  src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix&clothing=hoodie&accessories=sunglasses"
                  alt="Avatar Bintang" 
                  className="w-full h-full object-cover p-4 pointer-events-none"
                />
                
                <motion.div 
                   className="absolute bottom-4 left-4 bg-white border-2 border-black p-1 px-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2"
                   animate={{ y: [0, -4, 0] }}
                   transition={{ duration: 2, repeat: Infinity }}
                >
                   <MousePointerClick size={16} />
                   <span className="font-bold text-xs">CLICK ME!</span>
                </motion.div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-8 -right-8 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 pointer-events-none"
                variants={{
                  hover: { scale: 1.1, rotate: -5 },
                  tap: { scale: 0.95, rotate: 0 }
                }}
              >
                <div className="flex items-center gap-2 font-bold text-xl">
                  <span className="text-4xl text-pink-500">4+</span>
                  <span className="leading-tight text-xs uppercase">Tahun<br/>Coding</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="bg-black text-white py-4 overflow-hidden border-y-4 border-black rotate-1 scale-105 my-10">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-black text-2xl uppercase">
          {Array(10).fill("Frontend • UI/UX • React • Creative •").map((text, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </div>
      </div>

      <section id="tentang" className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <SectionTitle title="Tentang Saya" color="bg-cyan-400" />
            <NeoCard className="mb-8 relative overflow-hidden" color="bg-white">
               <div className="absolute top-0 right-0 p-2 bg-black text-white font-bold border-l-4 border-b-4 border-black">
                 SMK N 2 BANYUMAS
               </div>
               <div className="mt-8 space-y-4 text-lg font-medium">
                 <p>
                   Halo! Saya adalah seorang pelajar <span className="bg-yellow-300 px-1 border border-black">Jurusan Elektronika</span> di SMK N 2 Banyumas, Jawa Tengah.
                 </p>
                 <p>
                   Dengan pengalaman coding selama 4 tahun, saya fokus pada pengembangan aplikasi web yang modern, responsif, dan fungsional. Saya memiliki ketertarikan mendalam dalam menciptakan solusi digital yang efisien dan inovatif.
                 </p>
               </div>
            </NeoCard>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-pink-400 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center font-bold">
                <MapPin className="mx-auto mb-2 w-8 h-8" />
                Banyumas
              </div>
              <div className="bg-green-400 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center font-bold">
                <Zap className="mx-auto mb-2 w-8 h-8" />
                Elektronika
              </div>
            </div>
          </div>

          <div>
            <div className="flex border-4 border-black bg-white mb-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <button 
                onClick={() => setActiveTab('skills')}
                className={`flex-1 py-3 font-bold border-r-4 border-black transition-colors ${activeTab === 'skills' ? 'bg-yellow-400' : 'hover:bg-gray-100'}`}
              >
                SKILLS
              </button>
              <button 
                onClick={() => setActiveTab('tools')}
                className={`flex-1 py-3 font-bold transition-colors ${activeTab === 'tools' ? 'bg-violet-400 text-white' : 'hover:bg-gray-100'}`}
              >
                TOOLS
              </button>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-h-[300px]">
              {activeTab === 'skills' ? (
                <div className="space-y-4">
                  {[
                    { name: 'Front End Dev', val: '95%', color: 'bg-orange-400' },
                    { name: 'Backend Dev', val: '75%', color: 'bg-yellow-400' },
                    { name: 'UI/UX Design', val: '85%', color: 'bg-cyan-400' },
                    { name: 'Creative Engineering', val: '90%', color: 'bg-pink-400' }
                  ].map((skill) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between font-bold mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.val}</span>
                      </div>
                      <div className="h-4 border-2 border-black bg-gray-200 relative">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.val }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`absolute top-0 left-0 h-full ${skill.color} border-r-2 border-black`} 
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {['VS Code', 'Figma', 'Git/Github', 'Vercel', 'Postman', 'Vite'].map((tool, i) => (
                    <motion.div 
                      key={tool} 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 border-2 border-black p-3 bg-gray-50 hover:bg-violet-200 transition-colors cursor-default font-bold"
                    >
                      <Terminal size={16} />
                      {tool}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="proyek" className="py-20 bg-yellow-400 border-y-4 border-black">
        <div className="container mx-auto px-4">
          <SectionTitle title="Proyek Terpilih" color="bg-white" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item, idx) => (
              <NeoCard key={idx} className="group relative" color="bg-white">
                <div className={`h-48 ${item.bgIcon} border-2 border-black mb-4 overflow-hidden relative`}>
                   <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                   <div className="w-full h-full flex items-center justify-center bg-pattern">
                      <item.icon size={64} className="text-black stroke-[1.5]" />
                   </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={`text-xs font-bold border border-black px-2 py-1 ${tIdx % 2 === 0 ? 'bg-pink-400' : 'bg-cyan-400'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black mb-2 uppercase leading-none">{item.title}</h3>
                <p className="font-medium text-gray-700 mb-6">
                  {item.desc}
                </p>
                <a href="/404" className="inline-flex items-center font-bold hover:underline decoration-4 underline-offset-4 decoration-green-400">
                  Lihat Detail <ArrowUpRight className="ml-1" size={20} />
                </a>
              </NeoCard>
            ))}
          </div>
          
        </div>
      </section>

      <section id="kontak" className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-pink-400 border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-8 uppercase text-white" style={{ WebkitTextStroke: '2px black' }}>
              Mari Bekerja Sama
            </h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-black text-lg">NAMA</label>
                  <input 
                    type="text" 
                    className="w-full p-4 border-4 border-black bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow font-bold"
                    placeholder="Siapa namamu?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-black text-lg">EMAIL</label>
                  <input 
                    type="email" 
                    className="w-full p-4 border-4 border-black bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow font-bold"
                    placeholder="email@kamu.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-black text-lg">PESAN</label>
                <textarea 
                  rows={4}
                  className="w-full p-4 border-4 border-black bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow font-bold resize-none"
                  placeholder="Ceritakan tentang proyekmu..."
                ></textarea>
              </div>

              <div className="flex justify-end">
                <NeoButton type="submit" className="bg-green-400 w-full md:w-auto flex items-center justify-center gap-2">
                  <Send size={20} />
                  Kirim Pesan
                </NeoButton>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white border-t-4 border-black py-12">
        <div className="container mx-auto px-4 flex justify-center text-center">
          <div>
            <h2 className="text-3xl font-black mb-2">BINTANG.DEV</h2>
            <p className="font-medium text-gray-400">© 2025 Bintang Putra Pratama.</p>
          </div>
        </div>
      </footer>

       <style>{`
        .bg-pattern {
          background-image: radial-gradient(circle, #000 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .bg-neo-grid {
          background-image: linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
