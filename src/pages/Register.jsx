import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "redux/auth/authOperations";
import { Section } from "components/Section/section";
import { Form, Label, Input, Button } from 'components/ContactForm/ContactForm.styled';

export function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();

    const handleInputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "confirmPassword":
                setConfirmPassword(value);
                break;
            default:
                return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert("Password confiramation has an error");
            return;
        };
        dispatch(signUp({ name, email, password}));
        resetForm();
    };

    const resetForm = () => {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <Section title="Registration">
            <Form onSubmit={handleSubmit}>
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        required
                        value={name}
                        onChange={handleInputChange}
                    />
                </Label>

                <Label>
                    Email
                    <Input
                        type="mail"
                        name="email"
                        required
                        value={email}
                        onChange={handleInputChange}
                    />
                </Label>
                
                <Label>
                    Password
                    <Input
                        type="text"
                        name="password"
                        required
                        value={password}
                        onChange={handleInputChange}
                    />
                </Label>  

                <Label>
                    Confirm Password
                    <Input
                        type="text"
                        name="confirmPassword"
                        required
                        value={confirmPassword}
                        onChange={handleInputChange}
                    />
                </Label>  

                <Button type="submit">Sign up</Button>
            </Form>
        </Section>
    );  
};