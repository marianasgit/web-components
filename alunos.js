'use strict'

const createAluno = (aluno) => {
    document.querySelector('nome').value = aluno.nome
    document.querySelector('turma').value = aluno.turma
    document.querySelector('status').value = aluno.status
    document.querySelector('card-image').src = aluno.foto
    document.querySelector('turma').value = aluno.turma

}

const getAluno = async (id='') => {
    const response = await fetch(`${url}/${id}`)
    return await response.json()
}

export { getAluno, createAluno }