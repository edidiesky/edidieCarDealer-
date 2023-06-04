import React from "react";
import { useNavigate, Link } from "react-router-dom";
import moment from "moment";
import {  useDispatch } from "react-redux";
export default function Card({ x }) {
  let createddate = moment(x?.createdAt);
  createddate = createddate.format("dddd, MMMM Do YYYY, h:mm:ss a");

  return (
    <tr key={x?._id}>
      <td>{x._id}</td>
      <td>{createddate}</td>
      <td>${x.TotalShoppingPrice}</td>
      <td>
        {x.isPaid ? (
          <span className="tablespan true">Paid</span>
        ) : (
          <span className="tablespan false">Not Paid</span>
        )}
      </td>
      <td>
        {x.isDelivered ? (
          <span className="tablespan true">Delivered</span>
        ) : (
          <span className="tablespan false">Not Delivered</span>
        )}
      </td>
      <td>
        <div className="action">
          <Link className="details" to={`/car-dealership/order-success?orderId=${x?._id}`}>
            See Details
          </Link>
        </div>
      </td>
    </tr>
  );
}
