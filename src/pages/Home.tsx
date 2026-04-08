import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { theme } from "../global/theme/theme";
import { useCustomNavigate } from "../hooks/useCustomNavigate/useCustomNavigate";
import { ROUTES } from "../constants/enums/routes";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay,
    },
  },
});

export default function Home() {
  const { navigate } = useCustomNavigate();
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
    
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          pt: { xs: 16, sm: 25, md: 25,lg: 28, xl: 35 },
          
        }}
      >
        <Box
          sx={{
            display:"flex",
            flexDirection:"column",
            gap: {
              xs: 2,
              sm: 0
            },
            maxWidth: "960px",
            width: "100%",
            textAlign: "left",
          }}
        >
          <Box
            display={{
              xs: "none",
              sm: "flex",
            }}
            component={motion.div}
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
          >
            <Typography
              sx={{
                fontWeight: 700,
                color: theme.pallete.primary.white,
                mb: 3,
                fontSize: {
                  xs: "1.3rem",
                  sm: "2rem",
                  md: "2rem",
                  lg: "2.4rem",
                  xl: "2.5rem",
                },

                fontFamily: theme.fonts.poppins,
                lineHeight: 1.35,
              }}
            >
              <span
                style={{
                  color: theme.pallete.primary.main,
                }}
              >
                Inovando
              </span>{" "}
              com propósito.
              <br />
              <span
                style={{
                  color: theme.pallete.primary.main,
                }}
              >
                Elevando
              </span>{" "}
              o nível do seu negócio.
              <br />
              <span
                style={{
                  color: theme.pallete.primary.main,
                }}
              >
                Dominando
              </span>{" "}
              o futuro da tecnologia.
            </Typography>
          </Box>
          <Box
            display={{
              xs: "flex",
              sm: "none",
            }}
            flexDirection="column"
            gap={1}
            component={motion.div}
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Inovando",
                subtitle: "com propósito.",
              },
              {
                title: "Elevando",
                subtitle: "o nível do seu negócio.",
              },
              {
                title: "Dominando",
                subtitle: "o futuro da tecnologia.",
              },
            ].map((item, index) => (
              <Box key={index}>
                <Typography
                  sx={{
                    color: theme.pallete.primary.main,
                    fontWeight: 700,
                    fontSize: "1.6rem",
                    fontFamily: theme.fonts.poppins,
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: theme.pallete.primary.white,
                    fontWeight: 500,
                    fontSize: "1.3rem",
                    fontFamily: theme.fonts.poppins,
                    opacity: 0.9,
                    lineHeight: 1.3,
                  }}
                >
                  {item.subtitle}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            component={motion.div}
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{
                  
                  width: { xs: "100%", sm: "auto" },
                  background: theme.pallete.component.button.primary,
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: "8px",
                  fontFamily: theme.fonts.poppins,
                  "&:hover": {
                    background: theme.pallete.component.button.hover,
                  },
                }}
                onClick={() => {
                  navigate(ROUTES.SERVICES);
                }}
              >
                Conheça nossos serviços
              </Button>

              <Button
                 fullWidth
 
                variant="outlined"
                sx={{
                  
                  width: { xs: "100%", sm: "auto" },
                  color: theme.pallete.primary.white,
                  borderColor: theme.pallete.primary.white,
                  px: 3,
                  py: 1.5,
                  borderRadius: "8px",

                  fontFamily: theme.fonts.poppins,
                  "&:hover": {
                    borderColor: theme.pallete.component.button.primary,
                    color: theme.pallete.component.button.primary,
                  },
                }}
                onClick={() => {
                  navigate(ROUTES.PROJECTS);
                }}
              >
                Ver projetos
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
