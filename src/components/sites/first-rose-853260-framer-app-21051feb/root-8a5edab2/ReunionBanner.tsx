import Image from "next/image";
import { LocationPinIcon } from "../shared/icons";

export function ReunionBanner() {
  return (
    <section className="flex flex-col items-center justify-center gap-[10px] bg-white px-[20px] py-[60px] min-[810px]:px-[40px] min-[1440px]:px-[100px]">
      <div className="relative flex min-h-[420px] w-full max-w-[1440px] flex-col items-start justify-end gap-[10px] rounded-[10px] p-[24px] min-[810px]:min-h-[529px] min-[810px]:p-[40px] min-[1440px]:h-[529px]">
        <div className="absolute inset-0">
          <Image
            src="/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/cHX3vgQDeka0MHfC6PQMQijswWI.png"
            alt=""
            width={1440}
            height={529}
            className="h-full w-full rounded-[10px] object-cover"
            priority={false}
          />
        </div>

        <div className="relative flex w-full max-w-[500px] flex-col gap-[24px] min-[810px]:gap-[40px]">
          <div className="inline-flex h-[26px] w-fit flex-row items-center gap-[5px] rounded-[100px] bg-[#7138F2] px-[12px] py-[6px]">
            <LocationPinIcon width={12} height={14} />
            <span className="text-[10px] leading-[12px] font-bold text-white">
              Drommer - Chiasso, Switzerland
            </span>
          </div>

          <p className="text-[28px] leading-[28px] font-normal text-white min-[810px]:text-[40px] min-[810px]:leading-[40px]">
            Spend a day with us at the next Drommer Reunion
          </p>

          <a
            href="https://schedule.fillout.com/t/uGGCRZmyGvus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[34px] w-fit items-center justify-center rounded-[5px] bg-white px-[20px] text-[14px] leading-[14px] font-semibold tracking-[-0.28px] text-black hover:bg-[#CCCCCC] transition-colors duration-200 ease-out"
          >
            Join us →
          </a>
        </div>
      </div>
    </section>
  );
}
