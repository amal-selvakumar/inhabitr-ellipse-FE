import React from "react";
import LoginForm from "../../components/Form/page";
import Link from "next/link";
import loginBanner from "../../assets/loginBanner.png"
import Logo from "@/components/Logo/page";
import userIcon from "../../assets/user.png";
import passwordIcon from "../../assets/password.png";
import { FormField } from "@/types/login";
import { loginContent } from "@/constants/login";
import Banner from "@/components/Banner/page";
import FormLayout from "@/components/FormLayout/page";


const Login: React.FC = () => {
    const formFields: FormField[] = [
        { name: "username", placeholder: "Username or Email", type: "text", icon: userIcon.src },
        { name: "password", placeholder: "Password", type: "password", icon: passwordIcon.src },
    ];

    return (
        <main className="overflow-hidden px-16 pt-24 pb-24 bg-[#F1F1F1] max-md:px-5 h-screen justify-center items-center flex flex-col font-libre">
            <div className="flex w-full items-start px-4">
                <Logo />
            </div>

            <div className="flex lg:gap-16 md:gap-0 sm:gap-0 max-md:flex-col w-[90%] items-center">
                <Banner content={loginBanner.src} />

                <FormLayout content={loginContent} component={(
                    <LoginForm formFields={formFields} />
                )} />
            </div>
        </main>

    );
};

export default Login;
