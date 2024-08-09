import userIcon from "../public/assets/user.png";
import passwordIcon from "../public/assets/password.png";
export const signUpFields=[
    { name: "contactName", placeholder: "Contact Name", type: "text" },
    { name: "username", placeholder: "Contact Email", type: "email" },
    { name: "contactNumber", placeholder: "Contact Number", type: "tel" },
    { name: "password", placeholder: "Password", type: "password" },
    { name: "confirmPassword", placeholder: "Confirm Password", type: "password" },
]

export const loginFields= [
    { name: "username", placeholder: "Username or Email", type: "text", icon: userIcon.src },
    { name: "password", placeholder: "Password", type: "password", icon: passwordIcon.src },
  ];
