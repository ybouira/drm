"use client";

import Image from "next/image";

import { useI18n } from "@/i18n/provider";

import { Footer } from "../root-8a5edab2/Footer";
import { FinalCta } from "../root-8a5edab2/FinalCta";
import { MarqueeStrip } from "../root-8a5edab2/MarqueeStrip";
import { Navbar } from "../root-8a5edab2/Navbar";
import { LinkedInSmallIcon } from "../shared/icons";
import { HqCarousel } from "./HqCarousel";

const SHARED = "/sites/first-rose-853260-framer-app-21051feb/shared/images";

/**
 * Each founder card carries the startup they are building, as an 82x28 logo
 * above the name row. Youssef has no logo on the live site.
 * Dot colours: Launched #00FF4C, Validation #F28838.
 */
const FOUNDERS = [
  {
    name: "Gianmarco",
    status: "Launched",
    href: "https://www.linkedin.com/in/gianmarco-pompizii-63674b235/",
    photo: `${SHARED}/TVm5TqB8ZfUrryQF17eYym9PdI.webp`,
    logo: `${SHARED}/aWxOXQ9PiPsYwsifpLTqpAEhRAE.webp`,
  },
  {
    name: "Aicha",
    status: "Validation",
    href: "http://linkedin.com/in/aicha-bouira/",
    photo: `${SHARED}/aAaO0SNHI6KFbq4woACofUpScI.webp`,
    logo: `${SHARED}/kT8huskO1CGbgEipNqxue4wdQ.png`,
  },
  {
    name: "Pietro",
    status: "Validation",
    href: "https://www.linkedin.com/in/pietro-rebucci-a08b75227/",
    photo: `${SHARED}/KuK5S9ttna0kIbm6RE4jCuqMGRg.webp`,
    logo: `${SHARED}/dRFWThY0BX0AqgVC4AO5yvkTNxQ.webp`,
  },
  {
    name: "Youssef",
    status: "Validation",
    href: "https://www.linkedin.com/in/bouira/",
    photo: `${SHARED}/kHw1yfkeQMvfZMIb05hMx22yMo.webp`,
    logo: null,
  },
] as const;

// `float` is the Framer loop duration assigned to each photo on the live page.
const EXPERIENCE_LEFT = [
  { src: `${SHARED}/NnI8eZIQWnVfJqzfA5cXZcl43A.webp`, className: "left-[64px] top-0", float: "drommer-float-1400" },
  { src: `${SHARED}/KV7wZXrvUFv3TgxBmRm7TxOeaM4.webp`, className: "left-[18px] top-[128px]", float: "drommer-float-1000" },
  { src: `${SHARED}/K4yxaq4uvgHvwhVor2ueAAxLDY.webp`, className: "left-[64px] top-[256px]", float: "drommer-float-1200" },
] as const;

const EXPERIENCE_RIGHT = [
  { src: `${SHARED}/o4MQIcCZBEDnB0zOc5GUPwXKa8s.webp`, className: "right-[63px] top-0", float: "drommer-float-1200" },
  { src: `${SHARED}/Rumxdvcszr1fUl5tFw6lsW5Khag.webp`, className: "right-[17px] top-[128px]", float: "drommer-float-1400" },
  { src: `${SHARED}/SGuFxtmWFRwjWEZszLuJxB0Rk.webp`, className: "right-[63px] top-[256px]", float: "drommer-float-1000" },
] as const;

/**
 * Every <section> on this page already carries the page gutter, so the rail
 * must not add it a second time — doing so squeezed the 1440 content box to
 * 1240 and pulled the founder cards 68px closer together than the original.
 */
const RAIL = "mx-auto w-full max-w-[1440px]";

const DARK_LABEL =
  "text-[12px] font-bold leading-[14.4px] tracking-[2.4px] text-white";
const LIGHT_LABEL =
  "text-[12px] font-bold leading-[14.4px] tracking-[2.4px] text-[#7138f2]";

