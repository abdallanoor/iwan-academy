"use client";
import { getPricingData } from "@/constants";
import { cn } from "@/lib/utils";
import { CalendarCheck, Clock4, NotepadText } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const ICONS = {
  calendar: CalendarCheck,
  class: NotepadText,
  clock: Clock4,
};

function PricingButton({ duration, isSelected, onDurationSelect, t }) {
  const buttonStyles = cn(
    "mx-[-1px] flex items-end gap-1 border border-primary-alt bg-white font-semibold py-2 px-7",
    isSelected
      ? "bg-primary-alt text-white text-2xl leading-7 py-3"
      : "text-primary-alt text-xl leading-7"
  );

  return (
    <button onClick={() => onDurationSelect(duration)} className={buttonStyles}>
      <span className="flex items-center gap-1">
        <Clock4 size={isSelected ? 25 : 20} />
        {duration}
      </span>
      <span className="text-[10px] leading-5">{t("minutes")}</span>
    </button>
  );
}

function PackageCard({ pkg, t }) {
  return (
    <div className="bg-section rounded-md border-b border-b-primary-alt hover:scale-105 cursor-pointer transition-all">
      <div className="p-3 font-medium">
        <p>
          <span className="text-xl text-primary-alt">{pkg.title}</span>{" "}
          {t("weekly")}
        </p>
      </div>
      <div className="bg-primary-alt py-3 px-2">
        <div className="w-fit mx-auto">
          <p className="text-white/60 text-xl font-normal">
            {t("us")}{" "}
            <span className="relative top-1 text-[40px] text-[#ffd67c] font-semibold">
              {pkg.price}
            </span>{" "}
            <sub className="relative -top-2 text-xs uppercase">
              /{pkg.period}
            </sub>
          </p>
        </div>
      </div>
      <ul className="py-3 px-5 grid grid-cols-1 w-fit m-auto gap-1 border-b">
        {pkg.details.map((detail, idx) => {
          const Icon = ICONS[detail.icon];
          return (
            <li key={idx} className="flex items-center gap-1">
              <Icon size={15} />
              {detail.text}
            </li>
          );
        })}
      </ul>
      {pkg.discounts.map((discount, idx) => (
        <div
          key={idx}
          className={cn(
            "text-start py-3 px-5 font-medium",
            idx !== pkg.discounts.length - 1 && "border-b"
          )}
        >
          <p className="text-black/70">
            {discount.duration} ={" "}
            <span className="text-primary-alt text-sm">
              {discount.price} {t("us")}
            </span>{" "}
            <span className="block w-2/5 text-center text-white text-xs bg-primary-alt p-1 leading-none rounded-sm">
              {discount.discount}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Pricing() {
  const [selectedDuration, setSelectedDuration] = useState(30);
  const t = useTranslations("pricing");
  const pricingData = getPricingData(t);
  const packages = pricingData.durations[selectedDuration].packages;

  return (
    <section className="text-center">
      <p className="mb-5">{t("description")}</p>
      <div className="flex flex-col items-center justify-center gap-7">
        <div className="flex items-center">
          {[30, 60].map((duration) => (
            <PricingButton
              key={duration}
              duration={duration}
              isSelected={selectedDuration === duration}
              onDurationSelect={setSelectedDuration}
              t={t}
            />
          ))}
        </div>
        <div className="xl:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
