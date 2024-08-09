declare module 'react-stepper-horizontal' {
  import * as React from 'react';

  interface Step {
    title: string;
    icon?: any;
  }

  interface StepperProps {
    steps: Step[];
    activeStep?: number;
    activeColor?: string;
    completeColor?: string;
    circleFontColor?: string;
    titleFontSize?: string;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
    circleFontSize?: string;
    defaultBorderColor?: string;
    completeBorderColor?: string;
    activeBorderColor?: string;
    size?: string;
  }

  const Stepper: React.FC<StepperProps>;

  export default Stepper;
}
