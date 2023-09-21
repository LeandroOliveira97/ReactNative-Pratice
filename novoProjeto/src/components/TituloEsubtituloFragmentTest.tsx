import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default (props: any) => (

    <React.Fragment>

        <Text style={estilo.txtG}>{props.principal}</Text>
        <Text style={estilo.txtM}>{props.secundario}</Text>

    </React.Fragment>

)
