import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import api from "../services/api";
import StocksItem from "../components/StocksItem";

export default function Stocks() {
    const [stocks, setStock]= useState([])
    
    useEffect(() =>{
        const fetchStocks= async()=>{
            try{
                const response = await api.get('stocks')
                setStock(response.data.data)
            }catch(e){
                console.log(e)
            }
        }
        fetchStocks();
    },[])

    return(
        <View>
            <FlatList
                data={stocks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <StocksItem 
                                            name={item.name} 
                                            ticker={item.ticker} 
                                            profitability={item.profitability} 
                                            minimumValue={item.minimumValue}/>}
            />
        </View>
    )
}