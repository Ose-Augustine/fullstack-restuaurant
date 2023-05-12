import DrinksIndex from "./index"; 
import getAPIData from "../helpers/api-connection";
import { useEffect, useState } from "react";

export default function DrinksMainComp (){
    const [drinks, setDrinks] = useState([]);

    const API_URL = "http://localhost:3000/drinks"; 
    useEffect(() => {
        getAPIData(API_URL).then(items => setDrinks(items));
        },[])
    return (
        <>
            <div>this is the drinks main page right</div>
            <DrinksIndex items={drinks} />
        </>
    )
}