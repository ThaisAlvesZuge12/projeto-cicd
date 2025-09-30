import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";

function Principal() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      if (!auth.currentUser) return; // evita erro se usuário não logado
      const docRef = doc(db, "usuarios", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUsuario(docSnap.data());
      }
    };
    fetchUsuario();
  }, []);

  if (!usuario) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Página Principal</h2>
      <p>Nome: {usuario.nome}</p>
      <p>Sobrenome: {usuario.sobrenome}</p>
      <p>Data de Nascimento: {usuario.dataNascimento}</p>
    </div>
  );
}

export default Principal;