import {View,Text,StyleSheet, Pressable} from "react-native";
import {Ionicons} from "@expo/vector-icons";


function api(){

};

function Home(){
    return(<View>

        <View style={styles.messageContainer}>
            <View style={styles.senderContainer}>
                <Text>From: Dr.Gomathi </Text>
            </View>
            
            <Text>Conversation Text from api goes here</Text>

            <View style={styles.buttonContainer}>
                <Pressable android_ripple={{ color: "#cccccc" }} onPress={api} style={styles.PressableElement}>
                    <Text>file</Text>
                </Pressable>
            </View>

        </View>

    </View>)
};

export default Home;

const styles = StyleSheet.create({
    messageContainer:{
        borderWidth:2,
        margin:10,
        borderRadius:5,
        height:300,
        padding:10,
        
    },

    senderContainer:{
        marginBottom:10
    },
    
    buttonContainer:{
        borderWidth:1,
        position:"absolute",
        bottom:0,
        margin:15,
        width:"30%",
        borderRadius:10,
        alignItems:"center",
        height:50,
        justifyContent:'center',
        backgroundColor:"#000000"
    },

    PressableElement:{
        
    }
})

