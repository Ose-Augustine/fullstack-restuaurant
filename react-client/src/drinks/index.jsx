/* eslint-disable react/prop-types */

export default function DrinksIndex({ drinks }){
    return(
        <>
            <div>This is the drinks index page</div>
            <div>
                {drinks.map(drink => (
                    <div key={drink.id}>{drink.name}</div>
                )
                )}
            </div>
        </>
    )
}