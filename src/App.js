import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MyProfile from "./Components/MyProfile";
import MyFooter from "./Components/MyFooter";
import Home from "./Components/MyFeed/Home";
import { useState, useEffect } from "react";
import Search from "./Components/MyFeed/Search";

// ******************************* Google Auth *********************************
import GoogleLogin from "react-google-login";
import Login from "./Components/login-page/Login";
// ******************************* Google Auth *********************************

function App() {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  // ******************************* Google Auth *********************************

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [imageUrl, setImageUrl] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authorizedGoogleUser, setAuthorizedGoogleUser] = useState(false);

  // ----------------------------------------------------------------
  // const onSuccess = (googleUser) => {
  //   setIsLoggedIn(true);
  //   const profile = googleUser.getBasicProfile();
  //   setName(profile.getName());
  //   setEmail(profile.getEmail());
  //   setImageUrl(profile.getImageUrl());
  // };

  // ******************************* Google Auth *********************************

  useEffect(() => {
    console.log(`i am the currentUser`, currentUser);
  }, [currentUser]);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Router>
          <Route
            path="/"
            exact
            render={(props) => (
              <Login
                {...props}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setAuthorizedGoogleUser={setAuthorizedGoogleUser}
                authorizedGoogleUser={authorizedGoogleUser}
                setCurrentUser={setCurrentUser}
              />
            )}
          />
        </Router>
      ) : (
        <Router>
          <NavBar
            currentUser={currentUser}
            setSearchType={setSearchType}
            setSearch={setSearch}
            setIsLoggedIn={setIsLoggedIn}
          />
          <Route path="/" exact component={Home} />
          <Route path="/search/:id" exact component={Search} />

          <Route
            path="/profile/:id"
            exact
            render={(props) => (
              <MyProfile {...props} setCurrentUser={setCurrentUser} />
            )}
          />

          <MyFooter />
        </Router>
      )}
    </div>
  );
}

export default App;
