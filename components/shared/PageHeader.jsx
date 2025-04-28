export default function PageHeader({ title }) {
  return (
    <section className="py-10 bg-pageHeaader bg-heroSize bg-50 bg-primary-alt max-md:text-center opacity-90">
      <div className="container">
        <h2 className="text-5xl font-medium text-white">{title}</h2>
      </div>
    </section>
  );
}