export function AboutUsPage() {
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <main>
        <section className="flex flex-col items-center bg-[#0d0d0f] px-5 pb-[60px] pt-[120px] min-[810px]:px-10 min-[1440px]:px-[100px]">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[10px] text-center">
            <p className={DARK_LABEL}>{t.about.eyebrow}</p>
            <h1 className="text-[36px] font-bold leading-9 text-white min-[810px]:text-[50px] min-[810px]:leading-[50px]">
              {t.about.title}
            </h1>
            <p className="max-w-[645px] text-[18px] font-normal leading-[21.6px] text-white">
              {t.about.subtitle}
            </p>
          </div>
        </section>

        <section className="bg-[#0d0d0f] px-5 pb-[60px] pt-[60px] min-[810px]:px-10 min-[1440px]:px-[100px]">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-[50px] min-[810px]:flex-row min-[810px]:items-start">
            <div className="flex w-full flex-col gap-[30px] min-[810px]:w-[650px] min-[810px]:shrink-0">
              <p className={DARK_LABEL}>{t.about.originEyebrow}</p>
              <h2 className="text-[32px] font-bold leading-9 text-white min-[810px]:text-[40px] min-[810px]:leading-[48px]">
                {t.about.originTitle}
              </h2>
              <div className="flex flex-col gap-4 text-[18px] font-normal leading-[21.6px] text-white">
                <p>{t.about.originP1}</p>
                <p>{t.about.originP2}</p>
              </div>
            </div>
            <div className="relative h-[347px] w-full overflow-hidden rounded-[10px] min-[810px]:w-[525px] min-[810px]:shrink-0">
              <Image
                src={`${SHARED}/zszDJs4t20KDd2Yhzzt9XYTF0.webp`}
                alt=""
                fill
                className="object-cover"
                sizes="525px"
              />
            </div>
          </div>
        </section>

        <MarqueeStrip />

        <section className="bg-[linear-gradient(rgb(13,13,15)_0%,rgb(65,32,140)_54.8077%)] px-5 py-[100px] min-[810px]:px-10 min-[1440px]:px-[100px]">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-[50px] min-[810px]:flex-row min-[810px]:items-start">
            <div className="relative h-[347px] w-full overflow-hidden rounded-[10px] min-[810px]:w-[525px] min-[810px]:shrink-0">
              <Image
                src={`${SHARED}/DndFfqueoQyufviaWPORg4Y10pg.webp`}
                alt=""
                fill
                className="object-cover"
                sizes="525px"
              />
            </div>
            <div className="flex w-full flex-col gap-[30px] min-[810px]:w-[650px] min-[810px]:shrink-0">
              <p className={DARK_LABEL}>{t.about.visionEyebrow}</p>
              <h2 className="text-[32px] font-bold leading-9 text-white min-[810px]:text-[40px] min-[810px]:leading-[48px]">
                {t.about.visionTitle}
              </h2>
              <div className="flex flex-col gap-4 text-[18px] font-normal leading-[21.6px] text-white">
                <p>{t.about.visionP1}</p>
                <p>{t.about.visionP2}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f8f8] px-5 py-[100px] min-[810px]:px-10 min-[1440px]:px-[100px]">
          <div className={`${RAIL}`}>
            <div className="relative mx-auto h-[767px] w-full max-w-[1225px]">
              <div className="flex flex-col items-center gap-[10px] text-center">
                <p className={LIGHT_LABEL}>{t.about.hqEyebrow}</p>
                <h2 className="text-[32px] font-bold leading-9 text-[#0d0d0f] min-[810px]:text-[40px] min-[810px]:leading-[48px]">
                  {t.about.hqTitle}
                </h2>
                <p className="max-w-[728px] text-[18px] font-normal leading-[21.6px] text-[#505050]">
                  {t.about.hqBody}
                </p>
              </div>
              {/* The live section is a rotating media ring, not fixed photos. */}
              <div className="absolute inset-x-0 bottom-0 top-[180px]">
                <HqCarousel />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-[100px] min-[810px]:px-10 min-[1440px]:px-[100px]">
          <div className={RAIL}>
            <div className="relative mx-auto min-h-[364px] w-full max-w-[1225px]">
              {EXPERIENCE_LEFT.map((photo) => (
                <div
                  key={photo.src}
                  className={`drommer-float ${photo.float} absolute h-[108px] w-[237px] max-[809px]:hidden ${photo.className}`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[10px] transition-[transform,box-shadow] duration-[400ms] ease-out hover:scale-105 hover:shadow-[0_0_10px_2px_rgba(112,56,242,0.5)]">
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="237px"
                    />
                  </div>
                </div>
              ))}
              <div className="relative z-[1] mx-auto flex max-w-[570px] flex-col items-center gap-[15px] text-center">
                <p className={LIGHT_LABEL}>{t.about.experienceEyebrow}</p>
                <h2 className="text-[32px] font-bold leading-9 text-[#0d0d0f] min-[810px]:text-[40px] min-[810px]:leading-[48px]">
                  {t.about.experienceTitle}
                </h2>
                <p className="text-[18px] font-normal leading-[21.6px] text-[#505050]">
                  {t.about.experienceBody}
                </p>
              </div>
              {EXPERIENCE_RIGHT.map((photo) => (
                <div
                  key={photo.src}
                  className={`drommer-float ${photo.float} absolute h-[108px] w-[237px] max-[809px]:hidden ${photo.className}`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[10px] transition-[transform,box-shadow] duration-[400ms] ease-out hover:scale-105 hover:shadow-[0_0_10px_2px_rgba(112,56,242,0.5)]">
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="237px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(rgb(65,32,140)_45.1923%,rgb(13,13,15)_100%)] px-5 py-[100px] min-[810px]:px-10 min-[1440px]:px-[100px]">
          <div className={`${RAIL} flex flex-col gap-[60px]`}>
            <div className="mx-auto flex max-w-[720px] flex-col items-center gap-[10px] text-center">
              <p className={DARK_LABEL}>{t.about.foundersEyebrow}</p>
              <h2 className="text-[32px] font-bold leading-9 text-white min-[810px]:text-[40px] min-[810px]:leading-[48px]">
                {t.about.foundersTitle}
              </h2>
              <p className="text-[18px] font-normal leading-[21.6px] text-white">
                {t.about.foundersBody}
              </p>
            </div>
            {/* At 1440 the live row is a flex row with space-between: four
                300px cards in a 1440 box give exactly 80px between them. */}
            <div className="grid grid-cols-1 gap-5 min-[810px]:grid-cols-2 min-[1440px]:flex min-[1440px]:flex-row min-[1440px]:items-start min-[1440px]:justify-between min-[1440px]:gap-0">
              {FOUNDERS.map((founder) => (
                <a
                  key={founder.name}
                  href={founder.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex h-[450px] flex-col items-end justify-end gap-[10px] overflow-hidden rounded-[10px] p-[20px] min-[1440px]:w-[300px]"
                >
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="rounded-[10px] object-cover"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 rounded-[10px] bg-[linear-gradient(rgba(255,255,255,0)_0%,rgba(0,0,0,0.2)_78.3506%,rgba(0,0,0,0.3)_89.0221%,rgba(0,0,0,0.6)_100%)]" />

                  {founder.logo ? (
                    <Image
                      src={founder.logo}
                      alt=""
                      width={82}
                      height={28}
                      sizes="82px"
                      className="relative z-[1] h-[28px] w-[82px] object-contain"
                    />
                  ) : null}

                  <div className="relative z-[1] flex w-full flex-row items-start justify-between">
                    <span className="flex flex-row items-center gap-[10px]">
                      <span className="text-[16px] font-bold leading-[19.2px] text-white">
                        {founder.name}
                      </span>
                      <LinkedInSmallIcon />
                    </span>
                    <span className="flex flex-row items-center justify-center gap-[5px] rounded-[100px] bg-[rgba(121,121,121,0.15)] px-[10px] py-[5px] shadow-[0_0_2px_0_rgba(0,0,0,0.5)]">
                      <span
                        className={`h-[6px] w-[6px] shrink-0 rounded-[100px] ${
                          founder.status === "Launched"
                            ? "bg-[#00FF4C]"
                            : "bg-[#F28838]"
                        }`}
                      />
                      <span className="whitespace-nowrap text-[10px] font-normal leading-[10px] text-white">
                        {founder.status === "Launched"
                          ? t.common.launched
                          : t.common.validation}
                      </span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FinalCta />
      <Footer />
    </>
  );
}
