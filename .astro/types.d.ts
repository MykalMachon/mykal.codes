declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (data: CollectionEntry<C>) => boolean
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"posts": {
"2022-2023.md": {
  id: "2022-2023.md",
  slug: "2022-2023",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"aeropress-latte.md": {
  id: "aeropress-latte.md",
  slug: "aeropress-latte",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"always-take-screenshots.md": {
  id: "always-take-screenshots.md",
  slug: "always-take-screenshots",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"aoc-2022-solution-for-day-1.md": {
  id: "aoc-2022-solution-for-day-1.md",
  slug: "aoc-2022-solution-for-day-1",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"aoc-2022-solution-for-day-2.md": {
  id: "aoc-2022-solution-for-day-2.md",
  slug: "aoc-2022-solution-for-day-2",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"aoc-2022-solution-for-day-3.md": {
  id: "aoc-2022-solution-for-day-3.md",
  slug: "aoc-2022-solution-for-day-3",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"aoc-2022-solution-for-day-4.md": {
  id: "aoc-2022-solution-for-day-4.md",
  slug: "aoc-2022-solution-for-day-4",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"aoc-2022-solution-for-day-5-1.md": {
  id: "aoc-2022-solution-for-day-5-1.md",
  slug: "aoc-2022-solution-for-day-5-1",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"aoc-2022-solution-for-day-5.md": {
  id: "aoc-2022-solution-for-day-5.md",
  slug: "aoc-2022-solution-for-day-5",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"autosave-forms.md": {
  id: "autosave-forms.md",
  slug: "autosave-forms",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"braving-the-snow-for-bagels.md": {
  id: "braving-the-snow-for-bagels.md",
  slug: "braving-the-snow-for-bagels",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"cabin-on-an-island.md": {
  id: "cabin-on-an-island.md",
  slug: "cabin-on-an-island",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"cauliflower-fried-rice-wraps.md": {
  id: "cauliflower-fried-rice-wraps.md",
  slug: "cauliflower-fried-rice-wraps",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"coffee-setup.md": {
  id: "coffee-setup.md",
  slug: "coffee-setup",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"containers-and-the-enterprise-vendor-feedback-loop.md": {
  id: "containers-and-the-enterprise-vendor-feedback-loop.md",
  slug: "containers-and-the-enterprise-vendor-feedback-loop",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"csr-generation-scriptt.md": {
  id: "csr-generation-scriptt.md",
  slug: "csr-generation-scriptt",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"digital-gardens.md": {
  id: "digital-gardens.md",
  slug: "digital-gardens",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"docker-rocks.md": {
  id: "docker-rocks.md",
  slug: "docker-rocks",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"erosion-of-ownership.md": {
  id: "erosion-of-ownership.md",
  slug: "erosion-of-ownership",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"every-company-is-a-tech-company.md": {
  id: "every-company-is-a-tech-company.md",
  slug: "every-company-is-a-tech-company",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"flipnote-hatena.md": {
  id: "flipnote-hatena.md",
  slug: "flipnote-hatena",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"good-cappuccinos.md": {
  id: "good-cappuccinos.md",
  slug: "good-cappuccinos",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"hidden-content-in-an-unpublished-shopify-theme.md": {
  id: "hidden-content-in-an-unpublished-shopify-theme.md",
  slug: "hidden-content-in-an-unpublished-shopify-theme",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"hot-dog-renaissance.md": {
  id: "hot-dog-renaissance.md",
  slug: "hot-dog-renaissance",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"improving-anchor-links.md": {
  id: "improving-anchor-links.md",
  slug: "improving-anchor-links",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"mit-sans-elon.md": {
  id: "mit-sans-elon.md",
  slug: "mit-sans-elon",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"mykal-social.md": {
  id: "mykal-social.md",
  slug: "mykal-social",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"new-years-2023.md": {
  id: "new-years-2023.md",
  slug: "new-years-2023",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"on-hydroponic-gardens.md": {
  id: "on-hydroponic-gardens.md",
  slug: "on-hydroponic-gardens",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"on-the-steam-deck.md": {
  id: "on-the-steam-deck.md",
  slug: "on-the-steam-deck",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"optimizing-docker-containers.md": {
  id: "optimizing-docker-containers.md",
  slug: "optimizing-docker-containers",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"peanut-bowl-recipe.md": {
  id: "peanut-bowl-recipe.md",
  slug: "peanut-bowl-recipe",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"pioneers-settlers-and-city-planners.md": {
  id: "pioneers-settlers-and-city-planners.md",
  slug: "pioneers-settlers-and-city-planners",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"preparing-for-battlesnake.md": {
  id: "preparing-for-battlesnake.md",
  slug: "preparing-for-battlesnake",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"recovering-from-failed-nextcloud-updates.md": {
  id: "recovering-from-failed-nextcloud-updates.md",
  slug: "recovering-from-failed-nextcloud-updates",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"remembering-ash.md": {
  id: "remembering-ash.md",
  slug: "remembering-ash",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"scaling-down.md": {
  id: "scaling-down.md",
  slug: "scaling-down",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"scheduled-python-jobs-linux-v.windows.md": {
  id: "scheduled-python-jobs-linux-v.windows.md",
  slug: "scheduled-python-jobs-linux-vwindows",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"shopify-as-json.md": {
  id: "shopify-as-json.md",
  slug: "shopify-as-json",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"starting-a-garden.md": {
  id: "starting-a-garden.md",
  slug: "starting-a-garden",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"starting-at-ufv.md": {
  id: "starting-at-ufv.md",
  slug: "starting-at-ufv",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"tech-im-learning-this-summer-2019.md": {
  id: "tech-im-learning-this-summer-2019.md",
  slug: "tech-im-learning-this-summer-2019",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"telegraf-and-influx-for-server-monitoring.md": {
  id: "telegraf-and-influx-for-server-monitoring.md",
  slug: "telegraf-and-influx-for-server-monitoring",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"the-adventures-of-ash.md": {
  id: "the-adventures-of-ash.md",
  slug: "the-adventures-of-ash",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"the-end-of-fe-dev.md": {
  id: "the-end-of-fe-dev.md",
  slug: "the-end-of-fe-dev",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"the-incoming-internet-switch-up.md": {
  id: "the-incoming-internet-switch-up.md",
  slug: "the-incoming-internet-switch-up",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"tomorrow-s-legacy-software-today.md": {
  id: "tomorrow-s-legacy-software-today.md",
  slug: "tomorrow-s-legacy-software-today",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"tracking-popular-posts.md": {
  id: "tracking-popular-posts.md",
  slug: "tracking-popular-posts",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"web-dev-resources.md": {
  id: "web-dev-resources.md",
  slug: "web-dev-resources",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"websites-and-wes-anderson.md": {
  id: "websites-and-wes-anderson.md",
  slug: "websites-and-wes-anderson",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"whats-your-goto-web-stack.md": {
  id: "whats-your-goto-web-stack.md",
  slug: "whats-your-goto-web-stack",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"why-i-love-self-hosting.md": {
  id: "why-i-love-self-hosting.md",
  slug: "why-i-love-self-hosting",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
},

	};

	type ContentConfig = typeof import("../www/src/content/config");
}
