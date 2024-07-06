import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native"
import { AntDesign } from '@expo/vector-icons';

const ProductModal = ({ active, setActive, productData }) => {
    if (active) {
        return null;
    }
    console.log(active);
    return (
        <Modal
            transparent onRequestClose={() => setActive(true)}
            animationType="slide">
            <View style={style.modalSurrounding}>
                <View style={style.modalContainer}>
                    <TouchableOpacity style={style.close} onPress={()=>setActive(!active)}>
                    <AntDesign name="close"size={24} color="black" />
                        <Text>Close</Text>
                    </TouchableOpacity>
                    {productData.photos && productData.photos[0] ? (
                        <Image style={style.modalImage} source={{ uri: `https://api.timbu.cloud/images/${productData.photos[0].url}` }} />
                    ) :
                        (
                            <View style={style.imagePlaceHolder}></View>
                        )

                    }
                    <View style={style.modalInfoContainer}>

                        <Text >{productData.name}</Text>
                        <Text style={{ fontWeight: 700 }}>₦ {productData.current_price[0].NGN}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
}


const Product = ({ productData }) => {
    const [modalActive, setModalActive] = useState(true)
    return (
        <>
            <TouchableOpacity style={style.container} onPress={() => setModalActive(false)}>
                <View>
                    {productData.photos && productData.photos[0] ? (
                        <Image style={style.image} source={{ uri: `https://api.timbu.cloud/images/${productData.photos[0].url}` }} />
                    ) :
                        (
                            <View style={style.imagePlaceHolder}></View>
                        )

                    }
                    <View style={style.infoContainer}>

                        <Text >{productData.name}</Text>
                        <Text style={{ fontWeight: 700 }}>₦ {productData.current_price[0].NGN}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <ProductModal productData={productData} setActive={setModalActive} active={modalActive} />
        </>
    );
}

const style = StyleSheet.create({

    container: {
        position: "relative",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        borderWidth: 1,
        borderColor: "#000",
        width: "48%",
        padding: 1,
    },
    infoContainer: {
        padding: 2,
        justifyContent: "space-between",
        flex: 1
    },
    image: {
        width: "100%",
        height: 200,
    },
    modalSurrounding: {
        flex: 1,
        backgroundColor: "#00000070",
        paddingHorizontal: "5%",
        justifyContent: "center",
    },
    modalContainer: {
    },
    modalInfoContainer: {
        marginVertical:10,
        borderRadius:8,
        padding: 4,
        backgroundColor:"#cccccc"
    },
    modalImage: {
        borderWidth: 1,
        borderRadius: 6,
        width: "100%",
        marginHorizontal: "auto",
        height: "75%",
    },
    close:{
        marginVertical:10,
        marginLeft:"auto",
        flexDirection:"row",
         borderWidth:1,
         borderColor:"red",
         backgroundColor:"white",
         borderRadius:100,
         padding:10,
         alignItems:"center"

    },
    imagePlaceHolder: {
        width: '100%',
        height: 200,
        backgroundColor: '#ccc',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
})
export default Product;