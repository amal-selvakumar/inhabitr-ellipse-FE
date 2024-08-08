import { HTMLAttributes, ReactNode, MouseEvent } from 'react';

export interface DataProps {
    location: string;
    name: string;
    description: string;
    furniture:[];
    status: number;
    id: string
}

export interface CardProps {
    data: DataProps;
    isSelected: boolean;
    onClick: (data: DataProps) => void;
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    styleComp?: string;
    desc?: ReactNode;
    isDisable?: boolean;
}

export interface BorderButtonProps extends HTMLAttributes<HTMLHeadingElement> {
    classProps?: string;
    desc?: ReactNode;
}

export interface StepperProps extends HTMLAttributes<HTMLHeadingElement> {
    activeTab?: number;
}

