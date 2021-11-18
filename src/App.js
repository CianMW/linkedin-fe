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

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authorizedGoogleUser, setAuthorizedGoogleUser] = useState(false);

  const [authorizedCookie, setAuthorizedCookie] = useState();

  // ******************************* Google Auth *********************************
  function parseCookies() {
    try {
      var list = {},
        rc = document.cookie;

      rc &&
        rc.split(";").forEach(function (cookie) {
          var parts = cookie.split("=");
          list[parts.shift().trim()] = decodeURI(parts.join("="));
        });

      setAuthorizedCookie(list);
      if (list.user_id) {
        console.log(`------ failed`);
        setIsLoggedIn(true);
      } else {
        console.log(`------ after the failed`);
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    parseCookies();
    console.log(`=================== COOKISE ===================`);
    console.log(authorizedCookie);
    console.log(`=================== COOKISE ===================`);
    // console.log(`i am the currentUser`, currentUser);
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

          <Route path="/home" exact component={Home} />
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
