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
    {
      source: "/secretaria",
      destination: "/pages/secretary",
    },
    {
      source: "/secretaria/docentes",
      destination: "/pages/secretary/teachers",
    },
    {
      source: "/secretaria/discentes",
      destination: "/pages/secretary/students",
    },
    {
      source: "/secretaria/disciplinas",
      destination: "/pages/secretary/disciplines",
    },
    {
      source: "/secretaria/semestres",
      destination: "/pages/secretary/semesters",
    },
    {
      source: "/discente",
      destination: "/pages/student",
    },
    {
      source: "/discente/:semestre",
      destination: "/pages/student/[semester]",
    },
    {
      source: "/discente/:semestre/:disciplina",
      destination: "/pages/student/[semester]/[discipline]",
    },
  ],
};

module.exports = nextConfig;
