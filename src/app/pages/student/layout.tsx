import {Navbar} from "@/components";

export const metadata = {
    title: "Reviews IFBA - Discente",
    description: "Página do discente do Reviews IFBA",
};

export default function StudentLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar/>
            <section className="h-[90vh] mx-auto max-w-7xl sm:px-6 lg:px-8">
                {children}
            </section>
        </>
    );
}
