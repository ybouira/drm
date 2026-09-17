import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = "https://framerusercontent.com/images";
const OUT_DIR = path.resolve(
  process.cwd(),
  "public/sites/first-rose-853260-framer-app-21051feb/shared/images",
);

const IMAGES = [
  "YIpQuCmGqK8Rk3qcQ5wBJE9Kmw.webp",
  "aAaO0SNHI6KFbq4woACofUpScI.webp",
  "sbuScKwVnN3N6MeKZoBZvIQXNg.webp",
  "KuK5S9ttna0kIbm6RE4jCuqMGRg.webp",
  "t39pd8W8HjcaFo60shxNj04BafM.webp",
  "TVm5TqB8ZfUrryQF17eYym9PdI.webp",
  "zszDJs4t20KDd2Yhzzt9XYTF0.webp",
  "DndFfqueoQyufviaWPORg4Y10pg.webp",
  "kzoqCssl66YuZIpzxEq3JrwGYec.webp",
  "kfJ3Afnbu7MDM23gfqTEdEXb4wE.webp",
  "fUYvTkLXEB3POTIQF9rQ6ofIu2g.webp",
  "EjURn1ncA5ogB6ogvh2kSzrfKM0.webp",
  "NnI8eZIQWnVfJqzfA5cXZcl43A.webp",
  "KV7wZXrvUFv3TgxBmRm7TxOeaM4.webp",
  "K4yxaq4uvgHvwhVor2ueAAxLDY.webp",
  "o4MQIcCZBEDnB0zOc5GUPwXKa8s.webp",
  "Rumxdvcszr1fUl5tFw6lsW5Khag.webp",
  "SGuFxtmWFRwjWEZszLuJxB0Rk.webp",
  "kHw1yfkeQMvfZMIb05hMx22yMo.webp",
];

async function downloadOne(name) {
  const url = `${BASE}/${name}`;
  const dest = path.join(OUT_DIR, name);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED ${res.status} ${url}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`OK ${name} (${buf.length} bytes)`);
}

async function run() {
  await mkdir(OUT_DIR, { recursive: true });
  for (let i = 0; i < IMAGES.length; i += 4) {
    await Promise.all(IMAGES.slice(i, i + 4).map(downloadOne));
  }
}

run();
