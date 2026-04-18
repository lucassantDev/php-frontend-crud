import { useState } from "react";
import api from "../service/api";

function FormAdm() {

    const [nomeAdm, setNomeAdm] = useState("");
    const [sobrenomeAdm, setSobrenomeAdm] = useState("");
    const [emailAdm, setEmailAdm] = useState("");
    const [cpfAdm, setCpfAdm] = useState("");

    async function cadastrarAdm() {
        e.preventDefault()
        try {
            const response = await api.post("/administrador", {
                nomeAdm,
                sobrenomeAdm,
                emailAdm,
                cpfAdm
            });

            console.log("Administrador criado:", response.data);
            setNomeAdm("");
            setSobrenomeAdm("");
            setEmailAdm("");
            setCpfAdm("");
        } catch(error){
            console.log("Erro ao cadastrar administrador", error)
        }
    }

    return(
        <>
            <main>
                <form onSubmit={cadastrarAdm}>
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            placeholder="nome"
                            name="nome"
                            value={nomeAdm}
                            onChange={(e) => setNomeAdm(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="sobrenome">Sobrenome</label>
                        <input
                            type="text"
                            placeholder="sobrenome"
                            name="sobrenome"
                            value={sobrenomeAdm}
                            onChange={(e) => setSobrenomeAdm(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="text"
                            placeholder="cpf"
                            name="cpf"
                            value={emailAdm}
                            onChange={(e) => setEmailAdm(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="cpf">cpf</label>
                        <input
                            type="text"
                            placeholder="cpf"
                            name="cpf"
                            value={cpfAdm}
                            onChange={(e) => setCpfAdm(e.target.value)}/>
                    </div>

                    <button type="submit">
                        Cadastrar Administrador(a)
                    </button>
                </form>
            </main>
        </>
    )
   
}

export default FormAdm;