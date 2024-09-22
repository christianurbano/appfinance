import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import FundsItem from "../components/FundsItem";
import api from "../services/api";

export default function Funds(){
    const[funds, setFunds]=useState([])
    useEffect(() =>{
        const fetchStocks= async()=>{
            try{
                const response = await api.get('funds')
                setFunds(response.data.data)
            }catch(e){
                console.log(e)
            }
        }
        fetchStocks();
    },[])
    return(
        <FlatList
            data={funds}
            keyExtractor={(item)=> item.id.toString()}
            renderItem={({item})=> <FundsItem 
                                        name={item.name} 
                                        type={item.type}
                                        profitability={item.profitability} 
                                        minimumValue={item.minimumValue}/>}
        />
    )
}