// "use client"

// import React, { useState } from "react";
// import userIcon from "../../assets/user.png";
// import passwordIcon from "../../assets/password.png";
// import eyeIcon from "../../assets/eye.png";


// interface FormField {
//   name: string;
//   placeholder: string;
//   type: string;
//   icon: string;
// }

// const formFields: FormField[] = [
//   { name: "username", placeholder: "Username or Email", type: "text", icon: userIcon.src },
//   { name: "password", placeholder: "Password", type: "password", icon: passwordIcon.src },
// ];

// const LoginForm: React.FC = () => {
// const [password, setPassword] = useState("");
// const [type, setType] = useState<'password' | 'text'>('password');

// const handleToggle = () => {
//   setType(prevType => (prevType === 'password' ? 'text' : 'password'));
// };
//   return (
//     <form>
//       {formFields.map((field) => (
//         <div key={field.name} className="mt-3 w-full max-w-[317px]">
//           <label htmlFor={field.name} className="sr-only">
//             {field.placeholder}
//           </label>

//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <img src={field.icon} alt={`${field.icon} icon`} className="h-5 w-5 text-gray-400" />
//             </div>
//             {
//               field.type == 'password' ?
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer z-50" >
//                   <img src={eyeIcon.src} alt={`${field.icon} icon`} className="h-5 w-5 text-gray-400" onClick={() => handleToggle()} />
//                 </div>
//                 : null
//             }
//             <input
//               type={field.type}
//               id={field.name}
//               name={field.name}
//               placeholder={field.placeholder}
//               className="pl-10 pr-4 py-5 w-full text-xs font-medium bg-[#F1F1F1] border border-[#A8A8A9] rounded-md text-[#676767] focus:border-2 focus:border-[#676767] hover:border-2 hover:border-[#676767] outline-none"
//               required
//               onChange={(e) => field.name === 'password' ? setPassword(e.target.value) : undefined}
//             />
//           </div>
//         </div>
//       ))}
//       <button className="px-16 py-3.5 mt-6 max-w-full text-base font-medium text-center text-black whitespace-nowrap bg-amber-300 rounded-3xl w-[216px] max-md:px-5">
//         SUBMIT
//       </button>
//     </form>
//   );
// };

// export default LoginForm;

"use client";

import React, { useState } from "react";
import userIcon from "../../assets/user.png";
import passwordIcon from "../../assets/password.png";
import eyeIcon from "../../assets/eye.png";
import Input from "../Input/page";

interface FormField {
  name: string;
  placeholder: string;
  type: string;
  icon: string;
}

const formFields: FormField[] = [
  { name: "username", placeholder: "Username or Email", type: "text", icon: userIcon.src },
  { name: "password", placeholder: "Password", type: "password", icon: passwordIcon.src },
];

const LoginForm: React.FC = () => {
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateEmail = (email: string) => {
    const allowedDomains = ["pumexinfotech.com", "inhabitr.com"];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;

    const domain = email.split("@")[1];
    return allowedDomains.includes(domain);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (name === "username") {
      setErrors({ ...errors, username: validateEmail(value) ? "" : "Invalid email format" });
    }

    if (name === "password") {
      setErrors({ ...errors, password: validatePassword(value) ? "" : "Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!errors.username && !errors.password && formValues.username && formValues.password) {
      // Perform the submit action (e.g., API call)
      alert("Form submitted successfully!");
    } else {
      alert("Please correct the errors before submitting.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
      {formFields.map((field) => (
        <div key={field.name} className="mt-3 w-[317px] max-w-[317px] ">
          <label htmlFor={field.name} className="sr-only">
            {field.placeholder}
          </label>

          <div className="flex items-center bg-[#F1F1F1] border rounded-md focus-within:border-2 focus-within:border-[#676767] hover:border-2 hover:border-[#676767]">
            <div className={`flex items-center pl-3 ${errors[field.name as keyof typeof errors] ? "text-red-500" : "text-gray-400"}`}>
              <img src={field.icon} alt={`${field.icon} icon`} className="h-5 w-6" />
            </div>
            {/* <input
              type={field.type === "password" ? (passwordVisible ? "text" : "password") : field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              className={`pl-2 pr-4 py-5 w-full text-xs font-medium bg-[#F1F1F1] text-[#676767] outline-none`}
              required
              onChange={handleChange}
              value={formValues[field.name as keyof typeof formValues]}
            /> */}

            <Input
              type={field.type === "password" ? (passwordVisible ? "text" : "password") : field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={formValues[field.name as keyof typeof formValues]}
              onChange={handleChange}
              className={`pl-2 pr-4 py-5 w-full text-xs font-medium bg-[#F1F1F1] text-[#676767] outline-none`}
            />
            {field.type === "password" && (
              <div
                className={`flex items-center pr-3 cursor-pointer ${errors[field.name as keyof typeof errors] ? "text-red-500" : "text-gray-400"}`}
                onClick={handleToggle}
              >
                <img src={eyeIcon.src} alt="eye icon" className="h-5 w-7" />
              </div>
            )}
          </div>
          {errors[field.name as keyof typeof errors] && (
            <p className="text-red-500 text-xs m-1 max-w-[317px]">
              {errors[field.name as keyof typeof errors]}
            </p>
          )}
        </div>
      ))}
      <button type="submit" className="px-16 py-3.5 mt-6 max-w-full text-base font-medium text-center text-black whitespace-nowrap bg-amber-300 rounded-3xl w-[216px] max-md:px-5">
        SUBMIT
      </button>
    </form>
  );
};

export default LoginForm;
