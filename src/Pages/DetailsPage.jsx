import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const DonationDetails = () => {
  const { clothes, user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

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
         <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{clothes.title}</h1>
        <p className="text-gray-700 mt-2">{clothes.description}</p>
        <p className="mt-4">
          <strong>Start Date:</strong> {clothes.startDate}
        </p>
        <p>
          <strong>End Date:</strong> {clothes.endDate}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Donation Form</h2>
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
