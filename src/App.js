import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/navbar';
import Home from './pages/Home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import AddStudent from './users/AddStudent'
import EditStdent from './users/EditStdent';
import ViewStdent from './users/ViewStdent';



function App() {
  return (

    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addstudent" element={<AddStudent/>}/>
        <Route exact path="/editstudent/:id" element={<EditStdent/>}/>
        <Route exact path="/viewstudent/:id" element={<ViewStdent />} />
       
      
        </Routes>
      </Router>
      
    </div>
  
  );
}

export default App;
