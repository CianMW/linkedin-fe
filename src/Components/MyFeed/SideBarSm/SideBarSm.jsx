import FirstSideBar from "./FirstSideBar"
import SecondSideBar from "./SecondSideBar"


const SideBarSm = ({ user }) => {
  console.log('i am the user', user)
  return (
    <>
      {/*-------First SideBarSm Section------*/}
      <FirstSideBar user={user}/>
      {/*-------Second SideBarSm Section------*/}
      <SecondSideBar />
    </>
  );
};

export default SideBarSm;
