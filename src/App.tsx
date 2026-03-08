import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Mail, Instagram, Linkedin, Youtube, MessageSquare, X, Send, Music, Briefcase } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// Initialize Gemini AI
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `You are an AI assistant for Hoven, a music producer and composer. 
Use the following knowledge base to answer visitor questions:
"Hi, I’m Hoven, a music producer and composer obsessed with cinematic storytelling. For 5 years, I’ve been crafting music that blends orchestral emotion, modern textures, and raw energy, all while dreaming of scoring films, games, and visual projects."
Recent releases include: "Days Gone (Cinematic Album)", "Mission Impossible Fight scene", "No tomorrow (electronic track)", "Spirted Away", "Journey", and "Chernobyl (album)".
Keep answers concise, professional, and in the tone of a helpful representative of Hoven. If asked something outside this scope, politely explain that you can only answer questions about Hoven's career and music.`;

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] to-[#0f0f0f] -z-10"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center px-6"
      >
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
          HOVEN
        </h1>
        <p className="text-gold tracking-[0.3em] uppercase text-sm md:text-base font-medium">
          Cinematic Storytelling Through Music
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent"></div>
      </motion.div>
    </section>
  );
}

function Bio() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-3xl md:text-4xl mb-10 text-gold italic">The Story</h2>
        <p className="text-lg md:text-2xl leading-relaxed text-gray-300 font-light">
          Hi, I’m <strong className="text-white font-medium">Hoven</strong>, a music producer and composer obsessed with cinematic storytelling. 
          For 5 years, I’ve been crafting music that blends orchestral emotion, modern textures, and raw energy, 
          all while dreaming of scoring films, games, and visual projects.
        </p>
      </motion.div>
    </section>
  );
}

function FeaturedVideo() {
  return (
    <section className="py-20 px-6 bg-black/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl mb-8 text-center">Featured Work</h2>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.1)] border border-white/10">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/wjhIfB6SaEM?autoplay=0&rel=0" 
              title="Mission Impossible Fight Scene (Hoven Music)" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "No Tomorrow",
    description: "My latest electronic release blending raw energy with modern textures.",
    url: "https://youtu.be/grZ46f-c7Q0",
    videoId: "grZ46f-c7Q0",
    tag: "Latest Release"
  },
  {
    title: "Days Gone",
    description: "A full cinematic album exploring themes of survival and desolate landscapes.",
    url: "https://youtu.be/zdLvYp8Vlmw",
    videoId: "zdLvYp8Vlmw"
  },
  {
    title: "Mission Impossible",
    description: "An intense, high-energy score crafted for an action-packed fight scene.",
    url: "https://youtu.be/wjhIfB6SaEM",
    videoId: "wjhIfB6SaEM"
  },
  {
    title: "Spirited Away",
    description: "An orchestral reimagining filled with emotion and wonder.",
    url: "https://youtu.be/Hm2B-dIrmP4",
    videoId: "Hm2B-dIrmP4"
  },
  {
    title: "Journey",
    description: "An epic musical expedition through sweeping soundscapes.",
    url: "https://youtu.be/wO4VXcElTI0",
    videoId: "wO4VXcElTI0"
  },
  {
    title: "Chernobyl",
    description: "A haunting, atmospheric album capturing the tension of the historic event.",
    url: "https://youtu.be/F5GxrcYNt8c",
    videoId: "F5GxrcYNt8c"
  }
];

function Projects() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-4xl mb-16 text-center">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block relative rounded-xl overflow-hidden bg-[#141414] border border-white/5 hover:border-gold/30 transition-colors duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-5 h-5 text-black ml-1" fill="currentColor" />
                  </div>
                </div>
                {project.tag && (
                  <div className="absolute top-4 left-4 bg-gold text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.tag}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-2 text-white group-hover:text-gold transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  const links = [
    { icon: <Mail className="w-5 h-5" />, url: "mailto:aboelsoudhasan6@gmail.com", label: "Email" },
    { icon: <Youtube className="w-5 h-5" />, url: "https://youtube.com/@hhhoven?si=8Y0EbGESBoCeaWtn", label: "YouTube" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://www.instagram.com/hhhoven?igsh=OG43dW5uemxzOW5r", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/al-hasan-ahmed-69412838a", label: "LinkedIn" },
    { icon: <Music className="w-5 h-5" />, url: "https://open.spotify.com/artist/2zSNYcIrZlzJ4JPlK8dCHO", label: "Spotify" },
    { icon: <Briefcase className="w-5 h-5" />, url: "https://www.upwork.com/freelancers/~017ad876a65a17f74f", label: "Upwork" }
  ];

  return (
    <footer className="border-t border-white/10 py-12 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="font-serif text-2xl mb-8 text-white">Connect</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-black transition-all duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Hoven. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Hi! I'm Hoven's AI assistant. Ask me about his musical style, background, or recent releases!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    chatRef.current = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatRef.current) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, { role: 'ai', text: response.text || "Sorry, I couldn't process that." }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-gold text-black rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-40 ${isOpen ? 'hidden' : ''}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            <div className="p-4 bg-[#222] border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-black font-serif font-bold">H</div>
                <div>
                  <h3 className="font-medium text-sm text-white">Hoven AI</h3>
                  <p className="text-xs text-green-400">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-gold text-black rounded-br-sm' 
                      : 'bg-[#333] text-white rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#333] text-white rounded-2xl rounded-bl-sm px-4 py-3 text-sm flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 bg-[#222] border-t border-white/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2 bg-[#111] rounded-full px-4 py-2 border border-white/5 focus-within:border-gold/50 transition-colors"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my music..."
                  className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim() || isLoading}
                  className="text-gold disabled:text-gray-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-gold selection:text-black">
      <Hero />
      <Bio />
      <FeaturedVideo />
      <Projects />
      <Footer />
      <Chatbot />
    </div>
  );
}
