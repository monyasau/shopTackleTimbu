import { useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native"
import Product from "./Product";


const ProductsScreen = () => {
    const [storeData, setStoreData] = useState({ items: [] })
    const fetchStoreData = async () => {
        let storeDataJson = await fetch("https://api.timbu.cloud/products?organization_id=4da78e0dd7ab42988da4e8014490cff7&Appid=67HGWYE946GG1CI&Apikey=5994a513c2084c5e9fc5294a8ee5908620240705095509566488&reverse_sort=false&page=1&size=19").then((response) => response.json());
        return storeDataJson;
    }
    const getStoreData = async () => {
        const data = await fetchStoreData();
        setStoreData(data);
    }
    useEffect(() => {
        getStoreData();

    }, [])
    return (
        <ScrollView contentContainerStyle={styles.productsContainer}>
            <View style={styles.contentContainer}>
                <Text style={{ textAlign: "left", width: "95%" }}>Products on shelf</Text>
                {storeData.items.map((item) => (
                    <Product productData={item} key={item.id} />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    productsContainer: {
        alignItems: "center",
        marginHorizontal:"auto",
        width: "95%",
    },
    contentContainer: {
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
        flexDirection: "row",
    }
})

export default ProductsScreen;