import { getFaqs } from "@/constants";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ShareLink from "./ShareLink";

export default function Faqs() {
  const bookFree = useTranslations("");
  const t = useTranslations("faqs");
  const faqs = getFaqs(t);
  return (
    <section className="py-section">
      <div className="container">
        <h1 className="section-title">{t("title")}</h1>
        <Accordion type="single" className="accordion" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={i + 1} className="accordion-item">
              <AccordionTrigger className="accordion-trigger">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="accordion-content">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <ShareLink
          title={bookFree("bookFree")}
          href="https://calendly.com/salahamin911/30min"
          className="block w-fit mx-auto mt-10"
          blank
        />
      </div>
    </section>
  );
}
