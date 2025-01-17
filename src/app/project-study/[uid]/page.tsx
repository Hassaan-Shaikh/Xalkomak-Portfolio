import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, PrismicText, SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { IconDisplay } from "@/components/Icon";

type IconName = "snx" | "snapshots" | "dawg" | "misc";
type IconSize = 64;

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client
    .getByUID("project_studies", uid)
    .catch(() => notFound());

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-4 text-white  md:px-6 md:py-4">
      
      <div className=" max-w-3xl">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client
    .getByUID("project_studies", uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("project_studies");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
