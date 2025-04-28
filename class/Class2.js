import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _layout = () => {
    return (
        <View style={styles.page}>
            <View style={styles.box1}>

                <View style={styles.box2}>

                    <View style={styles.box3} />
                    <View style={styles.box3} />
                    <View style={styles.box3} />

                </View>

            </View>
        </View>
    )
}

export default _layout

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    box1: {
        height: 300,
        width: 300,
        backgroundColor: "yellow",
        borderRadius: 300,
        borderWidth: 5,
        borderColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2: {
        height: 205,
        width: 205,
        backgroundColor: "green",
        borderWidth: 3,
        borderColor: "black",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    box3: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 5,
    },

});