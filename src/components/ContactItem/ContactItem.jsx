import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Item, Button, Span } from './ContactItem.styled';

export function ContactItem({name, number, id}) {
   
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(deleteContact({id, name}));
    };

    return (
        <Item>{name}: <Span>{number}</Span>
            <Button type='button' onClick={onClick}>Delete</Button>
        </Item>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
}