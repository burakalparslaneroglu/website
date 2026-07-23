import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const portalContent = sqliteTable("portal_content", {
  id: integer("id").primaryKey(),
  payload: text("payload").notNull(),
  updatedAt: text("updated_at").notNull(),
});
