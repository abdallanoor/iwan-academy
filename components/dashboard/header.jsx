"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Fragment } from "react";
import Link from "next/link";

export default function DashboardHeader({
  breadcrumbs,
  showBackButton = false,
  backButtonLabel = "Back",
  onBackClick,
}) {
  const router = useRouter();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      router.back();
    }
  };
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger />
      {breadcrumbs && (
        <Separator
          orientation="vertical"
          className="data-[orientation=vertical]:h-4"
        />
      )}
      {showBackButton && (
        <>
          <Button variant="ghost" size="sm" onClick={handleBackClick}>
            <ArrowLeft className="h-4 w-4" />
            {backButtonLabel}
          </Button>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-4"
          />
        </>
      )}
      {breadcrumbs && (
        <Breadcrumb className="hidden md:block">
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb, index) => (
              <Fragment key={index}>
                {index > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {breadcrumb.href ? (
                    <BreadcrumbLink asChild className="truncate">
                      <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      )}
      <div className="ms-auto">
        <LanguageSwitcher />
      </div>
    </header>
  );
}
