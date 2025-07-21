export default function Confirmation(){
    return (
        <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
            <div class="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md mx-4">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check-circle w-8 h-8 text-green-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="m9 11 3 3L22 4"></path>
                    </svg>
                </div>
                <h2 class="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                <p class="text-gray-600 mb-6">We've received your information and will send you the Zoom meeting details shortly.</p>
                <div class="bg-blue-50 p-4 rounded-lg">
                    <p class="text-sm text-blue-800"><strong>Next Steps:</strong> Check your email for the meeting link and calendar invite within the next 10 minutes.</p>
                </div>
            </div>
        </div>
    )
}