import { getNavLinks } from "@/constants";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import ContactLinks from "./ContactLinks";

export default function Footer() {
  const tPages = useTranslations("pages");
  const tFooter = useTranslations("footer");
  const navLinks = getNavLinks(tPages);
  return (
    <footer className="pt-14 bg-zinc-950 text-zinc-400 font-medium">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <p className="footer-title">{tFooter("aboutIwan.title")}</p>
            <p>{tFooter("aboutIwan.description")}</p>
          </div>
          <div>
            <p className="footer-title">{tFooter("iwanAcademy")}</p>
            <ul className="flex flex-col gap-3 font-medium">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.route} className="hover:text-zinc-50">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-title">{tFooter("getInTouch")}</p>
            <ContactLinks footer />
          </div>
        </div>
        <div className="mt-10 py-5 max-sm:pb-24 text-center text-sm font-normal border-t border-zinc-700">
          {tFooter("copyright")}
        </div>
      </div>
    </footer>
  );
}
