import Image from "next/image";

const ASSET_BASE =
  "/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images";

const LOGOS = [
  `${ASSET_BASE}/evFt8dWV1fAgwyCIUy9TIChg.png`,
  `${ASSET_BASE}/Z0PfjoMyRrLcr0cBNthXtaeJVc.png`,
  `${ASSET_BASE}/iuLZKqKR3zA2zCPleN6hBxkDS2I.png`,
  `${ASSET_BASE}/cKfXcRIQyWSu88488VFPgx9Z6lE.png`,
  `${ASSET_BASE}/Qcupcm3xzW4DEddi1G5Wp9oJvbY.png`,
  `${ASSET_BASE}/jTvdO3C8DYBwDzKPwUlvfyXIM.png`,
  `${ASSET_BASE}/ndP5UuTVxgvYNieoa4TanR2sk.png`,
  `${ASSET_BASE}/4qYjIqqmRFZbKj43XEJ4oF3RPiQ.webp`,
  `${ASSET_BASE}/LQBHYIlIjbvd5DSWiR2hDaHmc.webp`,
];

export function BuiltWith() {
  return (
    <section className="bg-neutral-50 px-6 py-24 text-black md:px-10">
      <div className="mx-auto max-w-[1440px] text-center">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-drommer-purple">
          Built with Drommer
        </p>
        <h2 className="mx-auto mt-3 max-w-xl text-4xl font-extrabold md:text-5xl">
          Projects we&apos;ve been part of
        </h2>

        <div className="mt-14 grid grid-cols-3 items-center gap-8 md:grid-cols-5">
          {LOGOS.map((logo) => (
            <div key={logo} className="relative mx-auto h-8 w-24 opacity-60 grayscale transition-opacity hover:opacity-100 hover:grayscale-0">
              <Image src={logo} alt="Partner logo" fill sizes="120px" className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
