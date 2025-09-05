import DashboardHeader from "@/components/dashboard/header";

export default function DashboardPage() {
  const breadcrumbs = [{ label: "Iwan Dashboard" }];

  return (
    <>
      <DashboardHeader breadcrumbs={breadcrumbs} />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <p>Dashboard Home Page</p>
        </div>
      </div>
    </>
  );
}
