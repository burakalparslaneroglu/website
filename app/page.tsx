const publications = [
  { year: "2025", title: "Volatility transmission and macro-financial uncertainty", journal: "Journal of Financial Econometrics" },
  { year: "2024", title: "Nonlinear persistence in financial time series", journal: "International Journal of Forecasting" },
  { year: "2023", title: "Nowcasting macroeconomic risk with mixed-frequency signals", journal: "Journal of Applied Econometrics" },
];

const courses = [
  ["ECON 601", "Zaman Serisi Ekonometrisi", "Lisansüstü"],
  ["ECON 412", "Finansal Ekonometri", "Lisans"],
  ["ECON 302", "Ekonometri II", "Lisans"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Ana navigasyon">
        <a className="brand" href="#baslangic">BE<span>·</span>ECON</a>
        <div className="nav-links">
          <a href="#profil">Profil</a><a href="#yayinlar">Yayınlar</a><a href="#dersler">Dersler</a><a href="#iletisim">İletişim</a>
        </div>
        <a className="nav-cta" href="#dersler">Ders portalı <span>↗</span></a>
      </nav>

      <section className="hero" id="baslangic">
        <div className="hero-copy">
          <p className="eyebrow">AKADEMİK PROFİL · İKTİSAT</p>
          <h1>Veriden<br/><em>anlama.</em></h1>
          <p className="hero-text">Zaman serisi analizi, finansal ekonometri ve makroekonomik belirsizlik üzerine araştırma ve öğretim.</p>
          <div className="hero-actions"><a className="button dark" href="#profil">Araştırmaları keşfet <span>↓</span></a><a className="text-link" href="#dersler">Ders materyallerine git →</a></div>
        </div>
        <div className="hero-side">
          <div className="orbit"><div className="orbit-core">BE</div><span className="dot d1"/><span className="dot d2"/><span className="dot d3"/><span className="dot d4"/></div>
          <p className="side-note">İstanbul · Türkiye<br/>Araştırma &amp; Öğretim</p>
        </div>
      </section>

      <section className="profile section" id="profil">
        <div className="section-label"><span>01</span><p>PROFİL</p></div>
        <div className="profile-content"><h2>Kuramın titizliğini<br/>uygulamanın <em>gerçekliğiyle</em><br/>buluşturmak.</h2><div className="profile-text"><p>Prof. Dr. Burak Eroğlu, zaman serisi analizi ve finansal ekonometrinin kesişiminde çalışır. Araştırmaları, belirsizliği ölçmek ve karmaşık ekonomik dinamikleri güvenilir biçimde anlamlandırmak için yeni yöntemler geliştirir.</p><a className="text-link" href="#iletisim">Akademik özgeçmişi görüntüle →</a></div></div>
        <div className="focus-grid"><article><b>01</b><h3>Zaman Serileri</h3><p>Doğrusal olmayan dinamikler, yapısal kırılmalar ve öngörü.</p></article><article><b>02</b><h3>Finansal Ekonometri</h3><p>Volatilite, risk yayılımı ve piyasa mikro yapısı.</p></article><article><b>03</b><h3>Makroekonometri</h3><p>Belirsizlik, karma frekanslı veri ve nowcasting.</p></article></div>
      </section>

      <section className="research section" id="yayinlar">
        <div className="section-label"><span>02</span><p>SEÇİLMİŞ YAYINLAR</p></div>
        <div className="publication-list">{publications.map((item, index) => <article className="publication" key={item.title}><span className="pub-index">0{index + 1}</span><div><p className="pub-year">{item.year}</p><h3>{item.title}</h3><p className="journal">{item.journal}</p></div><a href="#iletisim" aria-label={`${item.title} yayını hakkında bilgi`}>↗</a></article>)}</div>
        <a className="button outline" href="#iletisim">Tüm yayınlar <span>→</span></a>
      </section>

      <section className="teaching section" id="dersler">
        <div className="section-label"><span>03</span><p>DERS PORTALI</p></div>
        <div className="teaching-intro"><h2>Öğrenmek için<br/><em>açık bir alan.</em></h2><p>Ders notları, uygulama setleri ve güncel duyurulara tek noktadan erişin.</p></div>
        <div className="course-list">{courses.map(([code, title, level]) => <a className="course" href="#iletisim" key={code}><span className="course-code">{code}</span><h3>{title}</h3><span className="level">{level}</span><span className="course-arrow">→</span></a>)}</div>
      </section>

      <section className="contact" id="iletisim"><p className="eyebrow">İLETİŞİM</p><h2>Bir fikriniz mi var?<br/><em>Konuşalım.</em></h2><a href="mailto:burak.eroglu@university.edu" className="email">burak.eroglu@university.edu <span>↗</span></a><div className="footer-line"><span>© 2026 Burak Eroğlu</span><span>İstanbul, Türkiye</span><span>Türkçe / EN</span></div></section>
    </main>
  );
}
