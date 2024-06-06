import { db, Screenshot } from "astro:db";

export default async function () {
  await db.insert(Screenshot).values([
    { tweetUrl: "https://x.com/raae/status/1797182382337892473", renderUrl: "https://renders.urlbox.io/urlbox1/renders/662b9336def898573d9552ab/2024/6/6/d8e6c843-8ebc-4644-842a-d5ea49c5aead.png" },
  ]);
}
