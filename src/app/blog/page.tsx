export default async function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-navy-950 dark:text-white">
      <div className="container flex max-w-[938px] flex-col items-center justify-center gap-12 py-16">
        <h1 className="text-7xl font-bold tracking-tight text-purple-300 sm:text-[5rem]">
          Blog
        </h1>
        <p className="text-left text-2xl">Consulter nos articles.</p>
      </div>
    </main>
  );
}
