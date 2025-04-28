import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, } from 'react-native'
import React from 'react'

const _layout = () => {
    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', textAlign: "center" }}>Welcome Back</Text>
            <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', opacity: 0.5, fontWeight: '500' }}>Continue Your Path</Text>

            {/* TextInput for Users  */}
            <View style={{ marginTop: 20, }}>
                <View>
                    <Text style={{ fontSize: 14, color: 'black' }}>Email</Text>
                    <View style={styles.inputCtn}>
                        <TextInput
                        />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 14, color: 'black' }}>Password</Text>
                    <View style={styles.inputCtn}>
                        <TextInput
                            style={{ flex: 1 }}
                        />
                        <TouchableOpacity>
                            <Image source={require("../../assets/icons/eyeclose.png")}
                                style={{ height: 20, width: 20, }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* Remember  */}
            <View style={{ marginTop: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center' }}>
                    <Image source={require('../../assets/icons/checkbox.png')}
                        style={{ height: 20, width: 20, }} />
                    <Text style={{ fontSize: 14, color: "black", marginLeft: 10, }}>Remember Me</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 14, color: "black" }}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
            {/* BUTTOn */}
            <TouchableOpacity activeOpacity={0.7} style={styles.loginBtn}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

export default _layout

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 55,
        paddingHorizontal: 30,
    },
    inputCtn: {
        height: 50,
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    loginBtn: {
        height: 50,
        backgroundColor: 'tomato',
        marginTop: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: "center"
    },
});