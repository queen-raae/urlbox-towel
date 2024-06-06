import { defineDb, defineTable, column } from "astro:db";

const Screenshot = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    tweetUrl: column.text({ optional: false }),
    renderUrl: column.text({ optional: true }),
  },
});

export default defineDb({
  tables: { Screenshot },
});
