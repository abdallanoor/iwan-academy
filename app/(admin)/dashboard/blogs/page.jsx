import DashboardHeader from "@/components/dashboard/header";

export default function Blogs() {
  const breadcrumbs = [
    { label: "Iwan Dashboard", href: "/dashboard" },
    { label: "Blogs" },
  ];
  return (
    <>
      <DashboardHeader breadcrumbs={breadcrumbs} />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <p>Blog Management</p>
        </div>
      </div>
    </>
  );
}
