import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import ShowcaseClient from "./Animated";

type IconName = "snx" | "snapshots" | "dawg" | "misc";
type IconSize = number;

/**
 * Props for `Showcase`.
 */
export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

/**
 * Component for "Showcase" Slices.
 */
const Showcase = async ({ slice }: ShowcaseProps): Promise<JSX.Element> => {
  const client = createClient();

  const projectStudies = await Promise.all(
    slice.primary.cards.map(async (item) => {
      if (isFilled.contentRelationship(item.projectstudy)) {
        return await client.getByID<Content.ProjectStudiesDocument>(
          item.projectstudy.id,
        );
      }
    }),
  );

  return <ShowcaseClient projectStudies={projectStudies} slice={slice} />;
};

export default Showcase;
