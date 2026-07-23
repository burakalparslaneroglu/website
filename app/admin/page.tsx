import { requireChatGPTUser } from "../chatgpt-auth";
import { getPortalContent } from "../portal-store";
import { saveContent } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await requireChatGPTUser("/admin");
  if (user.email.toLowerCase() !== "balparslaner@gmail.com") return <main className="admin-shell"><h1>Erişim yok</h1><p>Bu yönetim alanı yalnızca site sahibine açıktır.</p></main>;
  const content = await getPortalContent();
  const courses = content.courses.map((item) => item.join(" | ")).join("\n");
  const publications = content.publications.map((item) => [item.year, item.title, item.journal, item.url ?? ""].join(" | ")).join("\n");
  return <main className="admin-shell"><a href="/" className="back-link">← Siteye dön</a><p className="eyebrow">YÖNETİM</p><h1>İçeriği düzenle</h1><p className="admin-intro">Değişiklikleri kaydettiğinizde ana sayfa güncellenir. Ders ve yayınlarda her satırı “alan | alan | alan” biçiminde yazın.</p><form action={saveContent} className="admin-form"><label>Ünvan ve bölüm<input name="title" defaultValue={content.profile.title}/></label><label>Üniversite<input name="institution" defaultValue={content.profile.institution}/></label><label>Kısa profil<textarea name="bio" rows={5} defaultValue={content.profile.bio}/></label><label>Araştırma açıklaması<textarea name="detail" rows={6} defaultValue={content.profile.detail}/></label><label>CV bağlantısı<input name="cvUrl" defaultValue={content.profile.cvUrl}/></label><label>Araştırma ve kodlar bağlantısı<input name="researchUrl" defaultValue={content.profile.researchUrl}/></label><label>Ders bağlantısı<input name="teachingUrl" defaultValue={content.profile.teachingUrl}/></label><label>Dersler<textarea name="courses" rows={5} defaultValue={courses}/></label><label>Yayınlar<textarea name="publications" rows={16} defaultValue={publications}/></label><button type="submit">Değişiklikleri kaydet</button></form></main>;
}
