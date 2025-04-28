import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

const _layout = () => {

    const chatData = [
        {
            id: 1,
            name: "Weekend",
            message: "Sofia: GIF 👀",
            avatar: "https://img.freepik.com/free-psd/3d-rendering-emoji-icon_23-2149878818.jpg?t=st=1745835263~exp=1745838863~hmac=dfa8df6e41b51a831da7f20681cec73f8073207e6aaf98beccbe9a93d6acfed2&w=826",
            date: "Yesterday",
        }, {
            id: 2,
            name: "Andrius Schneider",
            message: "How far?",
            avatar: "https://img.freepik.com/free-vector/floral-card_53876-91231.jpg?t=st=1745835503~exp=1745839103~hmac=f2053311e9032548f4df4d04b7a83e7f4a1e62fa74a90a6df66cee2e35770d98&w=900",
            date: "9:45",
        }, {
            id: 3,
            name: "Andrius Schneider",
            message: "How far?",
            avatar: "https://img.freepik.com/free-vector/floral-card_53876-91231.jpg?t=st=1745835503~exp=1745839103~hmac=f2053311e9032548f4df4d04b7a83e7f4a1e62fa74a90a6df66cee2e35770d98&w=900",
            date: "9:45",
        }, {
            id: 4,
            name: "Andrius Schneider",
            message: "How far?",
            avatar: "https://img.freepik.com/free-vector/floral-card_53876-91231.jpg?t=st=1745835503~exp=1745839103~hmac=f2053311e9032548f4df4d04b7a83e7f4a1e62fa74a90a6df66cee2e35770d98&w=900",
            date: "9:45",
        }, {
            id: 5,
            name: "Andrius Schneider",
            message: "How far?",
            avatar: "https://img.freepik.com/free-vector/floral-card_53876-91231.jpg?t=st=1745835503~exp=1745839103~hmac=f2053311e9032548f4df4d04b7a83e7f4a1e62fa74a90a6df66cee2e35770d98&w=900",
            date: "9:45",
        }, {
            id: 6,
            name: "Andrius Schneider",
            message: "How far?",
            avatar: "https://img.freepik.com/free-vector/floral-card_53876-91231.jpg?t=st=1745835503~exp=1745839103~hmac=f2053311e9032548f4df4d04b7a83e7f4a1e62fa74a90a6df66cee2e35770d98&w=900",
            date: "9:45",
        }, {
            id: 7,
            name: "Andrius Schneider",
            message: "How far?",
            avatar: "https://img.freepik.com/free-vector/floral-card_53876-91231.jpg?t=st=1745835503~exp=1745839103~hmac=f2053311e9032548f4df4d04b7a83e7f4a1e62fa74a90a6df66cee2e35770d98&w=900",
            date: "9:45",
        }, {
            id: 8,
            name: "Andrius Schneider",
            message: "How far?",
            avatar: "https://img.freepik.com/free-vector/floral-card_53876-91231.jpg?t=st=1745835503~exp=1745839103~hmac=f2053311e9032548f4df4d04b7a83e7f4a1e62fa74a90a6df66cee2e35770d98&w=900",
            date: "9:45",
        }, {
            id: 9,
            name: "Andrius Schneider",
            message: "How far?",
            avatar: "https://img.freepik.com/free-vector/floral-card_53876-91231.jpg?t=st=1745835503~exp=1745839103~hmac=f2053311e9032548f4df4d04b7a83e7f4a1e62fa74a90a6df66cee2e35770d98&w=900",
            date: "9:45",
        },
    ];


    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 30, color: "green", fontWeight: 'bold' }}>WhatsApp</Text>

            <View style={{ marginTop: 20 }}>

                <FlatList
                    data={chatData}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.container}>
                                <Image
                                    source={{ uri: item.avatar }}
                                    style={{ height: 40, width: 40, borderRadius: 60, }}
                                />
                                <View style={{ marginLeft: 15, flex: 1 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '500', flex: 1 }} >{item.name}</Text>
                                        <Text>{item.date}</Text>
                                    </View>
                                    <Text style={{ fontSize: 12, color: 'black', }}>{item.message}</Text>
                                </View>

                            </View>
                        )
                    }}
                />

            </View>


        </View>
    )
}

export default _layout;
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 15,
        paddingTop: 55,
    },
    container: {
        // height: 70,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: 'center',
    },
})