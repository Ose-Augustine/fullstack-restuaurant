import DrinksMainComp from './drinks/main';
import FoodsMainComp from './foods/main';
import Index from './landing-page/index';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
          <Link to="/orders/create">create order</Link>
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/drinks" element={<DrinksMainComp />}></Route>
            <Route path="/foods" element={<FoodsMainComp />}></Route>
          </Routes>
      </Router>
    </>
  )
}


