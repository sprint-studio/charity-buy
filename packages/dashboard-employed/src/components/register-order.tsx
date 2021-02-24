import React, { useState } from "react";

type RegisterOrderProps = {
  onSubmit: (orderId: string) => void;
  children?: any;
};

const RegisterOrder: React.FC<RegisterOrderProps> = (
  props: RegisterOrderProps
) => {
  const [orderId, setOrderId] = useState("");
  return (
    <form
      className="flex flex-col space-y-1"
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit(orderId);
      }}
    >
      <div className="flex flex-col space-y-1">
        <label className="text-gray-600 font-medium text-xs">Order id</label>
        <input
          type="text"
          name="orderId"
          id=""
          className="px-4 py-2 border rounded"
          required
          onChange={(event) => setOrderId(event.target.value)}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-green-800 text-white rounded font-semibold text-sm"
      >
        Save order
      </button>
    </form>
  );
};

export default RegisterOrder;
