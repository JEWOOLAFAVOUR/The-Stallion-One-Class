import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const test = () => {
    return (
        <View>
            <Image
                style={{ height: 200, width: 200 }}
                source={require("../../assets/images/test.jpeg")} />
            <Image source={{ uri: "https://img.freepik.com/free-photo/medium-shot-smiley-man-ready-travel_23-2149380154.jpg?t=st=1745407821~exp=1745411421~hmac=aa3b63b266cfa85131c6d7393d6aa7f789fbc2a31393783e506544fe427d7ab3&w=740" }} />
        </View>
    )
}

export default test

const styles = StyleSheet.create({})