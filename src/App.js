import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MyProfile from "./Components/MyProfile";
import MyFooter from "./Components/MyFooter";
import Home from "./Components/MyFeed/Home";
import {useState, useEffect} from "react"
import Search from "./Components/MyFeed/Search"

function App() {

    const [currentUser, setCurrentUser] = useState({})
    const [search, setSearch] = useState("")
    const [searchType, setSearchType] = useState("")
   

    useEffect(() => {
      console.log(`i am the currentUser`,currentUser)
    },[currentUser])

  return (
    <div className="App">
    <Router>
      <NavBar currentUser={currentUser} setSearchType={setSearchType} setSearch={setSearch}/>
      <Route path="/home" exact component={Home} />
      <Route path="/search/:id" exact component={Search} />

      <Route path="/profile/:id" exact render={(props) => <MyProfile {...props} setCurrentUser={setCurrentUser} />} /> 

      <MyFooter />
    </Router>
    </div>
  );
}

export default App;
