"use client";

import React, { useState } from "react";
import eyeIcon from "../../assets/eye.png";
import Input from "../Input/page";
import { LoginFormProps } from "@/types/login";

const Form: React.FC<LoginFormProps> = ({ formFields }) => {
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
  };
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
      alert("Form submitted successfully!");
    } else {
      alert("Please correct the errors before submitting.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center  lg:w-[317px] md:[317px] sm:[250px] lg:max-w-[317px] sm:max-w-[250px]">
      {formFields.map((field) => (
        <div key={field.name} className="mt-3 w-full">
          <label htmlFor={field.name} className="sr-only">
            {field.placeholder}
          </label>

          <div className="flex items-center bg-[#F1F1F1] border rounded-md focus-within:border-2 focus-within:border-[#676767] hover:border-2 hover:border-[#676767]">
            <div className={`flex items-center pl-3 ${errors[field.name as keyof typeof errors] ? "text-red-500" : "text-gray-400"}`}>
              <img src={field.icon} alt={`${field.icon} icon`} className="h-5 w-6" />
            </div>

            <Input
              type={field.type === "password" ? (passwordVisible ? "text" : "password") : field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={formValues[field.name as keyof typeof formValues]}
              onChange={handleChange}
              onBlur={handleBlur}
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

export default Form;
