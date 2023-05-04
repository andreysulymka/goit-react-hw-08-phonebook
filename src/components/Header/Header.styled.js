import styled from '@emotion/styled';
import { device } from "utils/mediaQueries";

export const HeaderTag = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${props => (props.theme.header.backgroundColor)};
  z-index: 10;
  ${device.mobile} {
    position: static;
  }
`;

export const CoverDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  color: ${props => (props.theme.header.textColor)};
  ${device.mobile} {
    flex-direction: column;
  }
`;