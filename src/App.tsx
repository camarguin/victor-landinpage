import React from 'react';


const App: React.FC = () => {
  const whatsappUrl = "https://wa.me/5561986293939?text=Ol%C3%A1%2C%20preciso%20de%20uma%20defesa%20criminal%20especializada.";
  const instagramUrl = "https://www.instagram.com/victorgerhardt/";

  return (
    <div className="landing-page">
      {/* Header */}
      <header style={{ position: 'fixed', width: '100%', zIndex: 10, padding: '1.25rem 0', background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container header-inner">
          <div className="brand" style={{ fontSize: '1.25rem', color: 'var(--accent)' }}>
            Victor Gerhardt
            <span style={{ display: 'block', fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '2px' }}>Advocacia Criminal</span>
          </div>
          <nav className="desktop-only" style={{ gap: '2rem', alignItems: 'center' }}>
            <a href="#atuacao" className="nav-link" style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>Áreas</a>
            <a href="#sobre" className="nav-link" style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>O Advogado</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', minHeight: '40px', fontSize: '0.75rem' }}>Emergência 24h</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid animate-fade-in-up">
          <div className="hero-content">
            <span className="hero-eyebrow">Uberlândia - MG</span>
            <h1 className="hero-title">
              Defesa Criminal <span className="text-accent">Estratégica</span> em Uberlândia.
            </h1>
            <p className="hero-subtitle">
              Atuação imediata 24h em flagrantes, audiências de custódia e processos criminais complexos. Sua liberdade sob proteção especializada.
            </p>
            <div className="hero-cta">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Falar com Especialista Agora</a>
              <a href="#atuacao" className="btn btn-outline">Ver Áreas de Atuação</a>
            </div>
          </div>
          <div className="hero-image animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img
              src="/assets/victor.png"
              alt="Victor Gerhardt - Advogado Criminalista"
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)' }}
            />
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="section-padding" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <div className="urgency-intro animate-fade-in-up">
            <h2>Precisa de ajuda agora?</h2>
            <p className="text-muted">Acione nosso plantão criminal especializado 24h em Uberlândia e região.</p>
          </div>
          <div className="grid-3">
            {[
              { title: "Familiar Preso?", desc: "Intervenção imediata em delegacias e flagrantes." },
              { title: "Intimação Policial?", desc: "Acompanhamento estratégico para evitar prisões ilegais." },
              { title: "Audiência de Custódia?", desc: "Defesa técnica para garantir o direito à liberdade." },
              { title: "Busca e Apreensão?", desc: "Garantia de direitos contra abusos de autoridade." }
            ].map((item, index) => (
              <div key={index} className="glass-card animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <h3 style={{ marginBottom: '0.75rem', color: 'var(--accent)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="urgency-cta">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ backgroundColor: '#d93025', color: 'white' }}>
              Acionar Plantão Criminal Agora
            </a>
          </div>
        </div>
      </section>

      {/* Areas of Action */}
      <section id="atuacao" className="section-padding">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <h2>Áreas de Atuação Especializada</h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid-3">
            {[
              { title: "Habeas Corpus", desc: "Liberdade imediata contra prisões ilegais e abusivas." },
              { title: "Lei Maria da Penha", desc: "Defesa especializada em medidas protetivas e processos domésticos." },
              { title: "Tráfico de Drogas", desc: "Estratégia técnica focada na redução de danos e absolvição." },
              { title: "Crimes Contra Patrimônio", desc: "Defesa técnica em casos de roubo, furto e estelionato." },
              { title: "Tribunal do Júri", desc: "Atuação combativa em crimes dolosos contra a vida." },
              { title: "Direito Penal Econômico", desc: "Defesa em crimes tributários, lavagem de dinheiro e corrupção." }
            ].map((area, index) => (
              <div key={index} className="glass-card animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s`, textAlign: 'center' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>{area.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section id="sobre" className="section-padding" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-image animate-fade-in-up">
              <img
                src="/assets/victor.png"
                alt="Victor Gerhardt"
                style={{ width: '100%', borderRadius: '8px', filter: 'grayscale(0.5)' }}
              />
            </div>
            <div className="about-content animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 style={{ marginBottom: '1.25rem' }}>Por que escolher <br/><span className="text-accent">Victor Gerhardt?</span></h2>
              <p style={{ marginBottom: '1.25rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Atuação focada no rigor técnico e no atendimento humanizado. Conhecimento profundo da realidade jurídica de Uberlândia e região, garantindo que nenhum direito do cliente seja violado pelas autoridades.
              </p>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Cada caso é tratado com sigilo absoluto e estratégia personalizada, buscando sempre o melhor resultado jurídico através de uma defesa técnica e combativa.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-value">24h</div>
                  <div className="stat-label">Disponibilidade</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">+500</div>
                  <div className="stat-label">Casos Atendidos</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" style={{ fontSize: '1.2rem' }}>Triângulo</div>
                  <div className="stat-label">Atuação Regional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding" style={{ background: 'var(--primary)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container footer-grid">
          <div>
            <div className="brand" style={{ fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '0.75rem' }}>Victor Gerhardt</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Advocacia Criminal Especializada em Uberlândia e Região. Defesa técnica, ética e sigilosa.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--white)' }}>Contato</h4>
            <ul style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '0.5rem' }}>WhatsApp: (61) 98629-3939</li>
              <li style={{ marginBottom: '0.5rem' }}>Instagram: @victorgerhardt</li>
              <li style={{ marginBottom: '0.5rem' }}>Uberlândia - Minas Gerais</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--white)' }}>Links Úteis</h4>
            <ul style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href={instagramUrl} target="_blank" rel="noopener noreferrer">Acompanhe no Instagram</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Falar com Advogado</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#atuacao">Áreas de Atuação</a></li>
            </ul>
          </div>
        </div>
        <div className="container" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
          <p style={{ fontSize: '0.7rem', color: '#555' }}>
            &copy; {new Date().getFullYear()} Victor Gerhardt Advocacia. Todos os direitos reservados.
            Desenvolvido para alta conversão em Uberlândia-MG.
          </p>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Falar no WhatsApp">
        <svg width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.601 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;
