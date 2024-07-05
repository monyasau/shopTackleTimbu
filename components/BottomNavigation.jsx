import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const BottomNavigation = ({active,setActiveWindow}) => {
    return (
        <>
            <View style={style.container}>
            <View style={style.content}>
                <TouchableOpacity style={style.pages} onPress={()=>setActiveWindow("products")}>
                    <Text style={active=="products"?style.active:style.inActive}>Products</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={style.pages} onPress={()=>setActiveWindow("checkout")}>
                    <Text style={active=="checkout"?style.active:style.inActive}>Check Out</Text>
                    </TouchableOpacity>
            </View>
            </View>
        </>
    )
}
const style = StyleSheet.create({
    container: {
        justifyContent: "space-around",
        borderColor: "#000",
        borderWidth: 1,
        width: "100%",
        paddingVertical: 10,
        backgroundColor: "#eee"
    },
    content:{
        justifyContent: "space-around",
        flexDirection: "row",
        width:"98%",
        marginHorizontal:"auto"
    },
    pages: {
        width: "48%",
        padding: 20,
        borderColor: "#000",
        borderWidth: 1,
        backgroundColor: "#ddd",
    },
    active:{
        color:"#000",
        textAlign:"center"
    },
    inActive:{
        textAlign:"center",
        color:"#666"
    }
})
export default BottomNavigation;