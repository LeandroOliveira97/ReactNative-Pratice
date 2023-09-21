import React from "react";
import { Button } from "react-native";

export default (props: any) => {

    function executar () {
        console.warn('Executada 01')
    }

    return (
        <>
 
        <Button title="Executar 01" onPress={executar} />
        <Button title="Executar 02" onPress={function () {
            console.warn('Executada 02')
        }}   />
        <Button title="Executar 03" onPress={ () => console.warn('Exec 03') } />
        

        </>
    )


}