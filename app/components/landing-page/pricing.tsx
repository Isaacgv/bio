import { TRIAL_DAYS } from "@/app/lib/config";
import Button from "../ui/button";

export default function Pricing() {
  return (
    <div className="my-[150px] flex flex-col items-center gap-14">
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-4xl font-bold text-white">  
            An accessible value for everyone
        </h3>
        <p className="text-content-body text-xl text-center">
            Join the community of professional breeders who are already raising
          sua <br />
          online presence. Test for free by {" "}
          <strong className="text-accent-pink">{TRIAL_DAYS} days</strong>, without
          commitment!
        </p>
      </div>
      <div className="flex items-end gap-9">
        <div className="w-[360px] p-8 flex flex-col gap-7 rounded-2xl border border-[#1E1E1E]">
          <div className="flex flex-col">
            <span className="text-white font-bold text-2xl">Month</span>
            <span className="text-content-body">Just</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-[48px]">US$ 9,90</span>
            <span className="text-content-headline text-2xl">/month</span>
          </div>
          <Button variant="secondary">To sign</Button>
        </div>
        <div className="flex flex-col w-[360px]">
          <div className="flex justify-center items-center rounded-t-2xl p-2 w-[360px] bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)]">
            <span className="uppercase text-xs font-bold">Recommended</span>
          </div>
          <div className="p-[1.6px] bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)] rounded-b-2xl">
            <div className="w-full bg-background-secondary p-8 flex flex-col gap-7 rounded-b-2xl">
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">Lifetime</span>
                <span className="text-content-body">Save with</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-white font-bold text-[48px]">
                  US$ 59,90
                </span>
              </div>
              <Button variant="secondary">To sign</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}