"use client"
import React, { useState } from "react";
import SignUpForm from "../../components/Form/page";
import loginBanner from "../../public/assets/loginBanner.png"
import Logo from "@/components/Logo/page";
import { FormField } from "@/types/login";
import { signUpContent } from "@/constants/formContent";
import Banner from "@/components/Banner/page";
import FormLayout from "@/components/FormLayout/page";
import { useSignupUserMutation } from "@/redux/Slices/login/login";

const page: React.FC = () => {
    const [errors, setErrors] = useState({});
    const formFields: FormField[] = [
        { name: "contactName", placeholder: "Contact Name", type: "text" },
        { name: "username", placeholder: "Contact Email", type: "email" },
        { name: "contactNumber", placeholder: "Contact Number", type: "tel" },
        { name: "password", placeholder: "Password", type: "password" },
        { name: "confirmPassword", placeholder: "Confirm Password", type: "password" },
    ];
    const [signUpAuth, { isLoading, error, data }] = useSignupUserMutation();

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

    const validateContactName = (name: string) => {
        return name.length >= 5;
    };

    const validateContactNumber = (number: string) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(number);
    };


    const handleSignUpSubmit = async (formValues: any) => {
        const { username, password, confirmPassword, contactName, contactNumber } = formValues;

        // Perform validation
        const emailError = validateEmail(username) ? "" : "Invalid email format";
        const passwordError = validatePassword(password) ? "" : "Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character";
        const confirmPasswordError = password === confirmPassword ? "" : "Passwords do not match";
        const contactNameError = validateContactName(contactName) ? "" : "Contact Name must be at least 5 characters long";
        const contactNumberError = validateContactNumber(contactNumber) ? "" : "Invalid contact number format";
        setErrors({
            username: emailError,
            password: passwordError,
            confirmPassword: confirmPasswordError,
            contactName: contactNameError,
            contactNumber: contactNumberError
        });
        if (!emailError && !passwordError && !confirmPasswordError && !contactNameError && !contactNumberError) {
            try {
                console.log("jkjkjkj")
                const result = await signUpAuth({ email: username, password, contactName, contactNumber }).unwrap();
                console.log('SignUp successful:', result);
                window.location.href = "/success";
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };



    return (
        <main className="px-16 pb-24  bg-[#F1F1F1] max-md:px-5 justify-center items-center flex flex-col font-libre">
            <div className="flex w-full pt-4 items-start px-4">
                <Logo />
            </div>

            <div className="flex lg:gap-16 md:gap-0 sm:gap-0 max-md:flex-col w-[95%]">
                <Banner content={loginBanner.src} />
                <div>

                </div>
                <FormLayout content={signUpContent} component={(
                    <SignUpForm formFields={formFields} onSubmit={handleSignUpSubmit} errors={errors} />
                )} />
            </div>
        </main>
    );
};

export default page;
