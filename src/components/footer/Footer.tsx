import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { PiPencilLineBold } from "react-icons/pi";
import Animated from "./Animated";

export default async function Footer() {
  const client = createClient();
  const contact = await client.getSingle("contact");
  return (
    <>
      <footer className="container relative mx-auto mb-12 flex w-full max-w-6xl flex-col items-center justify-start gap-3 px-4 py-16 text-white first:pt-10 md:px-6">
        <div
          id="contact"
          className="mb-4 flex flex-col items-center justify-center text-balance text-center text-6xl font-medium md:mb-0 md:flex-row md:text-7xl"
        >
          <PiPencilLineBold className="mb-4 md:mb-0 md:mr-4" />
          <PrismicRichText field={contact.data.heading} />
        </div>
        <Animated contact={contact} />
      </footer>
    </>
  );
}