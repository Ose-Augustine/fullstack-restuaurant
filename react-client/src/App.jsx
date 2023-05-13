import DrinksMainComp from './drinks/main';
import Index from './landing-page/index';
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
          <Link to="/orders/create">create order</Link>
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/drinks" element={<DrinksMainComp />}></Route>
          </Routes>
      </Router>
    </>
  )
}


