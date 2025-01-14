import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './Components/HomePage';
import Transit from './Components/Transit';
import Admin from './Components/Admin';
import LoanAmtCreation from './Components/LoanAmtCreation';
import AdminMenu from './Components/AdminMenu';
import CustomerList from './Components/CustomerList';
import LoanCalculator from './Components/LoanCalculator';
import UpdateTransactionDetails from './Components/UpdateTransactionDetails';
import ChooseCustomerName from './Components/ChooseCustomerName';
import StaffDetailsForm from './Components/StaffDetails';
import StaffLoginPage from './Components/StaffLoginPage';
import Adminchange from './Components/AdminPasswordChange'
import AdminUsernameChange from './Components/AdminUsernameChange';
import TypeOfLoan from './Components/TypeOfLoan';
import AdminHome from './Components/AdminHome'

function App() {
  return (
    <div>
        <Router basename='Finance-management'>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/adminmenu" element={<AdminMenu/>}/>
            <Route path="/loanamount" element={<TypeOfLoan/>} />
            <Route path='/customerlist' element={<CustomerList/>}/>
            <Route path='/transit' element={<Transit/>}/>
            <Route path='/home' element={<AdminHome/>}/>
            <Route path='/transactions' element={<ChooseCustomerName/>}/>
            <Route path='/loancalculator' element={<LoanCalculator/>}/>
            <Route path='/transit/update-details' element={<UpdateTransactionDetails/>}/>
            <Route path='/staffdetails' element={<StaffDetailsForm/>}/>
            <Route path='/staff-login' element={<StaffLoginPage/>}/>
            <Route path='/admin/updatepassword' element={<Adminchange/>} />
            <Route path='/admin/updateusername' element={<AdminUsernameChange/>}/>
            <Route path='/loan/personal' element={<LoanAmtCreation name="Personal"/>} />
            <Route path='/loan/vehicle' element={<LoanAmtCreation name="Vehicle"/>} />
            <Route path='/loan/education' element={<LoanAmtCreation name="Education"/>} />
            <Route path='/adminhome' element={<AdminHome/>}/>
          </Routes>
        </Router>      
    </div>
  );
}

export default App;
