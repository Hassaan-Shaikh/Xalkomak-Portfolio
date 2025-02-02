import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <section
      className="max-w-full container mx-auto flex w-full flex-col items-center justify-start gap-3 px-2 py-8 text-white first:pt-10 md:px-4 md:py-4 lg:py-4"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="gallery__heading flex flex-col items-center justify-center text-balance text-center text-6xl font-medium md:flex-row md:text-7xl">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className="my-2 flex flex-col items-center text-balance text-center text-xl font-medium md:text-xl">
        <PrismicRichText field={slice.primary.body} />
      </div>
      <div className="grid md:grid-cols-4 gap-2 grid-cols-2">
        {slice.primary.carousel.map((item, index) => (
          <div
            key={index}
            className={clsx(
              // item.galleryvariation === "Potrait" && "col-span-1 row-span-2 object-cover",
              // item.galleryvariation === "Landscape" && "col-span-2 row-span-1 object-cover",
              // item.galleryvariation === "Square" && "col-span-1 row-span-1 object-cover",
              // item.galleryvariation === "BigSquare" && "col-span-2 row-span-2 object-cover"
              `col-span-${item.colspan} row-span-${item.rowspan}`,
              "text-center",
            )}
          >
            <PrismicNextImage
              className="rounded-md"
              quality={100}
              field={item.galleryimage}
              alt=""
              fallback=""
              sizes="(max-width: 128px) 50vw, 30vw"
            />
            <div className="mx-4 my-1 font-thin text-xs md:text-base">
              <PrismicRichText field={item.caption} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
