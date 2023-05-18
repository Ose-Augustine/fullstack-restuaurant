import { useEffect, useState } from "react";
import getAPIData from "../helpers/api-connection";
import DrinksIndex from "../drinks/index";

export default function FoodsMainComp(){
    const [foods,setFoods] = useState([]); 

    const API_URL = "http://localhost:3000/foods"; 

    useEffect(() => {
        getAPIData(API_URL).then(items => setFoods(items));
        },[]
    )

    return (
        <>
            <DrinksIndex items = {foods} />
        </>
    )

}