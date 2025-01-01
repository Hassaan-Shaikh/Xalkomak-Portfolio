import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicRichText, SliceComponentProps } from "@prismicio/react";
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
      className="container mx-auto flex w-full max-w-6xl flex-col items-center justify-start gap-3 px-4 py-16 text-white first:pt-10 md:px-6 md:py-20 lg:py-24"

      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className="showcase__heading mb-8 flex flex-col items-center justify-center text-balance text-center text-6xl font-medium md:flex-row md:text-7xl"
      >
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div
        className="grid gap-8 md:grid-cols-2 md:gap-10 grid-rows-subgrid">
        {
          slice.primary.carousel.map((item, index) => (
            <div key={index}
              className={clsx(
                item.galleryvariation === "Potrait" && "col-span-1 row-span-2 object-cover",
                item.galleryvariation === "Landscape" && "col-span-2 row-span-1 object-cover",
                item.galleryvariation === "Square" && "col-span-1 row-span-1 object-cover",
                item.galleryvariation === "BigSquare" && "col-span-2 row-span-2 object-cover"
                , "text-center")}>
              <PrismicNextImage
                      className="rounded-md"
                      quality={100}
                      field={item.galleryimage}
                      alt=""
                      fallback=""
                      sizes="(max-width: 512px) 50vw, 30vw" />
              <div
                className="mt-2">

                <PrismicRichText field={item.caption} />
              </div>
            </div>
          ))
        }
      </div>


    </section>
  );
};

export default Gallery;
