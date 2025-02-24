import React, { useState, useEffect, useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const DonationDetails = () => {
  const data = useLoaderData()
  const {image,title,description,contactInfo,division,status} = data
  const { clothes, user ,setLoading} = useContext(AuthContext);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  },[]);

  const [formData, setFormData] = useState({
    quantity: "",
    itemType: "",
    pickupLocation: "",
    notes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We will reach your destination soon.");
    setFormData({
      quantity: "",
      itemType: "",
      pickupLocation: "",
      notes: "",
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 h-[450px] mt-4">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className=" text-xl lg:text-5xl font-bold">{title}</h1>
      <p className="py-6 text-xl font-semibold">
       {description}
      </p>
      <p className="">
      <span className="text-xl font-semibold text-blue-600">Contact:</span> <span className="text-red-400"> {contactInfo}</span>
      </p>
      <p className="py-2">
        <span className="text-xl font-semibold text-blue-600">Status:</span> <span
        className={
          status === "Ongoing"?
          'bg-green-400 border text-white p-1 rounded-md':'bg-gray-300 border p-1 rounded-md text-gray-100'
        }
        >{status}</span>
      </p>
      <p className="">
      <span className="text-xl font-semibold text-blue-600">Division:</span> <span className="text-red-400"> {division}</span>
      </p>
      
    </div>
  </div>
</div>
    <div className="p-6">
      <form onSubmit={handleSubmit} className="bg-white p-4 w-full  border-r-2 border-l-2 border-t-2 border-b-2 border-blue-500 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Donation Form</h2>
        <div className="mb-4">
          <label htmlFor="quantity" className="block font-medium">
            Quantity of Items
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            placeholder="e.g., 2 jackets, 3 blankets"
            className="w-full border rounded p-2 mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="itemType" className="block font-medium">
            Item Type
          </label>
          <input
            type="text"
            id="itemType"
            name="itemType"
            value={formData.itemType}
            onChange={handleInputChange}
            placeholder="e.g., blanket, jacket, sweater"
            className="w-full border rounded p-2 mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pickupLocation" className="block font-medium">
            Pickup Location
          </label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleInputChange}
            placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
            className="w-full border rounded p-2 mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="notes" className="block font-medium">
            Additional Notes (optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Any specific instruction?"
            className="w-full border rounded p-2 mt-1"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
    <Footer></Footer>
    </div>
   
  );
};

export default DonationDetails;
