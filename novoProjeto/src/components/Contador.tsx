import React, { useState } from "react";
import { Button, Text } from "react-native";
import estilo from "./estilo";


export default ({inicial = 0, passo=1}) => {

    const [numero, setNum] = useState(inicial);

    const incremento = () => setNum(numero + passo);
    const decremento = () => setNum(numero - passo);


    return (
        <>
            <Text style={estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={incremento}/>
            <Button title="-" onPress={decremento}/>
        </>
    )

}

