
export default function Hero(){
    return(
        <>
            <div className="h-screen  flex flex-col">
                <header className="h-1/3">Logo</header>
                <main className="flex  h-2/3 p-7">
                    <div className="flex flex-col justify-evenly w-1/2">
                        <div>
                            <p className="text-red-400 text-8xl ">Dining</p>
                            <p className="text-7xl">With Chef Jacques</p>
                        </div>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit <br /> Non corporis temporibus 
                            perspiciatis! Eius eum quaerat <br />
                            cum ratione perferendis aperiam.
                        </p>
                    </div>
                    <div className=" w-1/2 flex justify-center">
                        <img className=" h-80 w-80 object-cover rounded-full"src="./hero-chef.png" alt="A baker chef in a restaurant" />
                    </div>
                </main>
            </div>
        </>
        
    )
}