import Header from "@/components/navbar/Header";
import { createClient } from "@/prismicio";

export default async function Navbar() {
  const client = createClient();
  const settings = await client.getSingle("navbar");
  return (
    <>
      <nav>
        <Header settings={settings} />
      </nav>
    </>
  );
}
