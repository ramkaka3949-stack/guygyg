
import React, { useState, useEffect, useRef } from 'react';
import { Heart, Stars, Sparkles, ChevronDown, MessageCircleHeart, Info } from 'lucide-react';
import { QUOTES, NICKNAMES, STAGES, PROMISES } from './constants';
import FloatingHearts from './components/FloatingHearts';
import { generateMotivation } from './services/geminiService';

const App: React.FC = () => {
  const [nicknameIndex, setNicknameIndex] = useState(0);
  const [dailyMotivation, setDailyMotivation] = useState<string | null>(null);
  const [isLoadingMotivation, setIsLoadingMotivation] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setNicknameIndex((prev) => (prev + 1) % NICKNAMES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleGenerateMotivation = async () => {
    setIsLoadingMotivation(true);
    const msg = await generateMotivation("She is studying hard for her future and wants to be independent.");
    setDailyMotivation(msg);
    setIsLoadingMotivation(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-love text-stone-800 selection:bg-rose-200 overflow-x-hidden">
      <FloatingHearts />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 z-10">
        <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <span className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-medium mb-4">
            To My {NICKNAMES[nicknameIndex]}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif-elegant font-bold text-stone-900 mb-6 leading-tight">
            Your Dreams Are <br />
            <span className="text-rose-600 italic">Your Strength</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-stone-600 mb-8 font-light italic">
            "When you talk about your future, it doesn’t sound like just plans to me... it sounds like strength."
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => scrollToSection('letter')}
              className="bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-800 transition-all shadow-lg flex items-center gap-2 group"
            >
              Read My Letter
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <button
              onClick={handleGenerateMotivation}
              className="bg-white border border-rose-200 text-rose-600 px-8 py-3 rounded-full hover:bg-rose-50 transition-all shadow-sm flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Get Motivated
            </button>
          </div>
        </div>

        {dailyMotivation && (
          <div className="absolute bottom-20 max-w-lg mx-auto p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-rose-100 shadow-xl animate-in fade-in zoom-in duration-500">
            <p className="text-stone-700 italic text-center font-medium">"{dailyMotivation}"</p>
            <p className="text-right text-rose-500 font-bold mt-2">— Your D ❤️</p>
          </div>
        )}
      </section>

      {/* The Letter Section */}
      <section id="letter" className="py-24 px-6 max-w-4xl mx-auto relative z-10">
        <div className="bg-white/40 backdrop-blur-sm p-12 rounded-3xl border border-white/60 shadow-inner">
          <div className="flex justify-center mb-8">
            <Heart className="w-12 h-12 text-rose-400 fill-rose-100 float-animation" />
          </div>
          <div className="space-y-12 text-center">
            <div className="group">
              <p className="text-2xl md:text-3xl font-serif-elegant leading-relaxed text-stone-800 group-hover:text-stone-900 transition-colors">
                "{QUOTES.INDEPENDENCE}"
              </p>
              <div className="w-16 h-1 bg-rose-200 mx-auto mt-6 rounded-full group-hover:w-32 transition-all duration-700"></div>
            </div>

            <p className="text-xl font-light text-stone-600 italic">
              "I want you to know this from the deepest, calmest place in my heart: I don’t want to limit you or tie you down. I want to be a quiet strength beside you."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
              {PROMISES.map((promise, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-stone-50 hover:shadow-md transition-shadow">
                  <div className="bg-rose-50 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-500">
                    {promise.icon}
                  </div>
                  <h3 className="font-bold text-stone-800">{promise.text}</h3>
                  <p className="text-xs text-stone-500 mt-2 uppercase tracking-widest font-semibold">My Promise</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Map Section */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-900 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif-elegant mb-4 italic">Respecting Your Journey</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Whether you are in the library at 3 AM or 3,000 miles away, I am standing beside your dreams, not in front of them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STAGES.map((stage, i) => (
              <div key={i} className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-default">
                <div className="mb-6 p-4 rounded-xl bg-white/10 inline-block group-hover:scale-110 transition-transform">
                  {stage.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{stage.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{stage.description}</p>
                <div className="absolute top-4 right-4 text-4xl font-serif-elegant opacity-10 group-hover:opacity-20 transition-opacity">0{i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Hug Section (Vulnerability) */}
      <section className="py-24 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-rose-200/50 border border-rose-50">
          <MessageCircleHeart className="w-16 h-16 text-rose-500 mb-8 mx-auto" />
          <h2 className="text-3xl md:text-5xl font-serif-elegant text-stone-900 mb-8 italic">"My Sanctuary"</h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-8">
            "I want to tell you how much I love you... especially in those moments when I feel low. I only want to hug you. I only want to be with you every time."
          </p>
          <div className="inline-flex items-center gap-4 p-4 rounded-full bg-rose-50 text-rose-600 font-medium">
            <Info className="w-5 h-5" />
            <span>You're the only one who can fix a bad day.</span>
          </div>
        </div>
      </section>

      {/* Final Call to Action / Motivation */}
      <section className="py-24 text-center px-6">
        <Stars className="w-8 h-8 text-yellow-400 mx-auto mb-6 animate-pulse" />
        <h2 className="text-4xl md:text-6xl font-serif-elegant mb-10">Work Hard, Dream Big</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-8 rounded-3xl bg-rose-50 border border-rose-100">
            <h4 className="font-bold text-rose-900 mb-2 uppercase tracking-tighter text-sm">A Message For You</h4>
            <p className="text-rose-800 leading-relaxed">
              Whatever you become, wherever you go, I will always wish the best for you. Your independence makes me proud. Watching you choose self-respect makes me feel connected to you on a deeper level.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 text-white">
            <h4 className="font-bold text-stone-400 mb-2 uppercase tracking-tighter text-sm">My Commitment</h4>
            <p className="text-stone-300 leading-relaxed">
              I don't promise perfection. But I promise honesty, support, and presence. When you're tired, I'll remind you to breathe. When you doubt yourself, I'll remind you of your strength.
            </p>
          </div>
        </div>
        
        <div className="mt-20">
          <p className="font-cursive text-4xl text-rose-600 mb-2">I love you endlessly,</p>
          <p className="text-2xl font-serif-elegant font-bold text-stone-900">— Dhawal (Your D)</p>
          <div className="flex justify-center gap-2 mt-4 text-xs text-stone-400 font-mono tracking-widest">
            <span>POOKIE</span> • <span>BABES</span> • <span>CUTIE</span>
          </div>
        </div>
      </section>

      {/* Footer Nav */}
      <footer className="py-10 border-t border-rose-100 flex flex-col items-center justify-center text-stone-400 text-sm">
        <p className="mb-2">Made with ❤️ for {NICKNAMES[0]}</p>
        <p>© 2024 D & Jaan Forever</p>
      </footer>

      {isLoadingMotivation && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-3xl flex flex-col items-center gap-4 shadow-2xl border border-rose-100">
            <div className="w-12 h-12 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin"></div>
            <p className="text-rose-600 font-serif-elegant font-bold text-xl italic">D is thinking of something sweet...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
