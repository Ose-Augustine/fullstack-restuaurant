// Display a random food and button for more 
// About the food
export default function FoodInfo(){
    return (
        <div className="bg-gray-200  relative h-screen flex">
            
            <div className="h-52 w-52 rounded-full bg-red-700 absolute right-36 top-6"></div>
            <div className="absolute top-32 right-64">
                <img className="h-96" src="./images/italian-seafood-pasta.jpg" alt="Picture of italian seafood pasta" />
            </div>
            <div className="absolute bottom-8 left-40 h-96 w-96 p-12 bg-white flex flex-col justify-evenly">
                {/* header to change according to category of food displayed*/}
                <header className="font-semibold text-4xl">Breakfast</header>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Velit beatae iure, vitae, nobis atque tempora, 
                    eveniet mollitia et nesciunt odit.
                    Blanditiis at temporibus autem labore obcaecati assumenda dignissimos nihil.
                </p>
                <button className="bg-red-500 text-white font-semibold rounded-lg self-start p-4">Learn more</button>
            </div>
        </div>
    )
}