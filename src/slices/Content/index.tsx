import { Content as ContentType } from "@prismicio/client"; // Alias the Content type import
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `Content`.
 */
export type ContentProps = SliceComponentProps<ContentType.ContentSlice>;

/**
 * Component for "Content" Slices.
 */
const Content = ({ slice }: ContentProps): JSX.Element => {
  return (
    <>
      <div className="prose prose-lg prose-invert mb-4 flex flex-col gap-2 text-center">
        <PrismicRichText field={slice.primary.title} />
      </div>
      {slice.primary.content.map((item, index) => (
        <div key={index}>
          <div className="text-center text-xs md:text-base">
            <PrismicNextImage field={item.image} className="rounded-md mb-2" />
            <PrismicRichText field={item.imagecaption} />
          </div>
          <div className="mx-auto my-3 text-left prose prose-lg prose-invert">
            <PrismicRichText field={item.content} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Content;
