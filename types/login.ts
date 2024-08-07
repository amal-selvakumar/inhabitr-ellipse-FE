export interface FormField {
    name: string;
    placeholder: string;
    type: string;
    icon: string;
}

export interface LoginFormProps {
    formFields: FormField[];
}