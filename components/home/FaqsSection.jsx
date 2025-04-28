import { getFaqs } from "@/constants";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqsSection() {
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
      </div>
    </section>
  );
}
