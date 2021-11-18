import React from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { useState, useEffect } from "react";

export default function Login({
  isLoggedIn,
  setIsLoggedIn,
  setAuthorizedGoogleUser,
  authorizedGoogleUser,
  setCurrentUser,
}) {
  const [authUser, setAuthUser] = useState({
    google_id: authorizedGoogleUser.googleId,
    name: authorizedGoogleUser.givenName,
    surname: authorizedGoogleUser.familyName,
    email: authorizedGoogleUser.email,
    image: authorizedGoogleUser.imageUrl,
    username: authorizedGoogleUser.name,
  });

  const createUserFromGoogleInfo = async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/users/${authorizedGoogleUser.google_id}/authorization`
      );
      if (!res.ok) {
        const response = await fetch("http://localhost:3001/users/", {
          method: "POST",
          body: JSON.stringify(authUser),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await res.json();
          setCurrentUser({ ...data.foundUser });
          console.log("SETTINGS OBJECT AFTER UPDATE");
        } else {
          console.log(`Error while updating google user`);
          alert(`Error while Creating google user`);
        }
      } else {
        alert(`User already exists`);
        const data = await res.json();
        setCurrentUser({ ...data.foundUser });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    console.log(isLoggedIn);
  };

  return (
    <div>
      <br></br>
      <br></br>
      {!isLoggedIn ? (
        <div>
          <h1>PLEASE LOGIN</h1>
          <br></br>
          <br></br>
          <GoogleLogin
            clientId="475737513712-o3td3868lb7f9cgl3ql75lqhink9uenk.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={async (response) => {
              setIsLoggedIn(true);
              await setAuthorizedGoogleUser(response.profileObj);
              responseGoogle(response);
              await createUserFromGoogleInfo();
            }}
            onFailure={(response) => {
              setIsLoggedIn(false);
              responseGoogle(response);
            }}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        <div>
          <h1>HERE LOGOUT</h1>
          <br></br>
          <br></br>
          <GoogleLogout
            clientId="475737513712-o3td3868lb7f9cgl3ql75lqhink9uenk.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={(response) => {
              setIsLoggedIn(false);
            }}
          ></GoogleLogout>
        </div>
      )}{" "}
      <br></br>
      <br></br>
    </div>
  );
}
