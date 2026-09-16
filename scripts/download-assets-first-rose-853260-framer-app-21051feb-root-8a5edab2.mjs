import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = "https://framerusercontent.com";
const OUT_DIR = path.resolve(
  process.cwd(),
  "public/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images"
);

const IMAGES = [
  "/images/aCFWfbQ5WMtWDMM5k6ol6VAg.webp", // monthly gatherings photo
  "/images/CO11nKnejqX7SCom5uOQROjyAY.webp", // founder fridays photo
  "/images/r6gBWsDGWm9WrboOehqPT3937M.webp", // venture building photo
  "/images/FzybitHD0VlARAwp0jtxgsrzKg.webp", // founder network photo
  "/images/Ki2ol2ETbANpiUuw2Sb8TDgnGdQ.png", // mission section image
  "/images/B1VEekKzR9KhSWNlSPWgytTjbSY.webp", // case study startup 1 bg
  "/images/XbHlR61qEHpYzyb07CuA6Yz7rM.webp", // case study startup 1 logo/mark
  "/images/EZnEUxq21CuRRiCWmG8QqlK7Xoo.webp", // case study startup 2 bg
  "/images/dRFWThY0BX0AqgVC4AO5yvkTNxQ.webp", // case study startup 2 mark
  "/images/AMNFRegqg923K5mIFUmvbSjNV4.webp", // case study startup 3 bg
  "/images/aWxOXQ9PiPsYwsifpLTqpAEhRAE.webp", // case study startup 3 mark
  "/images/evFt8dWV1fAgwyCIUy9TIChg.png", // built-with logo 1
  "/images/Z0PfjoMyRrLcr0cBNthXtaeJVc.png", // built-with logo 2
  "/images/iuLZKqKR3zA2zCPleN6hBxkDS2I.png", // built-with logo 3
  "/images/cKfXcRIQyWSu88488VFPgx9Z6lE.png", // built-with logo 4
  "/images/Qcupcm3xzW4DEddi1G5Wp9oJvbY.png", // built-with logo 5
  "/images/jTvdO3C8DYBwDzKPwUlvfyXIM.png", // built-with logo 6
  "/images/ndP5UuTVxgvYNieoa4TanR2sk.png", // built-with logo 7
  "/images/4qYjIqqmRFZbKj43XEJ4oF3RPiQ.webp", // built-with logo 8
  "/images/LQBHYIlIjbvd5DSWiR2hDaHmc.webp", // built-with logo 9
  "/images/cHX3vgQDeka0MHfC6PQMQijswWI.png", // reunion photo
  "/images/vjgh5nFn3fu3gvShiInOR0ILTs.png", // venture builder studio image
  "/images/Dx3NDQRbBFXMEHBi12YiSiAcoOo.png", // small icon/favicon-like image
];

async function downloadOne(p) {
  const url = BASE + p;
  const dest = path.join(OUT_DIR, path.basename(p));
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED ${res.status} ${url}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`OK ${p} (${buf.length} bytes)`);
}

async function run() {
  await mkdir(OUT_DIR, { recursive: true });
  const batchSize = 4;
  for (let i = 0; i < IMAGES.length; i += batchSize) {
    const batch = IMAGES.slice(i, i + batchSize);
    await Promise.all(batch.map(downloadOne));
  }
}

run();
