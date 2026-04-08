

import { useTheme, useMediaQuery } from "@mui/material";

export const useScreenSize = () => {
  const theme = useTheme();

  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  return {
    isLg,
    isXl,
  };
};