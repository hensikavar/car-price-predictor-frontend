import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../assets/logomain.png';

const FormPage = () => {
    const [formData, setFormData] = useState({
        year: '',
        presentPrice: '',
        kmsDriven: '',
        sellerType: '',
        fuelType: '',
        transmission: '',
        owner: ''
    });
    const navigate = useNavigate();
    const numberValidation = /^[0-9]*$/;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { year, presentPrice, kmsDriven, sellerType, fuelType, transmission, owner } = formData;

        if (!year || !presentPrice || !kmsDriven || sellerType === '' || fuelType === '' || transmission === '' || owner === '') {
            toast.error('Please fill all fields!', {
                theme: 'dark',
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const price = data.predictedPrice.in

            navigate('/result', { state: { ...formData, predictedPrice: data.predictedPrice } });
        } catch (error) {
            toast.error('Failed to fetch predicted price. Please try again.', {
                theme: 'dark',
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if ((name === 'year' || name === 'kmsDriven') && !numberValidation.test(value)) {
            return;
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-[#004aad] text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <div className="flex items-center space-x-3">
                        <img src={Logo} alt="Vroom Value Logo" className="w-10 h-10" />
                        <h1 className="text-3xl font-bold">Vroom Value</h1>
                    </div>
                </div>
            </header>

            {/* Form Section */}
            <main className="flex flex-col items-center justify-center py-16 px-6">
                <section className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                        Car Price Predictor
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Year of Model */}
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2 text-center">Year of Model</label>
                                <input
                                    type="text"
                                    name="year"
                                    value={formData.year}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    placeholder="e.g., 2015"
                                    maxLength={4}
                                />
                            </div>

                            {/* Present Price */}
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2 text-center">Present Price (₹)</label>
                                <input
                                    type="text"
                                    name="presentPrice"
                                    value={formData.presentPrice}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    placeholder="e.g., 500000"
                                />
                            </div>

                            {/* Kms Driven */}
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2 text-center">Kms Driven</label>
                                <input
                                    type="text"
                                    name="kmsDriven"
                                    value={formData.kmsDriven}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    placeholder="e.g., 50000"
                                />
                            </div>

                            {/* Seller Type */}
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2 text-center">Seller Type</label>
                                <select
                                    name="sellerType"
                                    value={formData.sellerType}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                >
                                    <option value="">Select Seller Type</option>
                                    <option value="0">Dealer</option>
                                    <option value="1">Individual</option>
                                </select>
                            </div>

                            {/* Fuel Type */}
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2 text-center">Fuel Type</label>
                                <select
                                    name="fuelType"
                                    value={formData.fuelType}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                >
                                    <option value="">Select Fuel Type</option>
                                    <option value="0">Petrol</option>
                                    <option value="1">Diesel</option>
                                    <option value="3">CNG</option>
                                </select>
                            </div>

                            {/* Transmission */}
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2 text-center">Transmission</label>
                                <select
                                    name="transmission"
                                    value={formData.transmission}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                >
                                    <option value="">Select Transmission</option>
                                    <option value="0">Manual</option>
                                    <option value="1">Automatic</option>
                                </select>
                            </div>

                            {/* Owner */}
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2 text-center">Previous Owners</label>
                                <select
                                    name="owner"
                                    value={formData.owner}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                >
                                    <option value="">Select Number of Owners</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#004aad] text-white py-3 px-8 rounded-md text-lg hover:bg-[#00368c] transition duration-300 w-full mt-4"
                        >
                            Predict Price
                        </button>
                    </form>
                </section>
            </main>

            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
};

export default FormPage;
