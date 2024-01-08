import { View, Text, Button, StyleSheet, Image, Pressable } from 'react-native';

function WelcomeScreen({ navigation }) {
    function pressHandler() {
        navigation.navigate("Account Login");
    }

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.collegeName}>
                iTech Connect
            </Text>
            <Image style={styles.image} source={require("../assets/images/clg_logo.png")} />
            <View>
                <Text style={styles.textStyle}>
                    Get started,{"\t\t\t"}
                </Text>
                <View style={styles.pressableContainer}>
                    <Pressable android_ripple={{ color: "#cccccc" }} style={styles.pressable} onPress={pressHandler}>
                        <Text style={styles.pressableText}>Sign In</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",

    },
    collegeName: {
        marginTop: 200,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",

    },
    image: {
        marginTop: 30,
        marginBottom: 100,
    },

    textStyle: {
        fontSize: 20,
    },
    pressableContainer: {
        borderRadius: 10,
        marginTop: 10,
        alignItems: "center",
        overflow: "hidden",
        elevation: 4
    },
    pressable: {
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#3B71F3",
    },
    pressableText: {
        padding: 15,
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
})
