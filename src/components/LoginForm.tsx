import { useState } from "react";
import axios from "axios";

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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err.response?.data?.error || "Erro desconhecido");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nome" onChange={handleChange} />
      <input name="password" placeholder="Senha" onChange={handleChange} />
      <input
        name="date"
        placeholder="Data (YYYY-MM-DD)"
        onChange={handleChange}
      />
      <input name="time" placeholder="Hora (HH:MM)" onChange={handleChange} />
      <input name="code" placeholder="Código" onChange={handleChange} />
      <button type="submit">Entrar</button>
    </form>
  );
}
