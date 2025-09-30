import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErro("");
    if (!email || !senha) {
      setErro("Preencha todos os campos!");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/principal");
    } catch (err) {
      console.error(err);
      setErro("Usuário ou senha inválidos!");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {erro && <p className="erro">{erro}</p>}

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={handleLogin} className="btn">
        Acessar
      </button>

      <p>
        Não tem cadastro? <Link to="/cadastro">Clique aqui</Link>
      </p>
    </div>
  );
}

export default Login;