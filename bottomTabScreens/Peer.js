import {View,Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";

function Peer(){

    return(<View style={{height:"100%",backgroundColor:"#54CBFF",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Peer Page</Text>
            <Ionicons name="home" />
        </View>
        
    );
};


export default Peer;