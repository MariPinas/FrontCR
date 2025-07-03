import { useState } from "react";
import axios, { AxiosError } from "axios";

export default function LoginForm() {
  const [form, setForm] = useState({
    name: "",
    password: "",
    date: "",
    time: "",
    code: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", form);
      alert(response.data.message);
    } catch (err) {
      const error = err as AxiosError;

      if (error.response) {
        console.error("Erro no login:", error.response.data);
        alert(error.response.data || "Erro desconhecido");
      } else {
        alert("Erro de rede ou inesperado");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Nome"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="Senha"
        value={form.password}
        onChange={handleChange}
      />
      <input
        name="date"
        placeholder="Data (YYYY-MM-DD)"
        value={form.date}
        onChange={handleChange}
      />
      <input
        name="time"
        placeholder="Hora (HH:MM)"
        value={form.time}
        onChange={handleChange}
      />
      <input
        name="code"
        placeholder="Código"
        value={form.code}
        onChange={handleChange}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
