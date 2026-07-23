import { getPortalContent } from "../../portal-store";

export const dynamic = "force-dynamic";

export default async function Eys2026Page() {
  const content = await getPortalContent();
  const eys = content.eys ?? { streamlitUrl: "https://finansal-ekonometri-eys26.streamlit.app/", notesUrl: "/eys-2026-uygulamali-finansal-ekonometri-ders-notlari.pdf" };
  return <main className="course-page"><nav className="course-nav"><a className="brand" href="/">BAE<span>·</span>ECON</a><a className="back-link" href="/#dersler">← Derslere dön</a></nav><section className="course-hero"><p className="eyebrow">EYS 2026</p><h1>Uygulamalı<br/><em>Finansal Ekonometri</em></h1><p>Bu sayfadan ders notlarına ve derste kullanılacak uygulamaya erişebilirsiniz.</p></section><section className="course-resources"><a className="resource-card" href={eys.streamlitUrl} target="_blank" rel="noreferrer"><span>01</span><div><p>UYGULAMA</p><h2>Finansal Ekonometri Streamlit Uygulaması</h2><small>Yeni sekmede açılır</small></div><b>↗</b></a><a className="resource-card" href={eys.notesUrl} target="_blank" rel="noreferrer"><span>02</span><div><p>DERS NOTLARI</p><h2>Uygulamalı Finansal Ekonometri Ders Notları</h2><small>PDF olarak açılır</small></div><b>↗</b></a></section></main>;
}
