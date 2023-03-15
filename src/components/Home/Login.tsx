import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {BASE_URL} from './../../../config'
type FormValues = {
  usernameoremail: string;
  password: string;
};

type Props = {
  onSubmit: (values: FormValues) => void;
};

const Login: React.FC<Props> = () => {
  const [usernameoremail, setUsernameoremail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ usernameoremail, password });
    setUsernameoremail("");
    setPassword("");
    var formData= new FormData()
    formData.append('grant_type','password')
    formData.append('client_id','2')
    formData.append('client_secret','sb0wVPPJGaotSBNiM4WlP0fh73HdYiiI9eNeBug3')
    formData.append('username',usernameoremail)
    formData.append('password',password)

    
    axios({
      method: "post",
      url: BASE_URL+"/oauth/token",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
.then((response) => {
  console.log(response.data.access_token);
localStorage.setItem('access',response.data.access_token)
localStorage.setItem('refresh',response.data.refresh_token)
  router.push('/vender')
})
.catch((error) => {
  console.error(error);
});
  };

  return (
    <>
      <div className="border border-t-0 max-w-lg md:shadow-sm mx-auto ">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5 mb-16">
          <div className="mx-2 gap-y-6 gap-x-8 ">
            <div>
              <label
                htmlFor="username-email"
                className="block text-sm text-gray-900 "
              >
                Username or email address *
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="username-email"
                  id="username-email"
                  value={usernameoremail}
                  onChange={(e) => setUsernameoremail(e.target.value)}
                  autoComplete="given-username-email"
                  className="block w-full border-0 py-2 px-3.5 text-gray-900 bg-[#f3f4f7] "
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="password" className="block text-sm text-gray-900">
                Password *
              </label>
              <div className="mt-2.5">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="password"
                  className="block w-full border-0 py-2 px-3.5 text-gray-900 bg-[#f3f4f7]"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 pl-3 flex ">
            <input type="checkbox" className="bg-[#f3f4f7]" />
            <p className="px-3">Remember me</p>
          </div>

          <div className="mx-2 mt-5 mb-10 ">
            <button
              type="submit"
              className=" rounded-md w-full block bg-[#233a95] px-3.5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
