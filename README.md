import { useState } from 'react'

export default function RomanticProposalSite() { const [isAdmin, setIsAdmin] = useState(false) const [password, setPassword] = useState('')

const [content, setContent] = useState({ title: 'Nossa história', subtitle: '{content.subtitle}', proposal: 'Você aceita namorar comigo?', spotify: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX50QitC6Oqtn?utm_source=generator', video: 'https://www.youtube.com/embed/3JWTaaS7LdU?autoplay=0&rel=0', heroImage: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2070&auto=format&fit=crop', }) return ( <> {/* ADMIN LOGIN */} <div className="fixed top-4 right-4 z-[999]"> {!isAdmin ? ( <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl w-72"> <p className="text-white font-bold mb-3">Painel ADM</p>

<input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white outline-none"
        />

        <button
          onClick={() => {
            if (password === '1234') {
              setIsAdmin(true)
            }
          }}
          className="mt-3 w-full py-3 rounded-xl bg-pink-500 text-white font-bold hover:scale-[1.02] transition-all"
        >
          Entrar
        </button>
      </div>
    ) : (
      <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-2xl w-[340px] max-h-[85vh] overflow-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-white font-bold text-xl">Editor do Site</h2>

          <button
            onClick={() => setIsAdmin(false)}
            className="text-zinc-400 hover:text-white"
          >
            sair
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-zinc-400">Título</label>
            <input
              value={content.title}
              onChange={(e) =>
                setContent({ ...content, title: e.target.value })
              }
              className="w-full mt-1 px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400">Texto principal</label>
            <textarea
              value={content.subtitle}
              onChange={(e) =>
                setContent({ ...content, subtitle: e.target.value })
              }
              className="w-full mt-1 px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white min-h-[120px]"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400">Link Spotify Embed</label>
            <input
              value={content.spotify}
              onChange={(e) =>
                setContent({ ...content, spotify: e.target.value })
              }
              className="w-full mt-1 px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400">Link vídeo YouTube Embed</label>
            <input
              value={content.video}
              onChange={(e) =>
                setContent({ ...content, video: e.target.value })
              }
              className="w-full mt-1 px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400">Imagem principal</label>
            <input
              value={content.heroImage}
              onChange={(e) =>
                setContent({ ...content, heroImage: e.target.value })
              }
              className="w-full mt-1 px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400">Texto do pedido</label>
            <input
              value={content.proposal}
              onChange={(e) =>
                setContent({ ...content, proposal: e.target.value })
              }
              className="w-full mt-1 px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white"
            />
          </div>
        </div>        )}
  </div>

  
<div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">
  {/* HERO */}
  <section
    className="relative h-screen flex flex-col items-center justify-center text-center px-6"
    style={{
      backgroundImage:
        `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.8)), url('${content.heroImage}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="backdrop-blur-sm bg-black/20 p-8 rounded-3xl border border-white/10 shadow-2xl max-w-3xl">
      <p className="uppercase tracking-[0.4em] text-sm text-zinc-300 mb-4">
        Uma surpresa feita especialmente pra você
      </p>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
        {content.title.split(' ')[0]}
        <span className="block text-pink-400">
          {content.title.split(' ').slice(1).join(' ')}
        </span>
      </h1>

      <p className="text-zinc-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
        Tem pessoas que aparecem na nossa vida e mudam completamente o significado dos dias.
        Você foi exatamente isso pra mim.
      </p>

      <div className="mt-10 animate-bounce text-zinc-300 text-sm">
        role pra baixo ↓
      </div>
    </div>
  </section>

  {/* PLAYER */}
  <section className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-y border-white/10">
    <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <p className="text-sm text-zinc-400">Nossa trilha sonora</p>
        <h2 className="font-semibold text-lg">Adicione sua playlist aqui</h2>
      </div>

      <div className="w-full md:w-[420px] rounded-2xl overflow-hidden shadow-xl">
        <iframe
          style={{ borderRadius: '12px' }}
          src={content.spotify}
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify"
        />
      </div>
    </div>
  </section>

  {/* TIMELINE */}
  <section className="max-w-6xl mx-auto px-6 py-28">
    <div className="text-center mb-20">
      <p className="text-pink-400 uppercase tracking-[0.3em] text-sm mb-4">
        Cada detalhe ficou marcado
      </p>

      <h2 className="text-4xl md:text-6xl font-bold mb-6">
        Os momentos que eu nunca vou esquecer
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: 'O começo',
          text: 'A primeira vez que você apareceu, sem perceber, já tinha mudado completamente meu dia.',
          image:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop',
        },
        {
          title: 'As conversas',
          text: 'Cada madrugada falando com você fazia parecer que o tempo simplesmente desaparecia.',
          image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop',
        },
        {
          title: 'Hoje',
          text: 'Hoje eu só consigo imaginar uma versão melhor da minha vida se você estiver nela.',
          image:
            'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2070&auto=format&fit=crop',
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group bg-zinc-900/70 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >
          <div className="h-72 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-zinc-300 leading-relaxed">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* VIDEO */}
  <section className="py-28 px-6 bg-gradient-to-b from-black to-zinc-950">
    <div className="max-w-5xl mx-auto text-center">
      <p className="text-pink-400 uppercase tracking-[0.3em] text-sm mb-4">
        Um vídeo especial
      </p>

      <h2 className="text-4xl md:text-6xl font-bold mb-12">
        Porque algumas memórias merecem replay infinito
      </h2>

      <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-2xl aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={content.video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  </section>

  {/* LETTER */}
  <section className="max-w-4xl mx-auto px-6 py-28">
    <div className="bg-zinc-900/70 border border-white/10 rounded-[40px] p-8 md:p-14 shadow-2xl backdrop-blur-xl">
      <p className="text-pink-400 uppercase tracking-[0.3em] text-sm mb-6">
        Uma carta pra você
      </p>

      <div className="space-y-6 text-lg md:text-xl text-zinc-200 leading-relaxed">
        <p>
          Eu poderia escrever mil coisas aqui e ainda sentir que não consegui explicar direito o quanto você se tornou importante pra mim.
        </p>

        <p>
          Você transformou momentos simples em lembranças absurdamente especiais.
        </p>

        <p>
          Seu jeito, sua voz, suas manias, seu sorriso... tudo em você virou conforto pra mim.
        </p>

        <p>
          E sinceramente?
          Eu quero continuar criando memórias com você por muito, muito tempo.
        </p>
      </div>
    </div>
  </section>

  {/* FINAL */}
  <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />

    <div className="relative z-10 text-center max-w-4xl">
      <p className="uppercase tracking-[0.4em] text-zinc-300 text-sm mb-6">
        Agora eu preciso te perguntar uma coisa...
      </p>

      <h2 className="text-5xl md:text-8xl font-black leading-tight mb-10">
        {content.proposal.split(' ').slice(0,2).join(' ')}
        <span className="block text-pink-400">
          {content.proposal.split(' ').slice(2).join(' ')}
        </span>
      </h2>

      <p className="text-zinc-200 text-lg md:text-2xl mb-12 leading-relaxed">
        Porque eu definitivamente quero viver tudo isso ao seu lado.
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <button className="px-10 py-5 rounded-2xl bg-pink-500 hover:scale-105 transition-all duration-300 text-xl font-bold shadow-2xl shadow-pink-500/30">
          SIM ❤️
        </button>

        <button className="px-10 py-5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 text-xl font-bold">
          Ler tudo de novo 🥹
        </button>
      </div>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="border-t border-white/10 py-8 text-center text-zinc-500 text-sm">
    Feito com carinho, detalhe por detalhe.
  </footer>
</div>

) }
#   a a a  
 