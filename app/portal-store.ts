import { env } from "cloudflare:workers";
import { defaultPortalContent, type PortalContent } from "./content";

const schemaSql = "CREATE TABLE IF NOT EXISTS portal_content (id INTEGER PRIMARY KEY, payload TEXT NOT NULL, updated_at TEXT NOT NULL)";

const removedCourseTitle = "Python ile Uygulamalı Zaman Serisi Analizi";

function normalizeContent(content: PortalContent): PortalContent {
  return {
    ...content,
    courses: content.courses.filter(([, title]) => title !== removedCourseTitle),
  };
}

async function ensureTable() {
  await env.DB.prepare(schemaSql).run();
}

export async function getPortalContent(): Promise<PortalContent> {
  await ensureTable();
  const row = await env.DB.prepare("SELECT payload FROM portal_content WHERE id = 1").first<{ payload: string }>();
  if (!row) return defaultPortalContent;
  try { return normalizeContent(JSON.parse(row.payload) as PortalContent); } catch { return defaultPortalContent; }
}

export async function savePortalContent(content: PortalContent) {
  await ensureTable();
  await env.DB.prepare("INSERT INTO portal_content (id, payload, updated_at) VALUES (1, ?, ?) ON CONFLICT(id) DO UPDATE SET payload = excluded.payload, updated_at = excluded.updated_at")
    .bind(JSON.stringify(content), new Date().toISOString()).run();
}
