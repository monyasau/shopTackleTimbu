import { View, Text, StyleSheet, Image } from "react-native"

const Product=({productData})=> {
    return (
       <View style={style.container}>
        {/* <Image source={{uri:`https://api.timbu.cloud/images/${productData.photos[0].url}`}}/>
        <Image 
                    source={{ uri: `https://api.timbu.cloud/images/shoptackle/product_hdmi_adapter_15a595_1.jpg` }} 
                /> */}
                {productData.photos && productData.photos[0]?(
                    <Image style={style.image} source={{uri:`https://api.timbu.cloud/images/${productData.photos[0].url}`}}/>
                ):
                (
                    <View style={style.imagePlaceHolder}></View>
                )

                }
        <Text>{productData.name}</Text>
        <Text>₦{productData.current_price[0].NGN}</Text>
       </View>
    );
}

const style = StyleSheet.create({
    container: {
        position: "relative",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        borderWidth: 1,
        borderColor: "#000",
        width: "48%",
        padding: 1,
        alignItems: 'center',
    },
    image:{
        width:"100%",
        height: 200,
    },
    imagePlaceHolder:{
        width: '100%',
        height: 200,
        backgroundColor: '#ccc',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
})
export default Product;