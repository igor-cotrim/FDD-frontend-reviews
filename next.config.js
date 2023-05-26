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
  ],
};

module.exports = nextConfig;
