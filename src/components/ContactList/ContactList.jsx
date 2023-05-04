import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListEl } from './ContactList.styled';
import { shownContacts } from 'redux/selectors';

export function ContactList() {

    const contacts = useSelector(shownContacts);

    return (
        <ContactListEl>
            {contacts.map((contact) => {
                return (
                    <ContactItem 
                        key={contact.id}
                        name={contact.name}
                        number={contact.number}
                        id={contact.id}
                    />
                );
            })}                
        </ContactListEl>
    );
};