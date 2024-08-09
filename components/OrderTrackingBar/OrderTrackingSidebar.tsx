import React from 'react';
import Stepper from 'react-stepper-horizontal';
import tick from "../../public/assets/images/tick.png"
import checkmarkIcon from "../../public/assets/images/checkmarkIcon.png";
import circleIcon from "../../public/assets/images/circleIcon.png";

interface OrderStepperProps {
  activeStep: number;
}

const OrderStepper: React.FC<OrderStepperProps> = ({ activeStep }) => {
  const steps = ['Deposit Paid', 'Order Confirmed', 'Material Procurement', 'Manufacturing In Process', 'Manufacturing Complete', 'Delivery Readiness', 'In Transit to Delivery', 'Delivery', 'Installed', 'Order Complete'];

  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='overflow-scroll'>
        <Stepper
          steps={steps.map((step, index) => ({ title: step, icon: index <= activeStep ? checkmarkIcon.src : circleIcon.src}))}
          activeStep={activeStep}
          activeColor="transparent"
          completeColor="transparent"
          circleFontColor="#fff"
          titleFontSize='12px'
          circleFontSize='0'
          style={{}}
        />
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='text-[#1FD65D] font-semibold text-md flex gap-2 items-center'>
          <img src={tick.src} alt='tickIcon' className='w-5 h-5' />
          Congratulations! Your order is on its way!</h1>

        <div className='flex flex-col text-xs'>
          <p className='text-black font-semibold'>Need help with your order?</p>
          <span className='text-[#797979] font-semibold'>Call us (123) 456-7890 or email help@inhabitr.com</span>
        </div>
      </div>
    </div>
  );
};

export default OrderStepper;
