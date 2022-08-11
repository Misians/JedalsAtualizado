import styled from "styled-components";
import { darkColors } from "../../theme/colors";
import Yoda from "../Svg/Icons/LogoWithText";
import { Box, Flex } from "../Box";
import SocialLinks from "./Components/SocialLinks";
export const StyledFooter = styled(Flex)`
  background: ${darkColors.backgroundAlt};
  align-items: center;
  justify-content: center;

  img {
    display: flex;
    align-items: center;
    padding-right: 10px;
    max-width: 100%;
    height: 50%;
    justifyContent: center;
  }
`;

export const YodaPersonalizado = styled(Yoda)`
background: ${darkColors.backgroundAlt};
align-items: center;
justify-content: center;
display: flex;

img {
  display: flex;
  align-items: center;
  max-width: 100%;
  justifyContent: center;
}
`

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0px;
    display: flex;
  justify-content: center;
  }
`;

export const StyledListItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;
  

  &:first-child {
    color: ${darkColors.secondary};
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const StyledIconMobileContainer = styled(Box)`
  margin-bottom: 24px;
`;

export const StyledToolsContainer = styled(Flex)`
  border-color: ${darkColors.cardBorder};
  border-top-width: 1px;
  alignItems: center;
  justifyContent: center;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 24px 0;
  margin-bottom: 0px;

  ${({ theme }) => theme.mediaQueries.sm} {
    border-top-width: 0;
    alignItems: center;
  justifyContent: center;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`;

export const StyledSocialLinks = styled(SocialLinks)`
 
  alignItems: center;
  justifyContent: center;
  padding: 10px;
`;

export const StyledText = styled.span`
  color: ${darkColors.text};
  
`;
