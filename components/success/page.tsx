import { successPageContent } from "@/constants/formContent";
import Banner from "../Banner/page";
import FormLayout from "../FormLayout/page";
import Logo from "../Logo/page";
import GifComponent from "./GifComponent";
import loginBanner from "../../public/assets/loginBanner.png";


const page = () => {
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
    )

};


export default page