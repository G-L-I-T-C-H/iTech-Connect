import {View,Text,Image,StyleSheet, Pressable} from "react-native";
import { Button } from "react-native-paper";


function Profile(){
    return(<View>
        <View>
            <View style={styles.profileContainer}>
                <Image style={styles.profileImage} source={require("../assets/images/profile.jpeg")}/>
            </View>
        </View>

        <View style={styles.logOutContainer} >
                <Pressable android_ripple={{ color: '#ccc' }}>
                    <Text>Log out</Text>
                </Pressable>
        </View>
            </View>
    )
};


export default Profile;

const styles = StyleSheet.create({
    profileContainer:{
        borderRadius:100,
        width:200,
        height:200,
        overflow:"hidden",
        marginLeft:30,
        marginTop:20
    },

    profileImage:{
        resizeMode:'cover'
    },

    logOutContainer:{
        position:"absolute",
        bottom:100
    }
})