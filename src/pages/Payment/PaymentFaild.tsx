
import {  Link } from "react-router-dom";


const PaymentFailed = () => {



  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Failed Booking Confirmation</h1>
      <p className="text-lg text-red-500 mb-4">
      Payment Faild! please try again
      </p>
    
      <p> Visit<span className="mx-2">
          <Link className=" text-blue-400" to='/bikeList'>Bike List</Link>
          </span></p>
    </div>
  );
};

export default PaymentFailed;
