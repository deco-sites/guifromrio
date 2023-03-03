import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 550,
  site: "guifromrio",
  domains: ["guifromrio.deco.site"],
});