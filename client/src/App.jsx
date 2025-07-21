import { Routes, Route } from "react-router-dom";
import './index.css';
import Form from './components/Form';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Routes>
        <Route path = "/" element = {
          <>
            {/*Header*/}
            <header className="bg-white shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-6 h-6 text-white">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                      </svg>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">ImpacterAI</span>
                  </div>
                </div>
              </div>
            </header>

            {/*Main*/}
            <section className="pt-16 pb-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-4 h-4">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <span>Exclusive Investor Opportunity</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">Join the AI Revolution That's<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Creating Real Impact</span></h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">Discover how ImpacterAI is transforming industries with cutting-edge artificial intelligence solutions. Get exclusive access to our investor presentation and see why leading VCs are backing our vision.</p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle w-6 h-6 text-green-500 mt-0.5">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        <div>
                          <h3 className="font-semibold text-gray-900">Proven Technology</h3>
                          <p className="text-gray-600">Advanced AI models with demonstrated ROI across multiple sectors</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle w-6 h-6 text-green-500 mt-0.5">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        <div>
                          <h3 className="font-semibold text-gray-900">Experienced Team</h3>
                          <p className="text-gray-600">Led by former executives from Google, Microsoft, and OpenAI</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle w-6 h-6 text-green-500 mt-0.5">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        <div>
                          <h3 className="font-semibold text-gray-900">Market Ready</h3>
                          <p className="text-gray-600">Already serving Fortune 500 clients with 300% YoY growth</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-4 h-4">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                        <span>SEC Compliant</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-4 h-4">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <span>30-min Presentation</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-4 h-4">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span>Limited Spots</span>
                      </div>
                    </div>
                  </div>

                  <Form />
        
                </div>
              </div>
            </section>

            {/*Footer*/}
            <footer className="bg-gray-900 text-white py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-5 h-5 text-white">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                      </svg>
                    </div>
                    <span className="text-xl font-bold">ImpacterAI</span>
                  </div>
                  <div className="text-sm text-gray-400 text-center md:text-right">
                    <p>© 2024 ImpacterAI. All rights reserved.</p>
                    <p className="mt-1">Questions? Contact us at invest@impacterai.com</p>
                  </div>
                </div>
              </div>
            </footer>
          </>
        }/>

        <Route path = "/confirmation" element = {<Confirmation/>}/>
      </Routes>
    </div>
  );
}

export default App;