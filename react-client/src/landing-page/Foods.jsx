// is going to dynamically display different images 4
// at a time
export default function FoodsSlide(){
    return (
        <div className="grid grid-cols-4 gap-2 border-4 border-green-500 px-10 mb-9">
            <img  src="./images/joloff-rice-with-dodo.jpg" alt="Picture of jollof rice with fried plantain" />
            <img  src="./images/egusi-and-eba.jpg" alt="Picture of egusi with eba" />
            <img  src="./images/oha-soup.jpg" alt="Picture of oha soup" />
            <img  src="./images/swallow-with-fufu.jpg" alt="Picture of a soup with fufu"/>
        </div>
    )
}