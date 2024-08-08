export interface FormField {
    name: string;
    placeholder: string;
    type: string;
    icon?: string;
}

export type FormValues = {
    [key: string]: string;
  };
  
  export interface LoginFormProps<T> {
    formFields: FormField[];
    onSubmit: (values: T) => void;
    errors: { [key: string]: string };
    handleBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  

export interface BannerProps{
    content: string;
}
