import { HTMLAttributes, ReactNode } from "react";

export interface DataProps {
    city: string;
    university: string;
}

export interface CardProps {
    data: DataProps;
    isSelected: boolean;
    onClick: (data: DataProps) => void;
}

export interface ButtonProps extends HTMLAttributes<HTMLHeadingElement> {
    styleComp?: string;
    desc?: ReactNode;
    isDisable?: boolean;
}

export interface BorderButtonProps extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
    desc?: ReactNode;
}

export interface StepperProps extends HTMLAttributes<HTMLHeadingElement> {
    activeTab?: number;
}