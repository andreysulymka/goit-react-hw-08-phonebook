import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contacts/contactsOperations";
import { contactsSelector } from "redux/selectors";
import { Form, Label, Input, Button } from './ContactForm.styled';

export function ContactForm() {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelector);

    const handleInputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        const existingContact = contacts.find((element) =>
            element.name === name
        );
        if(existingContact) {
        window.alert(`${name} is already in contacts`);
        return;
        };
        dispatch(addContact({name, number}));
        resetForm();
    };

    const resetForm = () => {
        setName("");
        setNumber("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleInputChange}
                />
            </Label>
            
            <Label>
                Number
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleInputChange}
                />
            </Label>  

            <Button type="submit">Add contact</Button>
        </Form>
    );  
};