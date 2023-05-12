export default function Categories(){
    return (
        <article className=" h-screen bg-black">
            {/* the div below would be a marque with dynamic images per component */}
            <div className="h-1/3 flex justify-evenly bg-black">
                <img className="" src="./images/pizza-with-tomatoes.jpg" alt="A picture of pizza with tomatoes" />
                <img className="" src="./images/pizza-with-tomatoes.jpg" alt="A picture of pizza with tomatoes" />
                <img className="" src="./images/pizza-with-tomatoes.jpg" alt="A picture of pizza with tomatoes" />
            </div>
            <main className="grid grid-cols-3 gap-4 h-2/3 p-10 [&>*]:bg-white [&>*]:rounded-lg">
                <section className=" bg-white rounded-lg  p-5 flex flex-col justify-evenly">
                    <span className="bg-red-600 text-white text-xl font-semibold h-16 w-16 pt-4 rounded-full text-center">1</span>
                    <header className="">Cat 1</header>
                    <main>text for cat one</main>
                    <a href="#">Learn more</a>
                </section>
                <section className="p-5 flex flex-col justify-evenly">
                    <span className="bg-red-600 text-white text-xl font-semibold h-16 w-16 pt-4 rounded-full text-center">1</span>
                    <header>Cat 2</header>
                    <main>Text for cat 2</main>
                    <a href="#">Learn more</a>
                </section>
                <section className="p-5 flex flex-col justify-evenly">
                    <span className="bg-red-600 text-white text-xl font-semibold h-16 w-16 pt-4 rounded-full text-center">1</span>
                    <header>Cat 3</header>
                    <main>Text for cat 3</main>
                    <a href="#">Learn more</a>
                </section>
                <section className="p-5 flex flex-col justify-evenly">
                    <span className="bg-red-600 text-white text-xl font-semibold h-16 w-16 pt-4 rounded-full text-center">1</span>
                    <header>cat 4</header>
                    <main>text for cat 4</main>
                    <a href="#">Learn more</a>
                </section>
                <section className="p-5 flex flex-col justify-evenly">
                    <span className="bg-red-600 text-white text-xl font-semibold h-16 w-16 pt-4 rounded-full text-center">1</span>
                    <header>cat 5</header>
                    <main>text for cat 5</main>
                    <a href="#">Learn more</a>
                </section>
                <section className="p-5 flex flex-col justify-evenly">
                    <span className="bg-red-600 text-white text-xl font-semibold h-16 w-16 pt-4 rounded-full text-center">1</span>
                    <header>cat 6 </header>
                    <main>text for cat 6</main>
                    <a href="#">Learn more</a>
                </section>
            </main>
        </article>
    )
}