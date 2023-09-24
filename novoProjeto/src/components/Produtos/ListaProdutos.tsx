import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import Produtos from "./Produtos"
import produtos from './Produtos'

export default (props: any) => {

    function obterLista() {
        return produtos.map(prod => {
            return (
                <Text style={estilo.txtM} key={prod.id}>
                    ID:{prod.id} Nome:{prod.nome} Preco: R${prod.preco}
                </Text>
            )
        })
    }


    return (
        <><Text style={estilo.txtG}>
            Lista de Produtos:
        </Text>

            {obterLista()}

        </>
    )
}