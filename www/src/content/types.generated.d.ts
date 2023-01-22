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
		"links": {
"mykal-social.md": {
  id: "mykal-social.md",
  slug: "mykal-social",
  body: string,
  collection: "links",
  data: any
},
},
"notes": {
"digital-gardens.md": {
  id: "digital-gardens.md",
  slug: "digital-gardens",
  body: string,
  collection: "notes",
  data: any
},
},
"photos": {
"good-cappuccinos.md": {
  id: "good-cappuccinos.md",
  slug: "good-cappuccinos",
  body: string,
  collection: "photos",
  data: any
},
"new-years-2023.md": {
  id: "new-years-2023.md",
  slug: "new-years-2023",
  body: string,
  collection: "photos",
  data: any
},
"remembering-ash.md": {
  id: "remembering-ash.md",
  slug: "remembering-ash",
  body: string,
  collection: "photos",
  data: any
},
},
"posts": {
"2022-2023.md": {
  id: "2022-2023.md",
  slug: "2022-2023",
  body: string,
  collection: "posts",
  data: any
},
"aeropress-latte.md": {
  id: "aeropress-latte.md",
  slug: "aeropress-latte",
  body: string,
  collection: "posts",
  data: any
},
"always-take-screenshots.md": {
  id: "always-take-screenshots.md",
  slug: "always-take-screenshots",
  body: string,
  collection: "posts",
  data: any
},
"aoc-2022-solution-for-day-1.md": {
  id: "aoc-2022-solution-for-day-1.md",
  slug: "aoc-2022-solution-for-day-1",
  body: string,
  collection: "posts",
  data: any
},
"aoc-2022-solution-for-day-2.md": {
  id: "aoc-2022-solution-for-day-2.md",
  slug: "aoc-2022-solution-for-day-2",
  body: string,
  collection: "posts",
  data: any
},
"aoc-2022-solution-for-day-3.md": {
  id: "aoc-2022-solution-for-day-3.md",
  slug: "aoc-2022-solution-for-day-3",
  body: string,
  collection: "posts",
  data: any
},
"aoc-2022-solution-for-day-4.md": {
  id: "aoc-2022-solution-for-day-4.md",
  slug: "aoc-2022-solution-for-day-4",
  body: string,
  collection: "posts",
  data: any
},
"aoc-2022-solution-for-day-5-1.md": {
  id: "aoc-2022-solution-for-day-5-1.md",
  slug: "aoc-2022-solution-for-day-5-1",
  body: string,
  collection: "posts",
  data: any
},
"aoc-2022-solution-for-day-5.md": {
  id: "aoc-2022-solution-for-day-5.md",
  slug: "aoc-2022-solution-for-day-5",
  body: string,
  collection: "posts",
  data: any
},
"autosave-forms.md": {
  id: "autosave-forms.md",
  slug: "autosave-forms",
  body: string,
  collection: "posts",
  data: any
},
"braving-the-snow-for-bagels.md": {
  id: "braving-the-snow-for-bagels.md",
  slug: "braving-the-snow-for-bagels",
  body: string,
  collection: "posts",
  data: any
},
"cauliflower-fried-rice-wraps.md": {
  id: "cauliflower-fried-rice-wraps.md",
  slug: "cauliflower-fried-rice-wraps",
  body: string,
  collection: "posts",
  data: any
},
"coffee-setup.md": {
  id: "coffee-setup.md",
  slug: "coffee-setup",
  body: string,
  collection: "posts",
  data: any
},
"csr-generation-scriptt.md": {
  id: "csr-generation-scriptt.md",
  slug: "csr-generation-scriptt",
  body: string,
  collection: "posts",
  data: any
},
"docker-rocks.md": {
  id: "docker-rocks.md",
  slug: "docker-rocks",
  body: string,
  collection: "posts",
  data: any
},
"every-company-is-a-tech-company.md": {
  id: "every-company-is-a-tech-company.md",
  slug: "every-company-is-a-tech-company",
  body: string,
  collection: "posts",
  data: any
},
"flipnote-hatena.md": {
  id: "flipnote-hatena.md",
  slug: "flipnote-hatena",
  body: string,
  collection: "posts",
  data: any
},
"hidden-content-in-an-unpublished-shopify-theme.md": {
  id: "hidden-content-in-an-unpublished-shopify-theme.md",
  slug: "hidden-content-in-an-unpublished-shopify-theme",
  body: string,
  collection: "posts",
  data: any
},
"improving-anchor-links.md": {
  id: "improving-anchor-links.md",
  slug: "improving-anchor-links",
  body: string,
  collection: "posts",
  data: any
},
"mit-sans-elon.md": {
  id: "mit-sans-elon.md",
  slug: "mit-sans-elon",
  body: string,
  collection: "posts",
  data: any
},
"on-hydroponic-gardens.md": {
  id: "on-hydroponic-gardens.md",
  slug: "on-hydroponic-gardens",
  body: string,
  collection: "posts",
  data: any
},
"on-the-steam-deck.md": {
  id: "on-the-steam-deck.md",
  slug: "on-the-steam-deck",
  body: string,
  collection: "posts",
  data: any
},
"optimizing-docker-containers.md": {
  id: "optimizing-docker-containers.md",
  slug: "optimizing-docker-containers",
  body: string,
  collection: "posts",
  data: any
},
"pioneers-settlers-and-city-planners.md": {
  id: "pioneers-settlers-and-city-planners.md",
  slug: "pioneers-settlers-and-city-planners",
  body: string,
  collection: "posts",
  data: any
},
"preparing-for-battlesnake.md": {
  id: "preparing-for-battlesnake.md",
  slug: "preparing-for-battlesnake",
  body: string,
  collection: "posts",
  data: any
},
"recovering-from-failed-nextcloud-updates.md": {
  id: "recovering-from-failed-nextcloud-updates.md",
  slug: "recovering-from-failed-nextcloud-updates",
  body: string,
  collection: "posts",
  data: any
},
"scaling-down.md": {
  id: "scaling-down.md",
  slug: "scaling-down",
  body: string,
  collection: "posts",
  data: any
},
"scheduled-python-jobs-linux-v.windows.md": {
  id: "scheduled-python-jobs-linux-v.windows.md",
  slug: "scheduled-python-jobs-linux-vwindows",
  body: string,
  collection: "posts",
  data: any
},
"shopify-as-json.md": {
  id: "shopify-as-json.md",
  slug: "shopify-as-json",
  body: string,
  collection: "posts",
  data: any
},
"starting-at-ufv.md": {
  id: "starting-at-ufv.md",
  slug: "starting-at-ufv",
  body: string,
  collection: "posts",
  data: any
},
"tech-im-learning-this-summer-2019.md": {
  id: "tech-im-learning-this-summer-2019.md",
  slug: "tech-im-learning-this-summer-2019",
  body: string,
  collection: "posts",
  data: any
},
"telegraf-and-influx-for-server-monitoring.md": {
  id: "telegraf-and-influx-for-server-monitoring.md",
  slug: "telegraf-and-influx-for-server-monitoring",
  body: string,
  collection: "posts",
  data: any
},
"the-adventures-of-ash.md": {
  id: "the-adventures-of-ash.md",
  slug: "the-adventures-of-ash",
  body: string,
  collection: "posts",
  data: any
},
"the-incoming-internet-switch-up.md": {
  id: "the-incoming-internet-switch-up.md",
  slug: "the-incoming-internet-switch-up",
  body: string,
  collection: "posts",
  data: any
},
"tomorrow-s-legacy-software-today.md": {
  id: "tomorrow-s-legacy-software-today.md",
  slug: "tomorrow-s-legacy-software-today",
  body: string,
  collection: "posts",
  data: any
},
"tracking-popular-posts.md": {
  id: "tracking-popular-posts.md",
  slug: "tracking-popular-posts",
  body: string,
  collection: "posts",
  data: any
},
"web-dev-resources.md": {
  id: "web-dev-resources.md",
  slug: "web-dev-resources",
  body: string,
  collection: "posts",
  data: any
},
"websites-and-wes-anderson.md": {
  id: "websites-and-wes-anderson.md",
  slug: "websites-and-wes-anderson",
  body: string,
  collection: "posts",
  data: any
},
"whats-your-goto-web-stack.md": {
  id: "whats-your-goto-web-stack.md",
  slug: "whats-your-goto-web-stack",
  body: string,
  collection: "posts",
  data: any
},
"why-i-love-self-hosting.md": {
  id: "why-i-love-self-hosting.md",
  slug: "why-i-love-self-hosting",
  body: string,
  collection: "posts",
  data: any
},
},

	};

	type ContentConfig = never;
}
