import React from 'react'
import { Text, View } from 'react-native'

const PropertyLabel = (props) => {
    const styles = {
        container: {
            flex: 1,
            flexDirection: 'row'
        },
        text: {
            flex:1
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.labelName}:</Text>
            <Text style={styles.text}>{props.labelValue}</Text>
        </View>
    )
}
export default PropertyLabel