"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button, Input } from "@/components";

type formDataProps = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { push } = useRouter();
  const [formData, setFormData] = useState({} as formDataProps);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });

    if (response?.ok) {
      const sessionResponse = await fetch("/api/auth/session");
      const { user } = await sessionResponse.json();

      switch (user.type) {
        case "docente":
          if (user.isCoordenador) {
            push("/coordenador");
          } else {
            push("/docente");
          }
          break;
        case "secretaria":
          push("/secretaria");
          break;
        default:
          push("/discente");
          break;
      }
    } else {
      // Tratar falha na autenticação
      alert("Email ou senha inválidos");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen mx-2">
      <div className="p-8 bg-white rounded-lg shadow-lg sm:w-96 lg:w-1/4">
        <h2 className="mb-5 text-2xl font-bold text-center text-primary">
          Faça seu login
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            value={formData.email}
          />
          <Input
            label="Senha"
            name="password"
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            value={formData.password}
          />
          <div className="flex items-center justify-center">
            <Button
              disabled={loading}
              className="w-full p-2 mt-2"
              type="submit"
            >
              Acessar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
