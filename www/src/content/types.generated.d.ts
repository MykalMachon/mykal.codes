declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"posts": {
"2022-2023.md": {
  id: "2022-2023.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"aeropress-latte.md": {
  id: "aeropress-latte.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"always-take-screenshots.md": {
  id: "always-take-screenshots.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"aoc-2022-solution-for-day-1.md": {
  id: "aoc-2022-solution-for-day-1.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"aoc-2022-solution-for-day-2.md": {
  id: "aoc-2022-solution-for-day-2.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"aoc-2022-solution-for-day-3.md": {
  id: "aoc-2022-solution-for-day-3.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"aoc-2022-solution-for-day-4.md": {
  id: "aoc-2022-solution-for-day-4.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"aoc-2022-solution-for-day-5-1.md": {
  id: "aoc-2022-solution-for-day-5-1.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"aoc-2022-solution-for-day-5.md": {
  id: "aoc-2022-solution-for-day-5.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"autosave-forms.md": {
  id: "autosave-forms.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"braving-the-snow-for-bagels.md": {
  id: "braving-the-snow-for-bagels.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"cauliflower-fried-rice-wraps.md": {
  id: "cauliflower-fried-rice-wraps.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"coffee-setup.md": {
  id: "coffee-setup.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"csr-generation-scriptt.md": {
  id: "csr-generation-scriptt.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"digital-gardens.md": {
  id: "digital-gardens.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"docker-rocks.md": {
  id: "docker-rocks.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"every-company-is-a-tech-company.md": {
  id: "every-company-is-a-tech-company.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"flipnote-hatena.md": {
  id: "flipnote-hatena.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"good-cappuccinos.md": {
  id: "good-cappuccinos.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"hidden-content-in-an-unpublished-shopify-theme.md": {
  id: "hidden-content-in-an-unpublished-shopify-theme.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"improving-anchor-links.md": {
  id: "improving-anchor-links.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"mit-sans-elon.md": {
  id: "mit-sans-elon.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"mykal-social.md": {
  id: "mykal-social.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"new-years-2023.md": {
  id: "new-years-2023.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"on-hydroponic-gardens.md": {
  id: "on-hydroponic-gardens.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"on-the-steam-deck.md": {
  id: "on-the-steam-deck.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"optimizing-docker-containers.md": {
  id: "optimizing-docker-containers.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"pioneers-settlers-and-city-planners.md": {
  id: "pioneers-settlers-and-city-planners.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"preparing-for-battlesnake.md": {
  id: "preparing-for-battlesnake.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"recovering-from-failed-nextcloud-updates.md": {
  id: "recovering-from-failed-nextcloud-updates.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"remembering-ash.md": {
  id: "remembering-ash.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"scaling-down.md": {
  id: "scaling-down.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"scheduled-python-jobs-linux-v.windows.md": {
  id: "scheduled-python-jobs-linux-v.windows.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"shopify-as-json.md": {
  id: "shopify-as-json.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"starting-at-ufv.md": {
  id: "starting-at-ufv.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"tech-im-learning-this-summer-2019.md": {
  id: "tech-im-learning-this-summer-2019.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"telegraf-and-influx-for-server-monitoring.md": {
  id: "telegraf-and-influx-for-server-monitoring.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"the-adventures-of-ash.md": {
  id: "the-adventures-of-ash.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"the-incoming-internet-switch-up.md": {
  id: "the-incoming-internet-switch-up.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"tomorrow-s-legacy-software-today.md": {
  id: "tomorrow-s-legacy-software-today.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"tracking-popular-posts.md": {
  id: "tracking-popular-posts.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"web-dev-resources.md": {
  id: "web-dev-resources.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"websites-and-wes-anderson.md": {
  id: "websites-and-wes-anderson.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"whats-your-goto-web-stack.md": {
  id: "whats-your-goto-web-stack.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"why-i-love-self-hosting.md": {
  id: "why-i-love-self-hosting.md",
  slug: string,
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
},

	};

	type ContentConfig = typeof import("./config");
}
