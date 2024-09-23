import React from 'react';
import Logo from '../assets/logomain.png';
import CarImage from '../assets/home2.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const nav = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-[#004aad] text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-6">
                    {/* Logo and App Name */}
                    <div className="flex items-center space-x-3">
                        <img src={Logo} alt="Vroom Value Logo" className="w-10 h-10" />
                        <h1 className="text-3xl font-bold">Vroom Value</h1>
                    </div>
                </div>
            </header>

            {/* Body */}
            <main className="flex flex-col md:flex-row items-center justify-center py-16 px-6">
                {/* Image Section */}
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 flex justify-center">
                    <img
                        src={CarImage}
                        alt="Car Example"
                        className="w-3/4 h-auto border-8 rounded-3xl border-[#004aad] shadow-lg p-10"
                    />
                </div>


                {/* Intro Section */}
                <section className="md:w-1/2 flex flex-col items-center text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Welcome to Vroom Value
                    </h2>
                    <button onClick={()=>nav("/form")} className="bg-[#004aad] text-white py-3 px-8 rounded-md text-lg hover:bg-[#00368c] transition duration-300 mb-6 md:mb-6">
                        Get Started
                    </button>
                    <p className="text-lg text-gray-700 mb-6">
                        Vroom Value is your go-to solution for predicting car selling prices.
                        Leveraging advanced machine learning techniques, our app analyzes
                        real-time market data and past car sales to provide you with accurate
                        and fair price predictions.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        Whether you’re a car dealer or an individual looking to sell your vehicle,
                        Vroom Value ensures you get the best deal possible. Simply enter your
                        car’s make, model, year, mileage, and condition, and let our intelligent
                        prediction system do the work for you.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        Our app caters to both buyers and sellers by giving insights into market trends,
                        helping you to stay informed and make data-driven decisions.
                        Don't guess your car's value—use Vroom Value for a precise and efficient pricing experience.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
