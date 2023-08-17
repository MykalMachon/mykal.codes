declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;
	export type CollectionEntry<C extends keyof AnyEntryMap> = Flatten<AnyEntryMap[C]>;

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

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

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"posts": {
"2022-2023.md": {
	id: "2022-2023.md";
  slug: "2022-2023";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"aeropress-latte.md": {
	id: "aeropress-latte.md";
  slug: "aeropress-latte";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"always-take-screenshots.md": {
	id: "always-take-screenshots.md";
  slug: "always-take-screenshots";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"aoc-2022-solution-for-day-1.md": {
	id: "aoc-2022-solution-for-day-1.md";
  slug: "aoc-2022-solution-for-day-1";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"aoc-2022-solution-for-day-2.md": {
	id: "aoc-2022-solution-for-day-2.md";
  slug: "aoc-2022-solution-for-day-2";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"aoc-2022-solution-for-day-3.md": {
	id: "aoc-2022-solution-for-day-3.md";
  slug: "aoc-2022-solution-for-day-3";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"aoc-2022-solution-for-day-4.md": {
	id: "aoc-2022-solution-for-day-4.md";
  slug: "aoc-2022-solution-for-day-4";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"aoc-2022-solution-for-day-5-1.md": {
	id: "aoc-2022-solution-for-day-5-1.md";
  slug: "aoc-2022-solution-for-day-5-1";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"aoc-2022-solution-for-day-5.md": {
	id: "aoc-2022-solution-for-day-5.md";
  slug: "aoc-2022-solution-for-day-5";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"autosave-forms.md": {
	id: "autosave-forms.md";
  slug: "autosave-forms";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"blog-to-mastodon-automation.md": {
	id: "blog-to-mastodon-automation.md";
  slug: "blog-to-mastodon-automation";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"braving-the-snow-for-bagels.md": {
	id: "braving-the-snow-for-bagels.md";
  slug: "braving-the-snow-for-bagels";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"cabin-on-an-island.md": {
	id: "cabin-on-an-island.md";
  slug: "cabin-on-an-island";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"cauliflower-fried-rice-wraps.md": {
	id: "cauliflower-fried-rice-wraps.md";
  slug: "cauliflower-fried-rice-wraps";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"coffee-setup.md": {
	id: "coffee-setup.md";
  slug: "coffee-setup";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"containers-and-the-enterprise-vendor-feedback-loop.md": {
	id: "containers-and-the-enterprise-vendor-feedback-loop.md";
  slug: "containers-and-the-enterprise-vendor-feedback-loop";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"csr-generation-scriptt.md": {
	id: "csr-generation-scriptt.md";
  slug: "csr-generation-scriptt";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"digital-gardens.md": {
	id: "digital-gardens.md";
  slug: "digital-gardens";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"docker-rocks.md": {
	id: "docker-rocks.md";
  slug: "docker-rocks";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"erosion-of-ownership.md": {
	id: "erosion-of-ownership.md";
  slug: "erosion-of-ownership";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"every-company-is-a-tech-company.md": {
	id: "every-company-is-a-tech-company.md";
  slug: "every-company-is-a-tech-company";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"flipnote-hatena.md": {
	id: "flipnote-hatena.md";
  slug: "flipnote-hatena";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"good-cappuccinos.md": {
	id: "good-cappuccinos.md";
  slug: "good-cappuccinos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"google-collab.md": {
	id: "google-collab.md";
  slug: "google-collab";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"hidden-content-in-an-unpublished-shopify-theme.md": {
	id: "hidden-content-in-an-unpublished-shopify-theme.md";
  slug: "hidden-content-in-an-unpublished-shopify-theme";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"hot-dog-renaissance.md": {
	id: "hot-dog-renaissance.md";
  slug: "hot-dog-renaissance";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"improving-anchor-links.md": {
	id: "improving-anchor-links.md";
  slug: "improving-anchor-links";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"kurzgesagt.md": {
	id: "kurzgesagt.md";
  slug: "kurzgesagt";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"markdown-images-are-an-antipattern.md": {
	id: "markdown-images-are-an-antipattern.md";
  slug: "markdown-images-are-an-antipattern";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"mit-sans-elon.md": {
	id: "mit-sans-elon.md";
  slug: "mit-sans-elon";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"mykal-social.md": {
	id: "mykal-social.md";
  slug: "mykal-social";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"new-years-2023.md": {
	id: "new-years-2023.md";
  slug: "new-years-2023";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"npkill.md": {
	id: "npkill.md";
  slug: "npkill";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"on-hydroponic-gardens.md": {
	id: "on-hydroponic-gardens.md";
  slug: "on-hydroponic-gardens";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"on-the-steam-deck.md": {
	id: "on-the-steam-deck.md";
  slug: "on-the-steam-deck";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"optimizing-docker-containers.md": {
	id: "optimizing-docker-containers.md";
  slug: "optimizing-docker-containers";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"peanut-bowl-recipe.md": {
	id: "peanut-bowl-recipe.md";
  slug: "peanut-bowl-recipe";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pioneers-settlers-and-city-planners.md": {
	id: "pioneers-settlers-and-city-planners.md";
  slug: "pioneers-settlers-and-city-planners";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"preparing-for-battlesnake.md": {
	id: "preparing-for-battlesnake.md";
  slug: "preparing-for-battlesnake";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"putting-ai-back-in-the-bag.md": {
	id: "putting-ai-back-in-the-bag.md";
  slug: "putting-ai-back-in-the-bag";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"recovering-from-failed-nextcloud-updates.md": {
	id: "recovering-from-failed-nextcloud-updates.md";
  slug: "recovering-from-failed-nextcloud-updates";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"remembering-ash.md": {
	id: "remembering-ash.md";
  slug: "remembering-ash";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"scaling-down.md": {
	id: "scaling-down.md";
  slug: "scaling-down";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"scheduled-python-jobs-linux-v.windows.md": {
	id: "scheduled-python-jobs-linux-v.windows.md";
  slug: "scheduled-python-jobs-linux-vwindows";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"shopify-as-json.md": {
	id: "shopify-as-json.md";
  slug: "shopify-as-json";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"starting-a-garden.md": {
	id: "starting-a-garden.md";
  slug: "starting-a-garden";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"starting-at-ufv.md": {
	id: "starting-at-ufv.md";
  slug: "starting-at-ufv";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"systems-analyst-II-at-UFV.md": {
	id: "systems-analyst-II-at-UFV.md";
  slug: "systems-analyst-ii-at-ufv";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"tech-im-learning-this-summer-2019.md": {
	id: "tech-im-learning-this-summer-2019.md";
  slug: "tech-im-learning-this-summer-2019";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"telegraf-and-influx-for-server-monitoring.md": {
	id: "telegraf-and-influx-for-server-monitoring.md";
  slug: "telegraf-and-influx-for-server-monitoring";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-adventures-of-ash.md": {
	id: "the-adventures-of-ash.md";
  slug: "the-adventures-of-ash";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-end-of-fe-dev.md": {
	id: "the-end-of-fe-dev.md";
  slug: "the-end-of-fe-dev";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-incoming-internet-switch-up.md": {
	id: "the-incoming-internet-switch-up.md";
  slug: "the-incoming-internet-switch-up";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"tomorrow-s-legacy-software-today.md": {
	id: "tomorrow-s-legacy-software-today.md";
  slug: "tomorrow-s-legacy-software-today";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"tracking-popular-posts.md": {
	id: "tracking-popular-posts.md";
  slug: "tracking-popular-posts";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"web-dev-resources.md": {
	id: "web-dev-resources.md";
  slug: "web-dev-resources";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"websites-and-wes-anderson.md": {
	id: "websites-and-wes-anderson.md";
  slug: "websites-and-wes-anderson";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"whats-your-goto-web-stack.md": {
	id: "whats-your-goto-web-stack.md";
  slug: "whats-your-goto-web-stack";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"why-i-love-self-hosting.md": {
	id: "why-i-love-self-hosting.md";
  slug: "why-i-love-self-hosting";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../www/src/content/config");
}
