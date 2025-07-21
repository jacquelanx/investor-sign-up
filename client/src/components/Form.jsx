import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Form(){
    const navigate = useNavigate();
    //Define possible states for form
    const[form, setForm] = useState({fullName: '', email: '', phone: ''});
    const[sent, setSent] = useState(false);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    const handleChange = e => {
        setForm(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setError(null); //Resets error message

        try {
            await axios.post('https://investor-sign-up.onrender.com/submit', form);
            setSent(true);
            navigate('/confirmation');
        }
        catch (err) {
            console.error(err);
            setError('There was a problem submitting your form. Please try again.');
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Reserve Your Spot</h2>
                <p className="text-gray-600">Join our exclusive investor Zoom meeting</p>
                <div className="mt-4 inline-flex items-center space-x-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span>Only 12 spots remaining</span>
                </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user absolute left-3 top-3.5 h-5 w-5 text-gray-400">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input
                            id = "name"
                            type = "text"
                            name = "fullName" //named this way so handleChange knows what .target is
                            placeholder = "John Smith"
                            value = {form.fullName}
                            onChange = {handleChange}
                            required
                            className = "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                    </div>
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail absolute left-3 top-3.5 h-5 w-5 text-gray-400">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <input
                            id = "email"
                            type = "email" 
                            name = "email"
                            placeholder="john@company.com" 
                            value = {form.email}
                            onChange = {handleChange}
                            required
                            className = "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone absolute left-3 top-3.5 h-5 w-5 text-gray-400">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <input
                            id = "phone"
                            name = "phone"
                            placeholder="+1 (555) 123-4567"
                            value = {form.phone}
                            onChange = {handleChange}
                            required
                            className = "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    disabled = {loading}
                >
                    <span>{loading ? 'Submitting' : 'Secure my spot' }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </button>

                <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to receive communications from ImpacterAI. Your information is secure and will never be shared.
                </p>
            </form>
            {error && <p className="text-red-600 mt-3">{error}</p>}
        </div>
    );
}