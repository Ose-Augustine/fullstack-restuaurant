import Categories from "./components/landing-page/Categories"
import FoodsSlide from "./components/landing-page/Foods"
import FoodInfo from "./components/landing-page/Info"
import Hero from "./components/landing-page/hero"
import New from "./components/Orders/New"
function App() {
  return (
    <>
      <Hero />
      <FoodsSlide />
      <FoodInfo />
      <Categories />
      <New />
    </>
  )
}

export default App
