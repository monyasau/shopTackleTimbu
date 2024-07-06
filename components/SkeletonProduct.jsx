import { View, Text, StyleSheet } from "react-native";

const SkeletonProduct = () => {
    return (
        <View style={style.container}>
            <View style={style.skeletonImage}></View>
            <View style={style.infoContainer}>
                <Text style={style.skeletonText}></Text>
                <Text style={style.skeletonText}></Text>
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        width: "48%",
        backgroundColor: "#e0e0e0",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,

    },
    infoContainer: {
        justifyContent: "space-between",
        flex: 1
    },
    skeletonImage: {
        width: "100%",
        backgroundColor: "#c0c0c0",
        borderRadius: 8,
        marginBottom: 10,
        height: 200,
    },
    skeletonText:{
        width: "100%",
        height: 15,
        backgroundColor: "#c0c0c0",
        borderRadius: 4,
        marginBottom: 5,

    }

})

export default SkeletonProduct;