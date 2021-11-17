export const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThhZDQyYTNhZTFlMzAwMTUwZmZjM2MiLCJpYXQiOjE2MzY0ODgyMzQsImV4cCI6MTYzNzY5NzgzNH0.e1_gaWWn7P8VROpB1TTGwkaUPTrUxhDoJFppEtRt5x0"
export const me = "618ad42a3ae1e300150ffc3c"
// FETCH USER PROFILES
export const fetchInfo = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization:token,
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(`Here is the USERDATA`, data);
      return data;
    } else {
      console.log(`Ooops we got an error while fetching response`);
    }
  } catch (error) {
    console.error(error);
  }
};


// FETCH USER EXPERIENCES

export const fetchUserExp = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization:token,
      },
    });
    if (response.ok) {
      const data = response.json();
      console.log(`Here is your data`, data);
      return data;
    } else {
      console.log(`Ooops we got an error while fetching response`);
    }
  } catch (error) {
    console.error(error);
  }
};

//POST

export const postUserExp = async (url, e, exp) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(exp),
      headers: {
        Authorization:token,
      },
    });
    if (response.ok) {
      fetchUserExp(url);
      // alert("POST was a success");
    } else {
      console.log(`Ooops we got an error while fetching response`);
      alert(`Ooops we got an error while fetching response`);
    }
  } catch (error) {
    console.error(error);
  }
};

// FETCH SINGLE EXPERIENCE

export const fetchSinglUserExp = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization:token,
      },
    });
    if (response.ok) {
      const data = response.json();
      console.log(`Here is your data`, data);
      return data;
    } else {
      console.log(`Ooops we got an error while fetching response`);
    }
  } catch (error) {
    console.error(error);
  }
};

// PUT SINGLE EXPERIENCE

// export const putSinglUserExp = async (url, exp) => {
//   // e.preventDefault(e);
//   try {
//     const response = await fetch(url, {
//       method: "PUT",
//       body: JSON.stringify(exp),
//       headers: {
//         Authorization:token,
//       },
//     });
//     console.log(`experience response ------------`, response)
//     if (response.ok) {
//       fetchUserExp(url)
//     } else {
//       console.log(`Ooops we got an error while fetching response`);
//     }
//   } catch (error) {
//     console.error(`we caught you`, error);
//   }
// };




// DELETE SINGLE EXPERIENCE

export const deleteSingleUserExp = async (user, expId, fetchExp, setLgShow) => {
  const url = `https://striveschool-api.herokuapp.com/api/profile/${user}/experiences/${expId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization:token,
      },
    });
    if (response.ok) {
      fetchUserExp(url);
      console.log("Deleted successfully");
      fetchExp();
      setLgShow(false);
    } else {
      console.log(`Ooops we got an error while fetching response`);
      alert("Ooops we got an error while fetching response");
    }
  } catch (error) {
    console.error(error);
  }
};

// USER PROFILES
// FETCH
// date 

export const postTimer = (x) => {
  const postedDateISO = x;
  const postedDate = new Date(postedDateISO).getTime();
  const dateToday = new Date().getTime();
  const milliseconds = Math.abs(dateToday - postedDate).toString();

  const minutes = parseInt(milliseconds / 1000 / 60);
  const hours = parseInt(minutes / 60);
  const days = parseInt(hours / 24);
  const weeks = parseInt(days / 7)
  let date;

  if (weeks > 0) {
    //console.log(${days}d);
    date = `${weeks}w`
   } else if (days > 0) {
    date = `${days}d`;
  } else if (days == 0 && hours >= 1) {
    //console.log(${hours}hr);
    date = `${hours}hr`;
  } else if (hours < 1) {
    //console.log(${minutes}min);
    date = `${minutes}min`;
  }
  return date;
};

// DELETE POST

export const deletePost = async (id , fetchFeed) => {
  const url = `https://striveschool-api.herokuapp.com/api/posts/${id}`;

  console.log(token)
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization:token,
      },
    });
    if (response.ok) {
        fetchFeed()

      console.log("Deleted successfully");

    } else {
      alert("Ooops we got an error while fetching response");
    }
  } catch (error) {
    console.error(error);
  }
};

