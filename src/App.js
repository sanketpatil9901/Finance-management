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
import TransactionDeatails from './Components/TransactionDetails';
import AdminMenu from './Components/AdminMenu';
import CustomerList from './Components/CustomerList';
import LoanCalculator from './Components/LoanCalculator';
import UpdateTransactionDetails from './Components/UpdateTransactionDetails';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/adminmenu" element={<AdminMenu/>}/>
            <Route path="/loanamount" element={<LoanAmtCreation/>} />
            <Route path='/customerlist' element={<CustomerList/>}/>
            <Route path='/transit' element={<Transit/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/transactions' element={<TransactionDeatails/>}/>
            <Route path='/loancalculator' element={<LoanCalculator/>}/>
            <Route path='/transit/update-details' element={<UpdateTransactionDetails/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
