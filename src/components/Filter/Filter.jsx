import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { filterSelector } from 'redux/selectors';

import { Label, Input } from "./Filter.styled";

export function Filter () {

    const filter = useSelector(filterSelector);
    const dispatch = useDispatch();

    const onChange = e => {
        dispatch(getFilter(e.currentTarget.value));
    }

    return (
        <Label>
            Find contacts by name
            <Input
                type="text"
                name="filter"
                value={filter}
                onChange={onChange}
            />
        </Label>
    );
};