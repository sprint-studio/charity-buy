import React from "react";
import RegisterOrder from "../components/register-order";

const RegisterOrderPage: React.FC = (props) => {
  return (
    <div className="flex flex-col space-y-3">
      <h2 className="">Register new order</h2>
      <div className="w-2/4">
        <RegisterOrder
          onSubmit={(orderId) => console.log(orderId)}
        ></RegisterOrder>
      </div>
    </div>
  );
};

export default RegisterOrderPage;
