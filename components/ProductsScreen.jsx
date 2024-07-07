import { useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import Product from "./Product";
import SkeletonProduct from './SkeletonProduct';


const ProductsScreen = ({reloadStore}) => {
    const [storeData, setStoreData] = useState({ items: [] })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const getStoreData = async () => {
        try {
            setLoading(true)
            let storeDataJson = await fetch("https://api.timbu.cloud/products?organization_id=4da78e0dd7ab42988da4e8014490cff7&Appid=67HGWYE946GG1CI&Apikey=5994a513c2084c5e9fc5294a8ee5908620240705095509566488&reverse_sort=false&page=1&size=19").then((response) => response.json());
            const data = await storeDataJson;
            setStoreData(data);
            setError(false)
            setLoading(false)
        }
        catch (error) {
            console.log(error);
            setError(true)
            setLoading(false)
        }
    }
    useEffect(() => {
        getStoreData();
    }, []);
    useEffect(() => {
        getStoreData();
    }, [reloadStore]);

    return (

        loading ? <>
            <Text style={{ textAlign: "center", fontSize: 20, backgroundColor: "#e0e0e0", padding: 10, fontWeight: 700 }}>Loading...</Text>
            <ScrollView contentContainerStyle={styles.productsContainer}>
                <View style={styles.contentContainer}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((skeleton) => <SkeletonProduct key={skeleton} />)}
                </View>
            </ScrollView>
        </>
            :
                (error ?
                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:30,fontWeight:"700",color:"red"}}>ERROR</Text>
                        <Text style={{fontSize:20,textAlign:"center"}}>Please, check you internet connection and try again in a moment</Text>
                        <TouchableOpacity></TouchableOpacity>
                    </View>
                    : <ScrollView contentContainerStyle={styles.productsContainer}>
                    <View style={styles.contentContainer}>
                        <Text style={{ textAlign: "left", width: "95%" }}>Products on shelf</Text>
                        {storeData.items.map((item) => (
                            <Product productData={item} key={item.id} />
                        ))}
                    </View>
                </ScrollView>)

    );
}

const styles = StyleSheet.create({
    productsContainer: {
        alignItems: "center",
        marginHorizontal: "auto",
        width: "95%",
        paddingVertical: 10,
    },
    contentContainer: {
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
        flexDirection: "row",
    }
})

export default ProductsScreen;