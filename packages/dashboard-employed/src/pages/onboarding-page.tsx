import React from "react";

const OnboardingPage: React.FC = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-2/4 flex flex-col items-center space-y-8">
        <div className="text-center">
          <h1 className="text-3xl text-white font-bold">
            Benvenuto in GreenShares Davide
          </h1>
          <p className="text- text-white">
            Ti invitiamo a selezionares le cause che vuoi sostenere
          </p>
        </div>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          {new Array(5).fill(1).map((item) => (
            <label className="px-5 py-4 flex items-start flex-grow space-x-5 rounded bg-white text-gray-800 border-2 shadow-inner hover:border-yellow-800">
              <input
                type="checkbox"
                name="role"
                value="journalist"
                required
                className="m-1 form-radio ng-dirty ng-valid ng-touched"
              ></input>
              <div className="flex flex-col space-y-1">
                <span className="font-sembold text-gray-800">Giornalista</span>
                <p className="text-sm text-gray-600">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>
      <button className="m-5 px-16 py-2 bg-white font-medium text-green-800 text-medium text-lg rounded sticky bottom-0 shadow">
        Procedi
      </button>
    </div>
  );
};

export default OnboardingPage;
