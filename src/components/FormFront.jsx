function FormFront() {
    return (
        <>
            <main>
                <form action="">
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" placeholder="nome" name="nome" />
                    </div>
                    <div>
                        <label htmlFor="sobrenome">Sobrenome</label>
                        <input type="text" placeholder="sobrenome" name="sobrenome" />
                    </div>
                    <div>
                        <label htmlFor="cpf">cpf</label>
                        <input type="text" placeholder="cpf" name="cpf" />
                    </div>

                    <button type="submit">Cadastrar Aluno</button>
                </form>
            </main>
        </>
    )
}

export default FormFront;