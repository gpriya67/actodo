import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup(props) {
  const { user, setUser } = props;

  const [userN, setUserN] = useState("");
  const [userP, setUserP] = useState("");

  const navigate = useNavigate()

  const handleChangeN = (e) => {
    setUserN(e.target.value);
  };

  const handleChangeP = (e) => {
    setUserP(e.target.value)
  };


  const handleAdd = () =>{
    setUser([...user,{userName:userN,password:userP}])
    navigate('/')

  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#efefef] p-10 border rounded-md">
        <h1 className="text-3xl font-medium ">Hey Hi</h1>
        <p>Sign up here :)</p>
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
          <input
            type="text"
            placeholder="Confirm Password"
            className=" w-52 border-black p-1 bg-transparent border rounded-md"
          />

          <button className=" bg-[#fca201] w-24 p-1 rounded-md" onClick={handleAdd}>Sign Up</button>
          <p>
            Already have an account ?{" "}
            <Link to={"/"} className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
