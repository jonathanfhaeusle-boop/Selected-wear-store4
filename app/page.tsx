import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>TEST</h1>

      <Image
        src="/images/selectedwear-logo.jpg"
        alt="Logo"
        width={300}
        height={300}
      />

      <Image
        src="/images/hoodie-techpack.jpg"
        alt="Hoodie"
        width={500}
        height={500}
      />
    </main>
  );
}
