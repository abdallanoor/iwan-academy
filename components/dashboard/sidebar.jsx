"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { FileText, HomeIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function DashboardSidebar({ ...props }) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("dashboard");

  const navItems = useMemo(
    () => [
      {
        title: t("links.home"),
        icon: HomeIcon,
        url: "/dashboard",
      },
      {
        title: t("links.blogs"),
        icon: FileText,
        url: "/dashboard/blogs",
      },
    ],
    [t]
  );

  // Update active state based on current path
  const updatedNavItems = useMemo(
    () =>
      navItems.map((item) => {
        const isHome = item.url === "/dashboard";
        return {
          ...item,
          isActive: isHome
            ? pathname === item.url
            : pathname.startsWith(item.url),
        };
      }),
    [pathname, navItems]
  );

  return (
    <Sidebar side={locale === "ar" ? "right" : "left"} {...props}>
      <SidebarHeader className="border-b items-center h-16">
        <div className="h-full">
          <Image
            src="/images/logo.png"
            alt="Iwan Academy"
            width={100}
            height={60}
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {updatedNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className="py-5 font-medium"
                  >
                    <Link
                      href={item.url}
                      className="flex items-center gap-2 leading-normal"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
