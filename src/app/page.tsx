"use client";

import { useState } from "react";

import { Button, Input } from "@/components";

type formDataProps = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [formData, setFormData] = useState({} as formDataProps);

  return (
    <div className="flex items-center justify-center h-screen mx-2">
      <div className="p-8 bg-white rounded-lg shadow-lg sm:w-96 lg:w-1/4">
        <h2 className="mb-5 text-2xl font-bold text-center text-primary">
          Faça seu login
        </h2>
        <form onSubmit={() => ({})}>
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
            <Button className="mt-2" type="submit">
              Acessar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
