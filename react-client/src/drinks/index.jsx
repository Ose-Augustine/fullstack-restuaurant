import axios from "axios"

export default function DrinksIndex(){
    async function getDrinks(){
        try {
            const response = await axios.get("http://localhost:3000/drinks"); 
            console.log(response) ; 
        } catch (err){
            console.log(err); 
        }
    }
    getDrinks(); 
    return(
        <>
            <div>This is the drinks page</div>
        </>
    )
}