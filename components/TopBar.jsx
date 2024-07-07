import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const TopBar = ({reloadStore}) => {
    return (
        <View style={style.container}>
        <View style={style.content}>
            <Text style={style.logo}>ShopTackle</Text>
            <TouchableOpacity style={style.cart} onPress={()=>reloadStore()}>
                <Text>Reload Items</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    logo: {
        fontWeight: "900",
        fontSize: 25,
        maxWidth:"50%"
    },
    container: {
        marginTop: 30,
        paddingVertical:10,
    },
    content:{
        justifyContent:"space-between",
        flexDirection:"row",
        width:"95%",
        marginHorizontal:"auto"
    },
    cartImage:{
        width:30,
        height:30,
    },
    cart:{
        paddingVertical:5,
        paddingHorizontal:10,
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10,
        borderWidth:1,
        flexDirection:"row",
        flexWrap:"nowrap",

    }
})

export default TopBar;