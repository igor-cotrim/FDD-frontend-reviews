/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/docente",
      destination: "/pages/teacher",
    },
    {
      source: "/docente/:semestre",
      destination: "/pages/teacher/[semester]",
    },
    {
      source: "/docente/:semestre/:disciplina",
      destination: "/pages/teacher/[semester]/[discipline]",
    },
    {
      source: "/coordenador",
      destination: "/pages/coordinator",
    },
    {
      source: "/coordenador/formulario",
      destination: "/pages/coordinator/form",
    },
    {
      source: "/coordenador/formulario/:id",
      destination: "/pages/coordinator/[form]",
    },
  ],
};

module.exports = nextConfig;
