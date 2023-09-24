import React from 'react'
import { FlatList, Text } from 'react-native'
import estilo from '../estilo'
import Produtos from "./Produtos"
import produtos from './Produtos'

export default (props: any) => {
    return (
        <>
            <Text style={estilo.txtG}>
                Lista de Produtos FlatMap:
            </Text>
            <FlatList data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={({ item }) => {
                    return <Text style={estilo.txtM}>ID:{item.id} Nome:{item.nome} Preco: R${item.preco}</Text>
                }}
            ></FlatList>
        </>
    )
}