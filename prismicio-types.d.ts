// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Contact → IconGroup*
 */
export interface ContactDocumentDataIcongroupItem {
  /**
   * Icon field in *Contact → IconGroup*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Reddit
   * - **API ID Path**: contact.icongroup[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<
    "Reddit" | "Github" | "Instagram" | "Twitter" | "Discord" | "Youtube",
    "filled"
  >;

  /**
   * Contact Link field in *Contact → IconGroup*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.icongroup[].contact_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  contact_link: prismic.LinkField;
}

/**
 * Content for Contact documents
 */
interface ContactDocumentData {
  /**
   * Heading field in *Contact*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Contact*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.body
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * IconGroup field in *Contact*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.icongroup[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  icongroup: prismic.GroupField<Simplify<ContactDocumentDataIcongroupItem>>;
}

/**
 * Contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ContactDocumentData>,
    "contact",
    Lang
  >;

/**
 * Item in *Navbar → Navbar*
 */
export interface NavbarDocumentDataNavbarItem {
  /**
   * Link field in *Navbar → Navbar*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.navbar[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Navbar → Navbar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.navbar[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Navbar documents
 */
interface NavbarDocumentData {
  /**
   * Site Title field in *Navbar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Navbar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Fallback OG Image field in *Navbar*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.fallback_og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fallback_og_image: prismic.ImageField<never>;

  /**
   * Navbar field in *Navbar*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.navbar[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navbar: prismic.GroupField<Simplify<NavbarDocumentDataNavbarItem>>;
}

/**
 * Navbar document from Prismic
 *
 * - **API ID**: `navbar`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavbarDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavbarDocumentData>,
    "navbar",
    Lang
  >;

type PageDocumentDataSlicesSlice = ShowcaseSlice | BentoSlice | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type ProjectStudiesDocumentDataSlicesSlice = ContentSlice;

/**
 * Content for Project Studies documents
 */
interface ProjectStudiesDocumentData {
  /**
   * Project field in *Project Studies*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: project_studies.project
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project: prismic.TitleField;

  /**
   * Description field in *Project Studies*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_studies.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * icon field in *Project Studies*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: snx
   * - **API ID Path**: project_studies.icon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"snx" | "snapshots" | "dawg" | "misc", "filled">;

  /**
   * image field in *Project Studies*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_studies.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Project Studies*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project_studies.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectStudiesDocumentDataSlicesSlice> /**
   * Meta Title field in *Project Studies*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project_studies.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Project Studies*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project_studies.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Project Studies*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_studies.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Project Studies document from Prismic
 *
 * - **API ID**: `project_studies`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectStudiesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectStudiesDocumentData>,
    "project_studies",
    Lang
  >;

export type AllDocumentTypes =
  | ContactDocument
  | NavbarDocument
  | PageDocument
  | ProjectStudiesDocument;

/**
 * Item in *Bento → Default → Primary → Card*
 */
export interface BentoSliceDefaultPrimaryCardItem {
  /**
   * Title field in *Bento → Default → Primary → Card*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.card[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Body field in *Bento → Default → Primary → Card*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.card[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * ImageA field in *Bento → Default → Primary → Card*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.card[].image_a
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_a: prismic.ImageField<never>;

  /**
   * ImageB field in *Bento → Default → Primary → Card*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.card[].image_b
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_b: prismic.ImageField<never>;

  /**
   * Wide field in *Bento → Default → Primary → Card*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: bento.default.primary.card[].wide
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  wide: prismic.BooleanField;

  /**
   * project_link field in *Bento → Default → Primary → Card*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.card[].project_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  project_link: prismic.LinkField;
}

/**
 * Primary content in *Bento → Default → Primary*
 */
export interface BentoSliceDefaultPrimary {
  /**
   * Heading field in *Bento → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *Bento → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Card field in *Bento → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.card[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  card: prismic.GroupField<Simplify<BentoSliceDefaultPrimaryCardItem>>;
}

/**
 * Default variation for Bento Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BentoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Bento*
 */
type BentoSliceVariation = BentoSliceDefault;

/**
 * Bento Shared Slice
 *
 * - **API ID**: `bento`
 * - **Description**: Bento
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoSlice = prismic.SharedSlice<"bento", BentoSliceVariation>;

/**
 * Primary content in *Content → Default → Primary*
 */
export interface ContentSliceDefaultPrimary {
  /**
   * Content field in *Content → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for Content Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContentSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Content*
 */
type ContentSliceVariation = ContentSliceDefault;

/**
 * Content Shared Slice
 *
 * - **API ID**: `content`
 * - **Description**: Content
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentSlice = prismic.SharedSlice<
  "content",
  ContentSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *Showcase → Default → Primary → Cards*
 */
export interface ShowcaseSliceDefaultPrimaryCardsItem {
  /**
   * ButtonLink field in *Showcase → Default → Primary → Cards*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.cards[].buttonlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonlink: prismic.LinkField;

  /**
   * isRight field in *Showcase → Default → Primary → Cards*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: showcase.default.primary.cards[].isright
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  isright: prismic.BooleanField;

  /**
   * ButtonText field in *Showcase → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.cards[].buttontext
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  buttontext: prismic.RichTextField;

  /**
   * Body field in *Showcase → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.cards[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Subheading field in *Showcase → Default → Primary → Cards*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.cards[].subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField;

  /**
   * Icon field in *Showcase → Default → Primary → Cards*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: snx
   * - **API ID Path**: showcase.default.primary.cards[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"snx" | "dawg" | "misc", "filled">;

  /**
   * Image field in *Showcase → Default → Primary → Cards*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.cards[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * ProjectStudy field in *Showcase → Default → Primary → Cards*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.cards[].projectstudy
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  projectstudy: prismic.ContentRelationshipField<"project_studies">;

  /**
   * isLinked field in *Showcase → Default → Primary → Cards*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: showcase.default.primary.cards[].islinked
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  islinked: prismic.BooleanField;
}

/**
 * Primary content in *Showcase → Default → Primary*
 */
export interface ShowcaseSliceDefaultPrimary {
  /**
   * Heading field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Cards field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.cards[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cards: prismic.GroupField<Simplify<ShowcaseSliceDefaultPrimaryCardsItem>>;
}

/**
 * Default variation for Showcase Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ShowcaseSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Showcase*
 */
type ShowcaseSliceVariation = ShowcaseSliceDefault;

/**
 * Showcase Shared Slice
 *
 * - **API ID**: `showcase`
 * - **Description**: Showcase
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSlice = prismic.SharedSlice<
  "showcase",
  ShowcaseSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ContactDocument,
      ContactDocumentData,
      ContactDocumentDataIcongroupItem,
      NavbarDocument,
      NavbarDocumentData,
      NavbarDocumentDataNavbarItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ProjectStudiesDocument,
      ProjectStudiesDocumentData,
      ProjectStudiesDocumentDataSlicesSlice,
      AllDocumentTypes,
      BentoSlice,
      BentoSliceDefaultPrimaryCardItem,
      BentoSliceDefaultPrimary,
      BentoSliceVariation,
      BentoSliceDefault,
      ContentSlice,
      ContentSliceDefaultPrimary,
      ContentSliceVariation,
      ContentSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ShowcaseSlice,
      ShowcaseSliceDefaultPrimaryCardsItem,
      ShowcaseSliceDefaultPrimary,
      ShowcaseSliceVariation,
      ShowcaseSliceDefault,
    };
  }
}
