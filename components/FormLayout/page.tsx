import Link from 'next/link';
import React from 'react';

interface CardComponentProps {
    content: any;
    component: React.ReactNode;
}

const FormLayout: React.FC<CardComponentProps> = ({ content, component }) => {
    return (
        <section className="flex flex-col lg:w-[44%] ml-5 md:w-full max-md:ml-0 max-md:w-full h-[80vh]">
            <div className="flex gap-8 overflow-hidden flex-col grow items-center justify-center px-14 pb-9 mt-7 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col gap-4">
                    <h1 className="ml-3 text-4xl font-semibold text-center text-black flex justify-center items-center">
                        {content.heading}
                    </h1>
                    <p className="text-lg font-medium leading-5 text-center text-black">
                        {content.subheading}
                    </p>
                </div>

                <div>
                    {component}
                    <p className="mt-7 text-base font-medium leading-5 text-[#837a7a] flex items-center justify-center">
                        {content.formFooterText}
                        <span className="text-yellow-600">
                            <Link href="/register">
                                &nbsp;{content.formFooterLink}
                            </Link>
                        </span>
                        <br />
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FormLayout