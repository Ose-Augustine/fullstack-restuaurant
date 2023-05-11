import axios from "axios"
import { useState } from "react";

export default function DrinksIndex(){
    const [drinks, setDrinks] = useState(null)
    async function getDrinks(){
        try {
            const response = await axios.get("http://localhost:3000/drinks"); 
            const data = response.data; 
            setDrinks([...data]);
            console.log(drinks); 
        } catch (err){
            console.log(err); 
        }
    }
    return(
        <>
            <div>This is the drinks page</div>
            <button onClick={getDrinks}>see drinks</button>
        </>
    )
}