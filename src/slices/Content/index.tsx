import { Content as ContentType } from "@prismicio/client"; // Alias the Content type import
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Content`.
 */
export type ContentProps = SliceComponentProps<ContentType.ContentSlice>;

/**
 * Component for "Content" Slices.
 */
const Content = ({ slice }: ContentProps): JSX.Element => {
  return (
    <div className="prose prose-lg prose-invert">
      <PrismicRichText field={slice.primary.content} />
    </div>
  );
};

export default Content;
