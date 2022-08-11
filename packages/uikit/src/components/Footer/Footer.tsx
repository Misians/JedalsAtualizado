import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import Copyright from "./copyright1";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledText,
  StyledSocialLinks,
  StyledToolsContainer,
} from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import { Button } from "../Button";
import { Colors } from "../..";
import Yoda from "../Svg/Icons/LogoWithText";


const MenuItem: React.FC<FooterProps> = ({
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 0px", null, "6px 0px 0px 0px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <Flex
          order={[2, null, 1]}
          flexDirection={["row", null, "row"]}
          justifyContent="center"
          alignItems="center"
          mb={["0px", null, "2px"]}
        ><Yoda></Yoda>
          <Box display={["none", null, "block"]}>
          </Box>
        </Flex>
        <Flex order={[2, null, 1]}
          flexDirection={["row", null, "row"]}
          justifyContent="center"
          alignItems="center"
          mb={["5px", null, "5px"]}>
          <StyledSocialLinks />
        </Flex>
        <Flex order={[2, null, 1]}
          flexDirection={["row", null, "row"]}
          justifyContent="center"
          alignItems="center"
          mb={["2px", null, "2px"]}>
          <Copyright/>
        </Flex>
        
        <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          <Flex order={[1, null, 1]} alignItems="center">
          
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
            <LangSelector
              currentLang={currentLang}
              langs={langs}
              setLang={setLang}
              color={darkColors.textSubtle as keyof Colors}
              dropdownPosition="top-right"
            />
          </Flex>
          <Flex order={[1, null, 2]} mb={["0px", null, "0"]} justifyContent="space-between" alignItems="center">
          </Flex>
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
