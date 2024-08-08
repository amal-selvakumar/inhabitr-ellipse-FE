"use client";

import React, { useState } from "react";
import eyeIcon from "../../public/assets/eye.png";
import Input from "../Input/page";
import { LoginFormProps, FormField } from "@/types/login";

const Form = <T extends { [key: string]: string }>({
  formFields,
  onSubmit,
  errors,
  handleBlur
}: LoginFormProps<T>) => {
  const [formValues, setFormValues] = useState<T>({} as T);

  const [passwordVisible, setPasswordVisible] = useState<{ [key: string]: boolean }>({
    password: false,
    confirmPassword: false,
  });

  const handleToggle = (field: string) => {
    setPasswordVisible(prevState => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => {
      const newValues = { ...prevValues, [name]: value };
      return newValues;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formValues);
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
            {field.icon &&  <img src={field.icon} alt={`${field.icon} icon`} className="h-5 w-6" />}
            </div> 

            <Input
              type={field.type === "password" ? (passwordVisible[field.name] ? "text" : "password") : field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={formValues[field.name as keyof T] || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              className="pl-2 pr-4 py-5 w-full text-xs font-medium bg-[#F1F1F1] text-[#676767] outline-none"
            />
            {field.type === "password" && (
              <div className={`flex items-center pr-3 cursor-pointer ${errors[field.name as keyof typeof errors] ? "text-red-500" : "text-gray-400"}`} onClick={() => handleToggle(field.name)}>
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
