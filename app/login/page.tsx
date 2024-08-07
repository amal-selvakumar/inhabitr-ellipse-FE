import React from "react";
import LoginForm from "../../components/Form/page";
import Link from "next/link";
import loginBanner from "../../assets/loginBanner.png"
import Logo from "@/components/Logo/page";
import userIcon from "../../assets/user.png";
import passwordIcon from "../../assets/password.png";
import { FormField } from "@/types/login";
import { loginContent } from "@/constants/login";


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
                <section className="flex-col w-[56%] justify-center items-center  hidden md:hidden lg:flex ">
                    <div className="w-full">
                        <div className="flex items-start"></div>
                        <div className="flex justify-center items-center w-full h-full flex-grow">
                            <img
                                loading="lazy"
                                src={loginBanner.src}
                                alt=""
                                className="object-contain max-w-full aspect-[1.41] w-full h-full hidden md:hidden lg:flex mt-4" // Hide image on medium screens
                            />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col lg:w-[44%] ml-5 md:w-full max-md:ml-0 max-md:w-full h-[80vh]">
                    <div className="flex gap-8 overflow-hidden flex-col grow items-center justify-center px-14 pb-9 mt-7 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col gap-4">
                            <h1 className="ml-3 text-4xl font-semibold text-center text-black flex justify-center items-center">
                                {loginContent.heading}
                            </h1>
                            <p className="text-lg font-medium leading-5 text-center text-black">
                                {loginContent.subheading}
                            </p>
                        </div>

                        <div>
                            <LoginForm formFields={formFields} />

                            <p className="mt-7 text-base font-medium leading-5 text-[#837a7a] flex items-center justify-center">
                                {loginContent.formFooterText}
                                <span className="text-yellow-600">
                                    <Link href="/register">
                                        &nbsp;{loginContent.formFooterLink}
                                    </Link>
                                </span>
                                <br />
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>

    );
};

export default Login;
