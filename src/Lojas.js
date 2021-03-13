import React from 'react'

const Lojas = ({dados}) => {
    return (
        <div className='loja'>
            {dados.map((loja) => (
                <ul className='col-12' key={loja.nome}>
                    <li className='no-marging' style={{background:'#000', color:'white',position:'relative', left:'-15px', fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>{loja.nome}</li>
                    <li>Faturamento Anual: {loja.faturamentoAnual}Milhões</li>
                    <li>Data de Criação: {new Date(loja.dataCriacao).toLocaleDateString()}</li>
                    <li>CPF: {loja.proprietario.cpf}</li>
                    <li>Sexo: {loja.proprietario.sexo}</li>
                </ul>
            ))}
        </div>
    )
}

export default Lojas
