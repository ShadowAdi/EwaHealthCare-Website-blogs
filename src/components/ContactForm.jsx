// import React, { useState } from "react";

// const ContactForm = ({ setIsModalOpen, animateCloseButton }) => {
//   // Form state
//   const [formData, setFormData] = useState({
//     full_name: "",
//     email: "",
//     mobile: "",
//     age: "",
//     gender: "",
//     address: "",
//     enquire_about: ""
//   });
  
//   // Loading and error states
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     try {
//       const response = await fetch("https://myewacare.com/api/form", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }

//       const data = await response.json();
//       setSuccess(true);
      
//       // Optional: Close modal after successful submission
//       setTimeout(() => {
//         setIsModalOpen(false);
//       }, 2000);
      
//     } catch (err) {
//       setError(err.message || "Something went wrong. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-lg w-full mx-auto bg-white p-6 sm:p-8 shadow-xl rounded-lg relative ">
//       <button
//         onClick={() => setIsModalOpen(false)}
//         className={`absolute top-5 right-5 md:top-7 md:right-7 text-gray-600 hover:text-gray-900 text-2xl font-bold transition ${
//           animateCloseButton ? "animate-pulse scale-110 text-red-500" : ""
//         }`}
//       >
//         &times;
//       </button>

//       <h2 className="text-xl sm:text-2xl font-extrabold text-center text-gray-900 mb-2">
//         Get In Touch
//       </h2>
//       <div className="w-12 sm:w-16 h-1 bg-[#02989D] mx-auto mb-4"></div>
      
//       {success && (
//         <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-center">
//           Form submitted successfully!
//         </div>
//       )}
      
//       {error && (
//         <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-center">
//           {error}
//         </div>
//       )}
      
//       <div 
//         className="form-container max-h-[500px] overflow-y-auto [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#02989D]"
//       >
//         <form className="space-y-4 mt-3 mr-2" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-gray-700 font-medium text-sm">
//               Your Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="full_name"
//               placeholder="Your Name"
//               className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
//               required
//               value={formData.full_name}
//               onChange={handleChange}
//             />
//           </div>
          
//           <div>
//             <label className="block text-gray-700 font-medium text-sm">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Phone Number"
//               className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
//               value={formData.mobile}
//               onChange={handleChange}
//             />
//           </div>
          
//           <div>
//             <label className="block text-gray-700 font-medium text-sm">
//               Email <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
//               required
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
          
//           <div>
//             <label className="block text-gray-700 font-medium text-sm">
//               Age
//             </label>
//             <input
//               type="number"
//               name="age"
//               placeholder="Age"
//               className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
//               value={formData.age}
//               onChange={handleChange}
//             />
//           </div>
          
//           <div>
//             <label className="block text-gray-700 font-medium text-sm">
//               Gender
//             </label>
//             <div className="flex items-center space-x-4">
//               {["Male", "Female", "Other"].map((option) => (
//                 <label key={option} className="flex items-center">
//                   <input
//                     type="radio"
//                     name="gender"
//                     value={option.toLowerCase()}
//                     checked={formData.gender === option.toLowerCase()}
//                     onChange={handleChange}
//                     className="mr-1"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>
          
//           <div>
//             <label className="block text-gray-700 font-medium text-sm">
//               Address
//             </label>
//             <input
//               type="text"
//               name="address"
//               placeholder="Your Address"
//               className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
//               value={formData.address}
//               onChange={handleChange}
//             />
//           </div>
          
//           <div>
//             <label className="block text-gray-700 font-medium text-sm">
//               Your Enquiry <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               name="enquire_about"
//               placeholder="Your Enquiry"
//               className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
//               rows="4"
//               required
//               value={formData.enquire_about}
//               onChange={handleChange}
//             ></textarea>
//           </div>
          
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-[#02989D] text-white py-3 px-5 rounded-md font-bold hover:bg-[#bce9ed] hover:text-[#02989D] transition text-lg"
//               disabled={isLoading}
//             >
//               {isLoading ? "Submitting..." : "Submit"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";

const ContactForm = ({ setIsModalOpen, animateCloseButton }) => {
  // Form state
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile: "",
    age: "",
    gender: "",
    address: "",
    enquire_about: ""
  });
  
  // Loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full name is required.";
    } else if (!/^[A-Za-z\s]{3,}$/.test(formData.full_name)) {
      newErrors.full_name = "Name must contain only letters and at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Phone number must be exactly 10 digits.";
    }

    if (!formData.age.trim()) {
      newErrors.age = "Age is required.";
    } else if (!/^\d+$/.test(formData.age) || formData.age < 18 || formData.age > 99) {
      newErrors.age = "Age must be between 18 and 99.";
    }

    if (!formData.gender.trim()) {
      newErrors.gender = "Please select a gender.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    } else if (formData.address.length < 10) {
      newErrors.address = "Address must be at least 10 characters.";
    }

    if (!formData.enquire_about.trim()) {
      newErrors.enquire_about = "Enquiry is required.";
    } else if (formData.enquire_about.length < 15) {
      newErrors.enquire_about = "Enquiry must be at least 15 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop submission if validation fails
    setIsLoading(true);
    // setError("");

    try {
      const response = await fetch("https://myewacare.com/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setSuccess(true);
      
      // Optional: Close modal after successful submission
      setTimeout(() => {
        setIsModalOpen(false);
      }, 2000);
      
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg w-full mx-auto bg-white shadow-xl rounded-lg relative flex flex-col h-[90vh]">
      <div className="p-6 sm:p-8">
        <button
          onClick={() => setIsModalOpen(false)}
          className={`absolute top-5 right-5 md:top-7 md:right-7 text-gray-600 hover:text-gray-900 text-2xl font-bold transition ${
            animateCloseButton ? "animate-pulse scale-110 text-red-500" : ""
          }`}
        >
          &times;
        </button>

        <h2 className="text-xl sm:text-2xl font-extrabold text-center text-gray-900 mb-2">
          Get In Touch
        </h2>
        <div className="w-12 sm:w-16 h-1 bg-[#02989D] mx-auto mb-4"></div>
        
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-center">
            Form submitted successfully!
          </div>
        )}
        {errors.api && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-center">{errors.api}</div>}
        {/* {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-center">
            {error}
          </div>
        )} */}
      </div>
      
      <div 
        className="form-container flex-1 overflow-y-auto px-6 sm:px-8 pb-6 sm:pb-8 [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#02989D]"
      >
        <form className="space-y-4 mr-2" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium text-sm">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="full_name"
              placeholder="Your Name"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
              required
              value={formData.full_name}
              onChange={handleChange}
            />
            {errors.full_name && <p className="error-text text-red-500">{errors.full_name}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium text-sm">
              Phone Number
            </label>
            <input
              type="tel"
              pattern="[0-9]*"
              inputMode="numeric"
              name="mobile"
              maxLength="10"
              placeholder="Phone Number"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <p className="error-text text-red-500">{errors.mobile}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium text-sm">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
              required
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text text-red-500">{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium text-sm">
              Age
            </label>
            <input
              type="number"
              name="age"
              placeholder="Age"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && <p className="error-text text-red-500">{errors.age}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium text-sm">
              Gender
            </label>
            <div className="flex items-center space-x-4">
              {["Male", "Female", "Other"].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={option.toLowerCase()}
                    checked={formData.gender === option.toLowerCase()}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  {option}
                </label>
              ))}
            </div>
            {errors.gender && <p className="error-text text-red-500">{errors.gender}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium text-sm">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error-text text-red-500">{errors.address}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium text-sm">
              Your Enquiry <span className="text-red-500">*</span>
            </label>
            <textarea
              name="enquire_about"
              placeholder="Your Enquiry"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
              rows="4"
              required
              value={formData.enquire_about}
              onChange={handleChange}
            ></textarea>
            {errors.enquire_about && <p className="error-text text-red-500">{errors.enquire_about}</p>}
          </div>
          
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#02989D] text-white py-3 px-5 rounded-md font-bold hover:bg-[#bce9ed] hover:text-[#02989D] transition text-lg"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
