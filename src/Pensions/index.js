import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import api from "../services/api";
import PensionsItem from "../components/PensionsItem";

export default function Pensions(){
    const[pensions, setPensions]=useState([])

    useEffect(() =>{
        const fetchStocks= async()=>{
            try{
                const response = await api.get('pension')
                setPensions(response.data.data)
            }catch(e){
                console.log(e)
            }
        }
        fetchStocks();
    },[])

    return(
        <View>
            <FlatList
                data={pensions}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <PensionsItem 
                                            name={item.name} 
                                            type={item.type}
                                            profitability={item.profitability} 
                                            minimumValue={item.minimumValue}/>}
            />
        </View>
    )
}