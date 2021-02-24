import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import OrdersSummaryPage from "../pages/orders-summary-page";
import RegisterOrderPage from "../pages/register-order-page";
import TrackLinkPage from "../pages/track-link-page";

const Dashboard: React.FC = (props): JSX.Element => (
  <div className="w-full h-full flex bg-white rounded shadow">
    <div className="w-56 border-r">
      <ul className="border-b">
        <li className="flex">
          <NavLink className="h-full w-full p-5" to="/orders-summary" activeClassName="bg-gray-100 rounded">
            Orders Summary
          </NavLink>
        </li>
        <li className="flex">
          <NavLink className="h-full w-full p-5" to="/track-link" activeClassName="bg-gray-100 rounded">
            Track link
          </NavLink>
        </li>
        <li className="flex">
          <NavLink className="h-full w-full p-5" to="/register-order" activeClassName="bg-gray-100 rounded">
            Register Order
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="p-10 flex-1">
      <Switch>
        <Route path="/orders-summary">{OrdersSummaryPage}</Route>
        <Route path="/track-link">{TrackLinkPage}</Route>
        <Route path="/register-order">{RegisterOrderPage}</Route>
      </Switch>
    </div>
  </div>
);

export default Dashboard;
