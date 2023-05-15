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
    <section className="h-screen mx-auto max-w-7xl sm:px-6 lg:px-8">
      {children}
    </section>
  );
}
