import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State for form validation or success/error messages
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // To navigate after successful login

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add validation and API logic here for real login logic
    if (formData.email && formData.password) {
      setMessage("Login successful!");
      // Navigate to home or dashboard after successful login
      navigate("/");
    } else {
      setMessage("Please enter both email and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {/* Display success or error message */}
        {message && (
          <div className={`mb-4 text-center ${message.includes("successful") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your email address"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-accent text-white font-semibold rounded-md hover:bg-accent-dark transition-all"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-accent hover:underline">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
