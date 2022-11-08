
import './App.css';
import Form from './Form';
import Constant from './Constant';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import EventBubbeling from './EventBubbeling';
import SelfApi from './SelfApi';
import Header from './Header';
import PostBankDetail from './PostBankDetail';
import VerifyMobile from './VerifyMobile';
import Dropdown from './Dropdown';
import Pin from './Pin';
import FormValidatation from './FormValidatation';
import FormValidation2 from './FormValidation2';
function App(){
  


  return (
    <div>
    <Header/>
    <BrowserRouter>
    
    <Routes>
     <Route path='/' element={<Form/>}/>
    <Route path='/user' element={<Constant/>}/>
    <Route path='/event' element={<EventBubbeling/>}/> 
    <Route path='/bankdetails' element={<SelfApi/>}/>
    <Route path='/postbankdetails' element={<PostBankDetail/>}/>
    <Route path='/verifymobile' element={<VerifyMobile/>}/>
    <Route path='/dropdown' element={<Dropdown/>}/>
    <Route path='/pincode' element={<Pin/>}/>
<Route path='/formvalidation' element={<FormValidatation/>}/>
<Route path='/formvalidation2' element={<FormValidation2/>}/>
   </Routes>
    </BrowserRouter>
  
   
  
    </div>
  );
  }

export default App;
