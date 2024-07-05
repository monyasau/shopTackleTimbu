import { View, Text } from "react-native"

const Product=(productData)=> {
    return (
       <View>
        <Text>{productData.name}</Text>
       </View>
    );
}

export default Product;