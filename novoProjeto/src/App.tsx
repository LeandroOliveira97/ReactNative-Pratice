import React1 from "react";
import { Text, View, StyleSheet } from "react-native";
import TestComponentes from "./components/Primeiro";

import { Comp1 } from "./components/Multi";
import { Comp2 } from "./components/Multi";

import CompPadrao from "./components/Multi";
import Primeiro from "./components/Primeiro";


import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";
import TituloEsubtituloFragmentTest from "./components/TituloEsubtituloFragmentTest";
import Botao from "./components/Botao";
import Contador from "./components/Contador";


export default () => (

    <View style={style.App}>
{/*
        <Contador inicial={10} passo={1} />
        <Contador inicial={100} passo={10} />

        <Botao />


       <TituloEsubtituloFragmentTest principal="Principal" secundario="Secundario" />

        
    <Aleatorio min={10} max={35} />

        
    <MinMax min={3} max={25}/>
     <Comp1 />
    <Comp2 />
    <CompPadrao />
    <Primeiro />  */}

    </View>

)

const style = StyleSheet.create(
    {

        App: {
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20
        }

    }
)


