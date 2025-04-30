import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _layout = () => {
    return (
        <View style={styles.page}>


            <View style={styles.box}>

            </View>

            <View style={styles.box2}>

            </View>

            <View style={styles.box2}>

            </View>


        </View>
    )
}

export default _layout

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 60,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    box: {
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    box2: {
        height: 100,
        width: 100,
        backgroundColor: 'green'
    },
});