import { Navigate, useNavigate } from "react-router-dom";


function InitialPage() {

    const navigate = useNavigate()

    function ToFormAdm() {
        navigate("/CadastroAdm")
    };

    function ToFormAlunos() {
        navigate("/CadastroAluno")
    };

    return (
        <>
            <main className="initialMain">
                <section>
                    <button onClick={() => ToFormAdm()}>
                        Cadastrar Administrador(a)
                    </button>
                    <button onClick={() => ToFormAlunos()}>
                        Cadastrar Aluno(a)
                    </button>
                    
                </section>
            </main>
        </>
    )
}

export default InitialPage;