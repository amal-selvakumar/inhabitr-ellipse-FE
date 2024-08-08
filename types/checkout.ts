export interface OrderSummaryProps {
    data: {
        subtotal: number,
        installation: number,
        shipping: number
        taxes: number,
        total: number
    };

}
export interface AgreeTermsProps {
    text: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioOptionProps {
    label: string;
    description: string;
    isChecked: boolean;
    onChange: () => void;
}