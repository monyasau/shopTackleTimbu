import { useEffect, useState } from "react";
import { Text, View } from "react-native"
import Product from "./Product";


const  ProductsScreen=()=> {
    const  [storeData, setStoreData] = useState({items:[]})
    const fetchStoreData=async()=>{
        let storeDataJson=await fetch("https://api.timbu.cloud/products?organization_id=4da78e0dd7ab42988da4e8014490cff7&Appid=67HGWYE946GG1CI&Apikey=5994a513c2084c5e9fc5294a8ee5908620240705095509566488&reverse_sort=false&page=1&size=10").then((response)=>response.json());
        return storeDataJson;
    }
    const getStoreData = async () => {
        const data = await fetchStoreData();
        setStoreData(data);
    }
    useEffect(()=>{ 

        getStoreData();

    },[])
    return (
       <View>
        {storeData.items.map((item)=>(
            <Product key={item.id} ProductData={item}/>
        ))}
        </View>
    );
}

export default ProductsScreen;