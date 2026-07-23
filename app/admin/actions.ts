"use server";

import { revalidatePath } from "next/cache";
import { getChatGPTUser } from "../chatgpt-auth";
import { getPortalContent, savePortalContent } from "../portal-store";

const ADMIN_EMAIL = "balparslaner@gmail.com";

function linesToCourses(value: string) {
  return value.split("\n").map((line) => line.split("|").map((item) => item.trim())).filter((parts) => parts.length === 3 && parts.every(Boolean)) as [string, string, string][];
}

function linesToPublications(value: string) {
  return value.split("\n").map((line) => {
    const [year, title, journal, url] = line.split("|").map((item) => item.trim());
    return year && title && journal ? { year, title, journal, ...(url ? { url } : {}) } : null;
  }).filter(Boolean) as Awaited<ReturnType<typeof getPortalContent>>["publications"];
}

export async function saveContent(formData: FormData) {
  const user = await getChatGPTUser();
  if (!user || user.email.toLowerCase() !== ADMIN_EMAIL) throw new Error("Bu işlem için yetkiniz yok.");
  const existing = await getPortalContent();
  const profile = {
    ...existing.profile,
    title: String(formData.get("title") ?? ""), institution: String(formData.get("institution") ?? ""),
    bio: String(formData.get("bio") ?? ""), detail: String(formData.get("detail") ?? ""),
    cvUrl: String(formData.get("cvUrl") ?? ""), researchUrl: String(formData.get("researchUrl") ?? ""), teachingUrl: String(formData.get("teachingUrl") ?? ""),
  };
  await savePortalContent({ profile, courses: linesToCourses(String(formData.get("courses") ?? "")), publications: linesToPublications(String(formData.get("publications") ?? "")) });
  revalidatePath("/"); revalidatePath("/admin");
}
