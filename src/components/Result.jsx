import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/logomain.png';
import Swal from 'sweetalert2';

const ResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { year, presentPrice, kmsDriven, sellerType, fuelType, transmission, owner, predictedPrice } = location.state;

    const handleShowPrice = () => {
        // Swal.fire({
        //     title: 'Predicted Price',
        //     text: `The predicted price is ₹${predictedPrice}`,
        //     icon: 'info',
        //     confirmButtonText: 'OK',
        // });

        Swal.fire({
            position: "center",
            icon: "success",
            title: `The predicted price is ₹${predictedPrice}`,
            showConfirmButton: true
          });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <header className="bg-[#004aad] text-white py-4 w-full">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <div className="flex items-center space-x-3">
                        <img src={Logo} alt="Vroom Value Logo" className="w-10 h-10" />
                        <h1 className="text-3xl font-bold">Vroom Value</h1>
                    </div>
                </div>
            </header>

            <main className="flex flex-col items-center justify-center py-16 px-6">
                <section className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                        Submitted Data
                    </h2>
                    <div className="text-gray-700 mb-4">
                        <p><strong>Year of Model:</strong> {year}</p>
                        <p><strong>Present Price:</strong> ₹{presentPrice}</p>
                        <p><strong>Kms Driven:</strong> {kmsDriven}</p>
                        <p><strong>Seller Type:</strong> {sellerType === '0' ? 'Dealer' : 'Individual'}</p>
                        <p><strong>Fuel Type:</strong> {fuelType === '0' ? 'Petrol' : fuelType === '1' ? 'Diesel' : 'CNG'}</p>
                        <p><strong>Transmission:</strong> {transmission === '0' ? 'Manual' : 'Automatic'}</p>
                        <p><strong>Previous Owners:</strong> {owner}</p>
                    </div>
                    <button
                        onClick={handleShowPrice}
                        className="bg-[#004aad] text-white py-2 px-4 rounded-md text-lg hover:bg-[#00368c] transition duration-300 w-full"
                    >
                        Show Predicted Price
                    </button>
                </section>

                <div className="flex space-x-4 mt-6">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-gray-300 text-black py-2 px-4 rounded-md text-lg hover:bg-gray-400 transition duration-300"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => navigate('/form')}
                        className="bg-[#004aad] text-white py-2 px-4 rounded-md text-lg hover:bg-[#00368c] transition duration-300"
                    >
                        Check Again
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ResultPage;
