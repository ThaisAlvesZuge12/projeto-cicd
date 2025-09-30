import React, { useState } from "react";
import { auth, db } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleCadastro = async () => {
    setErro("");
    if (!nome || !sobrenome || !dataNascimento || !email || !senha) {
      setErro("Preencha todos os campos!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );
      const user = userCredential.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        nome,
        sobrenome,
        dataNascimento,
        email,
        uid: user.uid,
      });

      navigate("/principal");
    } catch (err) {
      console.error(err);
      setErro(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Cadastro</h2>
      {erro && <p className="erro">{erro}</p>}

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sobrenome"
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
      />
      <input
        type="date"
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChange={(e) => setDataNascimento(e.target.value)}
      />
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

      <button onClick={handleCadastro} className="btn">
        Cadastrar
      </button>

      <p>
        Já tem conta? <Link to="/">Faça login</Link>
      </p>
    </div>
  );
}

export default Cadastro;