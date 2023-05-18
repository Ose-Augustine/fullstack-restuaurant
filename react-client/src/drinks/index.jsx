/* eslint-disable react/prop-types */
import { useRecoilState } from "recoil"
import { orderListState } from "../recoil_state"


export default function DrinksIndex({ items }){

    const [orderLIst, setOrderList]= useRecoilState(orderListState);    

    function handleClick (e)  {
        
        const mainContainer = e.currentTarget.parentNode.parentNode; 
        const drinkName = mainContainer.querySelector('header').textContent; 
        const price = mainContainer.querySelector('span').textContent;
        const selectedDrink = [drinkName, price]
        setOrderList((oldList) => [...oldList, selectedDrink ])
    }
    
    return(
        <>  
            <div>Thisis teh value of recoil {orderLIst}</div>
            <article className="grid grid-cols-5 gap-2 p-4">
                {items.map(item => (
                    <section className="rounded-lg shadow-xl flex flex-col justify-between" key={item.id}>
                        <img className="rounded-t-lg" src={item.image}/>
                        <main className="p-4">
                            <header className="font-semibold mb-3">{item.name}</header>
                            <p className="mb-2">{item.info}</p>
                            <footer className="flex justify-between">
                                <button className=" bg-red-400 font-bold text-white rounded-lg px-4" onClick={handleClick}>order</button>
                                <span className="text-red-400 font-bold flex justify-between">${item.price}</span>
                            </footer>
                        </main>
                    </section>
                )
                )}
            </article>
        </>
    )
}