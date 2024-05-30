import { useState } from "react";
import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({
        typ:'0',
        name: '',
        phone: '',
        email: '',
        ref: '',
        password: '',
      });
    
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        setIsSubmitting(true);
    
        try {
          const response = await axios.post('https://carim.com.ng/api/user', formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          console.log('Registration successful:', response.data);
    
          // Handle successful registration (e.g., redirect to login page, display success message)
          alert('Registration successful! Please proceed to login.');
    
        } catch (error) {
          console.error('Registration error:', error);
          alert(error.response?.data?.message || 'Registration failed.'); // Extract error message from response if available
        } finally {
          setIsSubmitting(false);
        }
      };

  return (
    <>
      <div className="w-full h-screen flex flex-col w-full items-center justify-center">
    <div className="flex items-center justify-center lg:w-4/12 w-11/12 bg-white rounded-lg shadow-lg overflow-hidden">
        <form onSubmit={handleSubmit} className="w-full p-8 w-11/12">
        <div className="mt-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input onChange={handleChange} value={formData.name} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name="name" required type="text" />
            </div>

            <div className="mt-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                <input onChange={handleChange} value={formData.phoneNo} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name="phoneNo" required type="text" />
            </div>

            <div className="mt-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input onChange={handleChange} value={formData.email} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name="email" required type="email" />
            </div>

            <div className="mt-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Referral code</label>
                <input onChange={handleChange} value={formData.referral} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name="referral" type="text" />
            </div>

            <div className="mt-2">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    {/* <a href="#" className="text-xs text-gray-500">Forget Password?</a> */}
                </div>
                <input onChange={handleChange} value={formData.password} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name="password" required type="password" />
            </div>
            <div className="mt-4">
                <button type="submit" disabled={isSubmitting} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                {isSubmitting ? 'Signing up...' : 'Sign up'}
                    </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <a href="#" className="text-xs text-gray-500 uppercase">or sign in</a>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
        </form>
    </div>
</div>
    </>
  )
}

export default SignUp