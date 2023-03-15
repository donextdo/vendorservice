import { SetStateAction, useState } from "react";
import Login from "./Login";
import Register from "./Register";

const IndexPage = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab: SetStateAction<string>) => {

    setActiveTab(tab);
  };

  return (
    <div className="max-w-lg mx-auto border-2 border-b-0 md:shadow-sm mt-20 mb-10">
      <div className="tabs mt-16 mb-10">
        <div className="max-w-lg container flex mx-auto  justify-center">
          <div className="pr-5">
            <button
              className={`text-xl font-semi-bold  text-gray-400 active:text-gray-800 focus:outline-none focus:text-gray-800 tab ${
                activeTab === "tab1" ? "active" : ""
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              LOGIN
            </button>
          </div>
          <div>
            <button
              className={`text-xl font-semi-bold text-gray-400 active:text-gray-800 focus:outline-none focus:text-gray-800  tab ${
                activeTab === "tab2" ? "active" : ""
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "tab1" && (
          <div>
            <Login
              onSubmit={function (values: {
                usernameoremail: string;
                password: string;
              }): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <Register
              onSubmit={function (values: {
                email: string;
                password: string;
              }): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
