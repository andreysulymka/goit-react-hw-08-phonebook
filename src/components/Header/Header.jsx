
import PropTypes from 'prop-types';
import { PageContainer } from 'components/pageContainer/pageContainer';
import { HeaderTag, CoverDiv } from "./Header.styled";

export function Header({children}) {

    return (
        <HeaderTag>
            <PageContainer>
                <CoverDiv>
                    {children}
                </CoverDiv>
            </PageContainer>
        </HeaderTag>
    );
};

Header.propTypes = {
    themeSwitcher: PropTypes.func,
};