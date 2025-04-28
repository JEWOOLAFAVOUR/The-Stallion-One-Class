import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const _layout = () => {
    return (
        <View style={styles.page}>


            <TextInput
                placeholder='Enter something'
            />


            <Text style={styles.acmosText}>Hello My name is Favour, and I'm the Tutor for this class. Victor-a and Victor-b are my students.</Text>

            <Image
                source={require("../../assets/images/boy.jpg")}
                style={{ height: 200, width: 200 }}
            />

            <Image
                source={{ uri: "https://img.freepik.com/free-photo/sassy-great-looking-african-american-girl-wearing-sunglasses_176420-43827.jpg?t=st=1744626137~exp=1744629737~hmac=f60156bd47fb9144c3a2bee5ba8b87e823f9de7b4fd0e95c74b1dece2b1f72c6&w=1380" }}
                style={{ height: 200, width: 200 }}
            />


            <View>
                <View></View>
            </View>

            <View></View>
        </View>
    )
}

export default _layout

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        top: 50,
    },
    acmosText: {
        fontSize: 40,
        color: "tomato",
        fontWeight: "bold"
    },
});