import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavTag = styled.nav`
    
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    &.active {
        color: white;
    }
`;

export const Ul = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;