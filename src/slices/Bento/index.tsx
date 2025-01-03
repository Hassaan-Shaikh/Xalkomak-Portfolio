"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Animated from "./Animated";

/**
 * Props for `Bento`.
 */
export type BentoProps = SliceComponentProps<Content.BentoSlice>;

/**
 * Component for "Bento" Slices.
 */
const Bento = ({ slice }: BentoProps): JSX.Element => {
  return (
    <section
      className="container mx-auto flex max-w-5xl flex-col items-center justify-start gap-3 py-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Animated slice={slice} />
    </section>
  );
};

export default Bento;
