import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


function Login(props) {
  const { user } = props;

  const [userN, setUserN] = useState("");
  const [userP, setUserP] = useState("");
  const [rUser, setRUser] = useState(true);



  const navigate = useNavigate()

  const handleChangeN = (e) => {
    setUserN(e.target.value);
  };

  const handleChangeP = (e) => {
    setUserP(e.target.value);
  };

  console.log(user)

   const checkUser = () => {
      let userFound = false;
    user.forEach((item) => {
      if (item.userName === userN && item.password === userP) {
        console.log("Login Successfully");
        userFound = true;
        navigate('/landing',{state:{user:userN}})
      }
    });
     if (userFound === false) {
      console.log("login Failed");
      setRUser(false)
    }

   
  };
 




  return (
    <div className="bg-black p-10">
      <div className="bg-[#efefef] p-10 border rounded-md">
        <h1 className="text-3xl font-medium ">Hey Hi</h1>
        {rUser ? <p>I help you manage your activities after you login :)</p>
 : <p className=" text-red-500 font-medium">
            Please Sign up Before you Login
          </p>}
      
        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            placeholder="UserName"
            value={userN}
            onChange={handleChangeN}
            className=" w-52 border-black p-1 bg-transparent border rounded-md"
          />
          <input
            type="text"
            placeholder="Password"
            value={userP}
            onChange={handleChangeP}
            className=" w-52 border-black p-1 bg-transparent border rounded-md"
          />

          <button
            className=" bg-[#8272da] w-24 p-1 rounded-md"
            onClick={checkUser}
          >
            Login
          </button>
          <p>
            Don't have an account ?{" "}
            <Link to={"/signup"} className="underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
