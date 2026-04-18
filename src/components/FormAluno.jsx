import { useState } from 'react';
import api from '../service/api';

function FormAlunos() {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");

    async function cadastrarAluno(e) {
        e.preventDefault();
        try {
            const response = await api.post("/usuarios", {
                nome,
                sobrenome,
                cpf
            });

            console.log("Usuário criado:", response.data)

            setNome("");
            setSobrenome("");
            setCpf("");
        } catch (error) {
            console.error("Erro ao cadastrar:", error)
        }
    }

    return (
        <>
            <main>
                <form onSubmit={cadastrarAluno}>
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            placeholder="nome"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="sobrenome">Sobrenome</label>
                        <input
                            type="text"
                            placeholder="sobrenome"
                            name="sobrenome"
                            value={sobrenome}
                            onChange={(e) => setSobrenome(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="cpf">cpf</label>
                        <input
                            type="text"
                            placeholder="cpf"
                            name="cpf"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}/>
                    </div>

                    <button type="submit">
                        Cadastrar Aluno(a)
                    </button>
                </form>
            </main>
        </>
    )
}

export default FormAlunos;