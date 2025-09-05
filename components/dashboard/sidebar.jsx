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
import { FileText, GraduationCap, HomeIcon } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const navItems = [
  {
    title: "Home",
    icon: HomeIcon,
    url: "/dashboard",
    isActive: false,
  },
  {
    title: "Blogs",
    icon: FileText,
    url: "/dashboard/blogs",
    isActive: false,
  },
  // {
  //   title: "Courses",
  //   icon: GraduationCap,
  //   url: "/dashboard/courses",
  //   isActive: false,
  // },
];

export function DashboardSidebar({ ...props }) {
  const locale = useLocale();

  const pathname = usePathname();

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
    [pathname]
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
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
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
