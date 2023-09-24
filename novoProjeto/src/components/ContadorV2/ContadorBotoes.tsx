import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import estilo from '../estilo'

export default (props: any) => {
    return(
        <View style={style.botoes}>
            <Button  title='+' onPress={props.inc} />
            <Button title='-' onPress={props.dec} />
        </View>
    )
}

const style = StyleSheet.create({

    botoes : {
        flexDirection: "row",
        
    }

})