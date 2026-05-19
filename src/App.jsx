import { useState, useEffect } from 'react'

export default function RomanticProposalSite() {
  const [isAdminOpen, setIsAdminOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showCelebration, setShowCelebration] = useState(false)
  const [cloudName, setCloudName] = useState('demo')
  const [uploadPreset, setUploadPreset] = useState('docs_upload_example_us_preset')

  const [content, setContent] = useState({
    title: 'Nossa história',
    subtitle: 'Tem pessoas que aparecem na nossa vida e mudam completamente o significado dos dias. Você foi exatamente isso pra mim.',
    proposal: 'Você aceita namorar comigo?',
    spotify: 'https://open.spotify.com/embed/track/12lOxvml5EBvSCzQll7xVS',
    video: 'https://www.youtube.com/embed/3JWTaaS7LdU?autoplay=0&rel=0',
    heroImage: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2070&auto=format&fit=crop',
    audio: 'https://s17.aconvert.com/convert/p3r68-cdx67/9nkwi-im4hz.mp3',
    showSpotify: false,
    storyImages: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2070&auto=format&fit=crop',
    ],
    timelineItems: [
      {
        title: 'O começo',
        text: 'A primeira vez que você apareceu, sem perceber, já tinha mudado completamente meu dia.',
      },
      {
        title: 'As conversas',
        text: 'Cada madrugada falando com você fazia parecer que o tempo simplesmente desaparecia.',
      },
      {
        title: 'Hoje',
        text: 'Hoje eu só consigo imaginar uma versão melhor da minha vida se você estiver nela.',
      },
    ],
  })

  useEffect(() => {
    try {
      const raw = localStorage.getItem('proposal_content')
      if (raw) {
        const parsed = JSON.parse(raw)
        setContent((c) => ({ ...c, ...parsed }))
      }
    } catch (e) {
      // ignore
    }
  }, [])

  const saveContent = () => {
    try {
      localStorage.setItem('proposal_content', JSON.stringify(content))
      alert('Conteúdo salvo no navegador (localStorage).')
    } catch (e) {
      alert('Falha ao salvar localmente.')
    }
  }

  return (
    <>
      {/* ADMIN BUTTON */}
      {!isAdminOpen && (
        <button
          onClick={() => setIsAdminOpen(true)}
          className="fixed top-4 right-4 z-[999] w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 shadow-lg"
          title="Painel Administrativo"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </button>
      )}

      {/* ADMIN PANEL */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl w-full max-w-md max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-bold text-xl">Editor do Site</h2>

              <button
                onClick={() => {
                  setIsAdminOpen(false)
                  setPassword('')
                }}
                className="text-zinc-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            {!isAuthenticated ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-zinc-400">Senha</label>
                  <input
                    type="password"
                    placeholder="Digite a senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mt-1 px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white outline-none"
                  />
                </div>

                <button
                  onClick={() => {
                    if (password === '1234') {
                      setIsAuthenticated(true)
                      setPassword('')
                    } else {
                      alert('Senha incorreta!')
                      setPassword('')
                    }
                  }}
                  className="w-full py-3 rounded-xl bg-pink-500 text-white font-bold hover:scale-[1.02] transition-all"
                >
                  Entrar
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">Editar Conteúdo</h3>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={saveContent}
                      className="text-sm bg-pink-600 px-3 py-1 rounded-md text-white hover:opacity-90"
                    >
                      Salvar
                    </button>
                    <button
                      onClick={() => setIsAuthenticated(false)}
                      className="text-sm text-zinc-400 hover:text-white"
                    >
                      Logout
                    </button>
                  </div>
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
                    <label className="text-sm text-zinc-400">Link de áudio (URL pública)</label>
                    <div className="flex gap-2">
                      <input
                        value={content.audio}
                        onChange={(e) =>
                          setContent({ ...content, audio: e.target.value })
                        }
                        placeholder="https://.../song.mp3"
                        className="w-full mt-1 px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white"
                      />
                      <button
                        onClick={() => {
                          if (!content.audio) return alert('Nenhuma URL para copiar')
                          navigator.clipboard.writeText(content.audio)
                          alert('URL copiada para a área de transferência')
                        }}
                        className="mt-1 px-3 py-3 bg-zinc-800 rounded-xl text-sm text-zinc-200"
                      >
                        Copiar
                      </button>
                    </div>
                    <input
                      type="file"
                      accept="audio/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0]
                        if (!file) return

                        // If Cloudinary details provided, upload unsigned to Cloudinary
                        if (cloudName && uploadPreset) {
                          try {
                            const form = new FormData()
                            form.append('file', file)
                            form.append('upload_preset', uploadPreset)

                            const res = await fetch(
                              `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
                              { method: 'POST', body: form }
                            )
                            const data = await res.json()
                            if (data.secure_url) {
                              setContent({ ...content, audio: data.secure_url })
                            } else {
                              // fallback to local preview
                              setContent({ ...content, audio: URL.createObjectURL(file) })
                            }
                          } catch (err) {
                            setContent({ ...content, audio: URL.createObjectURL(file) })
                          }
                        } else {
                          setContent({ ...content, audio: URL.createObjectURL(file) })
                        }
                      }}
                      className="w-full mt-3 text-sm text-zinc-200"
                    />
                  </div>

                  <div className="mt-2 space-y-2">
                    <label className="text-sm text-zinc-400">Cloudinary Cloud Name</label>
                    <input
                      value={cloudName}
                      onChange={(e) => setCloudName(e.target.value)}
                      placeholder="ex: your-cloud-name"
                      className="w-full mt-1 px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white"
                    />

                    <label className="text-sm text-zinc-400">Cloudinary Upload Preset (unsigned)</label>
                    <input
                      value={uploadPreset}
                      onChange={(e) => setUploadPreset(e.target.value)}
                      placeholder="ex: unsigned_preset"
                      className="w-full mt-1 px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white"
                    />
                    <p className="text-xs text-zinc-500">Se preencher, uploads de áudio irão para o Cloudinary e retornarão uma URL pública.</p>
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
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          setContent({
                            ...content,
                            heroImage: URL.createObjectURL(file),
                          })
                        }
                      }}
                      className="w-full mt-3 text-sm text-zinc-200"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-zinc-400">Fotos tipo story</label>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mt-2">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                        <div key={index}>
                          <input
                            value={content.storyImages[index] || ''}
                            onChange={(e) => {
                              const images = [...(content.storyImages || Array(10).fill(''))]
                              images[index] = e.target.value
                              setContent({ ...content, storyImages: images })
                            }}
                            placeholder={`URL da foto ${index + 1}`}
                            className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white"
                          />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) {
                                const images = [...(content.storyImages || Array(10).fill(''))]
                                images[index] = URL.createObjectURL(file)
                                setContent({ ...content, storyImages: images })
                              }
                            }}
                            className="w-full mt-2 text-sm text-zinc-200"
                          />
                        </div>
                      ))}
                    </div>
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
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showCelebration && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/80 p-4">
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={index} className={`firework firework-${index + 1}`} />
            ))}
          </div>

          <div className="relative z-10 max-w-2xl w-full rounded-[40px] bg-gradient-to-br from-pink-500/90 via-fuchsia-700/90 to-violet-900/90 border border-white/20 p-8 text-center shadow-2xl">
            <p className="text-pink-100 uppercase tracking-[0.35em] text-sm mb-4">
              É oficial
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              AGORA SOMOS NAMORADOS!
            </h2>
            <p className="text-zinc-100 text-lg md:text-xl leading-relaxed mb-8">
              Obrigado por esse sim mágico. Vamos comemorar juntos cada momento, cada abraço e cada sonho.
            </p>
            <button
              onClick={() => setShowCelebration(false)}
              className="px-8 py-4 rounded-3xl bg-white text-black font-bold hover:bg-zinc-100 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

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
              {content.subtitle}
            </p>

            <div className="mt-10 animate-bounce text-zinc-300 text-sm">
              role pra baixo ↓
            </div>
          </div>
        </section>

        {/* PLAYER */}
        <section className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-y border-white/10">
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col items-center justify-center gap-6 text-center md:flex-row md:text-left">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-pink-300 mb-2">
                Nossa Trilha Sonora
              </p>
              <h2 className="font-bold text-3xl md:text-4xl">
                A trilha principal do nosso momento
              </h2>
            </div>

            <div className="w-full md:w-[420px] rounded-2xl overflow-hidden shadow-xl">
              {content.showSpotify && content.spotify ? (
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
              ) : null}

              {content.audio && (
                <div className="mt-4 bg-zinc-800/60 p-3 rounded-xl">
                  <audio controls src={content.audio} className="w-full" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* STORY PHOTOS */}
        {content.storyImages?.length > 0 ? (
          <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="text-center mb-12">
              <p className="text-pink-400 uppercase tracking-[0.3em] text-sm mb-4">
                Fotos em destaque
              </p>
              <h2 className="text-4xl md:text-6xl font-bold">
                Um pouquinho de nós dois
              </h2>
              <p className="mt-4 text-zinc-300 max-w-3xl mx-auto text-lg">
                Quase não conseguimos tirar fotos juntos, então aqui estão aqueles momentos que cá entre nós merecem um lugar especial.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
              {content.storyImages.map((photo, index) => (
                <div
                  key={index}
                  className="rounded-[32px] border border-white/10 bg-zinc-900/60 overflow-hidden shadow-2xl"
                >
                  <div className="h-80 w-full">
                    <img
                      src={photo}
                      alt={`Story ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* TIMELINE */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-pink-400 uppercase tracking-[0.3em] text-sm mb-4">
              Cada detalhe ficou marcado
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Os momentos que eu nunca vou esquecer
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {content.timelineItems.map((item, index) => (
              <div
                key={index}
                className="group bg-zinc-900/70 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="p-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-zinc-300 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VIDEO */}
        <section className="hidden py-28 px-6 bg-gradient-to-b from-black to-zinc-950">
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
                Desde o primeiro sorriso até a maneira como você transforma dias comuns em algo extraordinário, cada detalhe seu tem um lugar especial no meu coração.
              </p>

              <p>
                Eu admiro seu jeito de cuidar, sua força nos momentos difíceis e a risada que me faz esquecer qualquer preocupação.
              </p>

              <p>
                Você é a razão pela qual eu quero construir planos, comemorar vitórias e também ser apoio nas pequenas coisas do dia a dia.
              </p>

              <p>
                O que eu mais desejo é que a gente continue se descobrindo, deixando espaço para sonhos novos e celebrando todo afeto que já existe entre nós.
              </p>

              <p>
                Obrigado por ser quem você é e por tornar a minha vida muito mais bonita só por estar nela.
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
              <button
                onClick={() => setShowCelebration(true)}
                className="px-10 py-5 rounded-2xl bg-pink-500 hover:scale-105 transition-all duration-300 text-xl font-bold shadow-2xl shadow-pink-500/30"
              >
                SIM ❤️
              </button>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-10 py-5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 text-xl font-bold"
              >
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
    </>
  )
}