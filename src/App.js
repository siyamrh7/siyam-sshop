import Navbar from "./screens/Navbar";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from "./screens/Home";
import Footer from "./screens/Footer";
import Detail from "./screens/Detail";
import Register from './screens/Register'
import Login from "./screens/Login"
import Regular from "./screens/Regular";
import Contact from "./screens/Contact";
import Blog from './screens/Blog';
import BlogSingle from './screens/BlogSingle';
import ForgetPass from "./screens/ForgetPass";
import Shop from "./screens/Shop";
import Cart from "./screens/Cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Navbar/>
   <Route exact path="/" component={Home} />
   <Route exact path="/detail" component={Detail} />
   <Route exact path="/register" component={Register}/>
   <Route exact path="/regular" component={Regular}/>
   <Route exact path="/blog" component={Blog}/>
   <Route exact path="/login" component={Login}/>
<Route exact path="/forgetpassword" component={ForgetPass}/>
<Route exact path="/cart" component={Cart}/>
<Route exact path="/contact" component={Contact} />

<Route exact path="/shop" component={Shop}/>


  <Route exact path="/blogsingle" component={BlogSingle}/>
   
   <Footer/>
    
   </BrowserRouter>
    </div>
  );
}

export default App;
