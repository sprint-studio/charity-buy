import React from "react";
import OrdersSummary from "../components/orders-summary";

const OrdersSummaryPage: React.FC = (props) => (
  <div className="flex flex-col space-y-3">
    <h2 className="">Riepilogo ordini</h2>
    <OrdersSummary orders=""></OrdersSummary>
  </div>
);

export default OrdersSummaryPage;
