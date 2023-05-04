import { useState } from "react";
import { useDispatch} from "react-redux";
import { Section } from "components/Section/section";
import { signIn } from "redux/auth/authOperations";
import { Form, Label, Input, Button } from 'components/ContactForm/ContactForm.styled';

export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleInputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signIn({ email, password}));
        resetForm();
    };

    const resetForm = () => {
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <Section title="Authorization">
                <Form onSubmit={handleSubmit}>
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

                    <Button type="submit">Sign in</Button>
                </Form>
            </Section>
        </>
    );  
};