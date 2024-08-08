

"use client";

import React, { useState } from "react";
import LoginForm from "../../components/Form/page";
import loginBanner from "../../public/assets/loginBanner.png"
import Logo from "@/components/Logo/page";
import userIcon from "../../public/assets/user.png";
import passwordIcon from "../../public/assets/password.png";
import { FormField } from "@/types/login";
import Banner from "@/components/Banner/page";
import FormLayout from "@/components/FormLayout/page";
import { useLoginUserMutation } from "@/redux/Slices/login/login";
import { loginContent } from "@/constants/login";

const Login: React.FC = () => {
  const [errors, setErrors] = useState({});
  const formFields: FormField[] = [
    { name: "username", placeholder: "Username or Email", type: "text", icon: userIcon.src },
    { name: "password", placeholder: "Password", type: "password", icon: passwordIcon.src },
  ];

  const [loginAuth, { isLoading, error, data }] = useLoginUserMutation();

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

  const handleLoginSubmit = async (formValues: any) => {
    const { username, password } = formValues;

    // Perform validation
    const emailError = validateEmail(username) ? "" : "Invalid email format";
    const passwordError = validatePassword(password) ? "" : "Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character";

    setErrors({ username: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      try {
        const result = await loginAuth({ email: username, password }).unwrap();
        console.log('Login successful:', result);
        window.location.href = "/";
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

    return (
        <main className="px-16 pt-24 pb-24 bg-[#F1F1F1] max-md:px-5 h-screen justify-center items-center flex flex-col font-libre">
            <div className="flex w-full items-start px-4">
                <Logo />
            </div>

            <div className="flex lg:gap-16 md:gap-0 sm:gap-0 max-md:flex-col w-[90%] items-center">
                <Banner content={loginBanner.src} />

                <FormLayout content={loginContent} component={(
                    <LoginForm formFields={formFields} onSubmit={handleLoginSubmit} errors={errors} />
                )} />
            </div>
        </main>

    );
};

export default Login;
