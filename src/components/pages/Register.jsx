import axios from "axios"; // Import Axios
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate and Link

const Register = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State for form validation or success/error messages
  const [message, setMessage] = useState("");

  // Initialize the useNavigate hook
  const navigate = useNavigate();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (formData.name && formData.email && formData.password) {
      try {
        // Send POST request to the FastAPI backend
        const response = await axios.post("http://127.0.0.1:8000/register", formData);

        // If registration is successful, show the success message
        setMessage("Registration successful!");

        // Reset form after submission
        setFormData({ name: "", email: "", password: "" });

        // Redirect to login page after successful registration
        navigate("/login"); // Redirect to login page
      } catch (error) {
        // Handle error if registration fails
        if (error.response) {
          setMessage(error.response.data.detail || "An error occurred during registration.");
        } else {
          setMessage("An error occurred while connecting to the server.");
        }
      }
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Create an Account</h1>

        {/* Display success or error message */}
        {message && (
          <div
            className={`mb-4 text-center ${
              message.includes("successful") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
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
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-accent text-white font-semibold rounded-md hover:bg-accent-dark transition-all"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-accent hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
