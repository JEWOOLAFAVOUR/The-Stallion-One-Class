import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Instagram from "../../class/Instagram";

const _layout = () => {
    return (
        <View style={styles.page}>
            <Instagram />
        </View>
    )
}

export default _layout

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "white"
    },
})