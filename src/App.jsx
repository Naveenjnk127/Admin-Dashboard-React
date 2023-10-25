import Topbar from './Components/Topbar/Topbar';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import UserList from './Pages/UserList/UserList';
import User from './Pages/User/User';
import NewUser from './Pages/NewUser/NewUser';
import ProductList from './Pages/ProductList/ProductList';
import Product from './Pages/Product/Product';
import NewProduct from './Pages/NewProduct/NewProduct';
import Reports from './Pages/Reports/Reports';
import Transactions from './Pages/Transactions/Transactions';
import Messages from './Pages/Messages/Messages';
import Analytics from './Pages/Analytics/Analytics';
import Sales from './Pages/Sales/Sales';
import ComingSoon from './Pages/ComingSoon/ComingSoon';

function App() {
  
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product/>} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path='/reports' element={<Reports />}/>
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/analytics' element={<Analytics />}/>
          <Route path='/sales' element={<Sales />}/>
          <Route path='/mail' element={<ComingSoon/>}/>
          <Route path='/feedback' element={<ComingSoon/>}/>
          <Route path='/manage' element={<ComingSoon/>}/>
          <Route path='/analysis' element={<ComingSoon/>}/>
          <Route path='/report' element={<ComingSoon/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
