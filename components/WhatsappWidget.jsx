"use client";
import { WHATSAPP_URL } from "@/constants";
import { cn } from "@/lib/utils";
import { MessageCircleMore, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WhatsappWidget() {
  const t = useTranslations("whatsapp");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-5 right-5 w-13 h-13 sm:w-16 sm:h-16 bg-primary flex items-center justify-center rounded-full z-20"
        >
          <Image
            src="/icons/whats-app-white.svg"
            width={30}
            height={30}
            alt="Whatsapp Icon"
            className="w-7 h-7 sm:w-8 sm:h-8"
          />
        </button>
        <div
          className={cn(
            "fixed bottom-[85px] translate-y-4 sm:bottom-24 right-5 rounded-md bg-white w-[360px] shadow-WhatsappWidget z-10 opacity-0 invisible transition-all ",
            isOpen && "translate-y-0 visible opacity-100"
          )}
        >
          <div className="relative flex items-center gap-2 p-6">
            <button
              className="absolute top-1 right-1 opacity-50 hover:opacity-100"
              onClick={() => setIsOpen(false)}
            >
              <X size={18} />
            </button>
            <Image
              src="/images/logofav.png"
              width={40}
              height={40}
              alt="Iwan Academy"
              className="p-1 border rounded-full w-13 h-13"
            />
            <div className="leading-none">
              <p className="font-semibold mb-1">{t("iwanAcademy")}</p>
              <p className="text-xs">{t("bio")}</p>
            </div>
          </div>
          <div className="p-6 bg-whatsappChat bg-50">
            <div className="relative p-3 text-sm bg-white max-w-[calc(100%-45px)] rounded-md">
              <p className="mb-2">{t("salam")}</p>
              <p>{t("message")}</p>
              <div className="absolute -bottom-2 left-3 rtl:right-3 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>
          <div className="p-6 font-medium ">
            <Link
              href={WHATSAPP_URL}
              className="w-full bg-primary text-white p-2 rounded-full flex items-center justify-center gap-1"
              target="_blank"
            >
              {t("startChat")}
              <MessageCircleMore size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
