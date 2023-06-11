import { Navbar } from "@/components";

export const metadata = {
  title: "Reviews IFBA - Docente",
  description: "Página do docente do Reviews IFBA",
};

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <section className="h-[90vh] mx-auto max-w-7xl sm:px-6 lg:px-8">
        {children}
      </section>
    </>
  );
}
