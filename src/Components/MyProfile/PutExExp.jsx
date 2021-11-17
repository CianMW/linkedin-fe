import { fetchSinglUserExp } from "../../lib";

const PutExExp = async (id, user, lgShow, setLgShow, expId, setExpId) => {
  const url = `https://striveschool-api.herokuapp.com/api/profile/${user}/experiences/${id}`;
  console.log(id, user);
  try {
    let exp = await fetchSinglUserExp(url);
    console.log(exp);

    setLgShow(true);
    setExpId(exp._id);
  } catch (error) {
    console.error(error);
  }
};

export default PutExExp;
