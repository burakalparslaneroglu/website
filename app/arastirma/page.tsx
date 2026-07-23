const codePackages = [
  { title: "Pairs Trading with Wavelet Transform", detail: "Simülasyon kodları", file: "/codes/wavelet-pairs-trading-simulation-codes.zip" },
  { title: "Pairs Trading with Wavelet Transform", detail: "Pratik uygulama kodları", file: "/codes/wavelet-pairs-trading-practical-implementation.zip" },
  { title: "Time-Varying Cointegration and the Kalman Filter", detail: "Veri ve kodlar", file: "/codes/time-varying-cointegration-codes-and-data.zip" },
  { title: "Heterogeneous Effects of Unconventional Monetary Policy", detail: "Replikasyon kodları ve veri", file: "/codes/monetary-policy-replication-codes-and-data.zip" },
  { title: "Regulated Seasonal Unit Root Process", detail: "Ek materyal ve MATLAB kodları", file: "/codes/regulated-seasonal-unit-root-supplementary-material.zip" },
  { title: "Wavelet Variance Ratio Cointegration Test", detail: "MATLAB kodları", file: "/codes/wavelet-variance-ratio-codes.zip" },
];

export default function ResearchPage() {
  return <main className="research-page"><nav className="course-nav"><a className="brand" href="/">BAE<span>·</span>ECON</a><a className="back-link" href="/#yayinlar">← Ana sayfaya dön</a></nav><section className="research-hero"><p className="eyebrow">ARAŞTIRMA & KODLAR</p><h1>Çalışmalar ve<br/><em>uygulama dosyaları</em></h1><p>Yayınlara ait çalışma dosyaları, replikasyon kodları ve veri paketleri bu sitede doğrudan indirilebilir.</p></section><section className="code-list">{codePackages.map((item, index) => <a className="code-card" href={item.file} download key={item.file}><span>{String(index + 1).padStart(2,"0")}</span><div><h2>{item.title}</h2><p>{item.detail}</p></div><b>İndir ↓</b></a>)}</section></main>;
}
