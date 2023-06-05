export const metadata = {
  title: "Reviews IFBA - Coordenador",
  description: "Página do coordenador do Reviews IFBA",
};

export default function CoordinatorLayout({
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
