import { useSelector } from "react-redux";
import { isLoggedInSelector } from "redux/selectors";
import { NavTag, StyledNavLink, Ul } from "./Navigation.styled"

export function Navigation() {

    const isLoggedIn = useSelector(isLoggedInSelector);

    return(
        <NavTag>
            <Ul>
                {isLoggedIn 
                ?
                <li><StyledNavLink to="/contacts">contacts</StyledNavLink></li>
                : 
                <>
                    <li><StyledNavLink to="/login">login</StyledNavLink></li>
                    <li><StyledNavLink to="/register">register</StyledNavLink></li>
                </>}
            </Ul>
        </NavTag>
    )
};