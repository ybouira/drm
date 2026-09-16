import Image from "next/image";
import Link from "next/link";

export function ReunionBanner() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 text-white md:px-10">
      <div className="absolute inset-0">
        <Image
          src="/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/cHX3vgQDeka0MHfC6PQMQijswWI.png"
          alt="Drommer Reunion"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      </div>
      <div className="relative mx-auto max-w-[1440px] text-center">
        <p className="text-sm text-white/60">Drommer - Chiasso, Switzerland</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold md:text-4xl">
          Spend a day with us at the next Drommer Reunion
        </h2>
        <Link
          href="#apply"
          className="mt-8 inline-block rounded-[5px] bg-white px-7 py-3 text-sm font-semibold text-black hover:opacity-90"
        >
          Join us →
        </Link>
      </div>
    </section>
  );
}
