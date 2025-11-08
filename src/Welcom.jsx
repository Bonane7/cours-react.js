import { useState } from "react";

export default function Welcom() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    // if (setEmail && setPassword === "") {
    //   return console.log("please enter your Email end Password");
    // }

    e();
    // console.log(email, password);
  }

  return (
    <div>
      <div className="bg-gray-500 w-1/3 mt-10">
        <h1 className="text-2xl w-full text-center font-bold text-red-400 pt-4 bg-black">Show your Email and Password</h1>
        <div className="grid grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 w-full p-2"
          >
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-gray-800  px-5 py-2 text-white text-center"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              className="bg-gray-800  px-5 py-2 text-white text-center"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button className="bg-black text-white px-5 rounded-md py-2">
              Login
            </button>
          </form>

          <div className="bg-black w-full h-[130px] mt-2 flex flex-col gap-2 p-2">
            <span className="text-green-400">Email: {email} </span>
            <span className="text-green-400">PassWorld: {password} </span>
          </div>
        </div>
      </div>
    </div>
  );
}
