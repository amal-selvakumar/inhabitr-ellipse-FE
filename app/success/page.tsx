import React from 'react';
import Banner from '@/components/Banner/page';
import FormLayout from '@/components/FormLayout/page';
import Logo from '@/components/Logo/page';
import loginBanner from "../../public/assets/loginBanner.png";
import { successPageContent } from "@/constants/formContent";
import GifComponent from '@/components/success/page';

const Page: React.FC = () => {
  return (
    <main className="px-16 pb-24 bg-[#F1F1F1] max-md:px-5 justify-center items-center flex flex-col font-libre">
      <div className="flex w-full pt-4 items-start px-4">
        <Logo />
      </div>

      <div className="flex lg:gap-16 md:gap-0 sm:gap-0 max-md:flex-col w-[95%]">
        <Banner content={loginBanner.src} />
        <div></div>
        <FormLayout content={successPageContent} component={<GifComponent />} />
      </div>
    </main>
  );
};

export default Page;
