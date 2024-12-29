import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Animated from "./Animated";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Animated slice={slice} />
    </section>
  );
};

export default Hero;
