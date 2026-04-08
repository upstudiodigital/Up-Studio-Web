import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom"; // 🔥
import { theme } from "../global/theme/theme";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

type OutletContextType = {
  openBudget: () => void;
};

export default function ContactSection() {
  const { openBudget } = useOutletContext<OutletContextType>();
  const handleRedirect = (type: string) => {
    if (type === "Email") {
      window.location.href = "mailto:upstudiodigitalsc@gmail.com";
    }

    if (type === "WhatsApp") {
      const phone = "5548996295652";
      const message = "Olá, tudo bem? Quero fazer um orçamento!";
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");
    }

    if (type === "Instagram") {
      window.open("https://www.instagram.com/upstudio_oficial", "_blank");
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 10, md: 12 },
        color: theme.pallete.primary.white,
      }}
    >
      <Container maxWidth={false} disableGutters>
        <Grid container spacing={6}>
          {/* LEFT CONTENT */}
          <Grid
            size={{
              xs: 12,
              md: 7,
            }}
          >
            <Box sx={{ maxWidth: 920 }}>
              <MotionTypography
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={1}
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2.4rem", md: "3.2rem" },
                  mb: 2,
                  fontFamily: theme.fonts.poppins,
                }}
              >
                Fale{" "}
                <Box
                  component="span"
                  sx={{ color: theme.pallete.primary.main }}
                >
                  Conosco
                </Box>
              </MotionTypography>

              <MotionTypography
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={2}
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.2rem", md: "1.4rem" },
                  mb: 2,
                }}
              >
                Vamos transformar sua ideia em realidade
              </MotionTypography>
 
              <MotionTypography
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={3}
                sx={{
                  opacity: 0.75,
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  mb: 4,
                }}
              >
                Entre em contato com a UP Studio e descubra como podemos ajudar
                você a criar experiências digitais modernas, eficientes e que
                realmente geram resultado.
              </MotionTypography>

              {/* LINE */}
              <MotionBox
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={4}
                sx={{
                  height: "2px",
                  width: "100%",
                  background: `linear-gradient(90deg, transparent, ${theme.pallete.primary.main}, transparent)`,
                  mb: 4,
                }}
              />

              {/* CONTACT OPTIONS */}
              <Grid container spacing={3}>
                {[
                  { title: "Email", value: "upstudiodigitalsc@gmail.com" },
                  { title: "WhatsApp", value: "(48) 99629-5652" },
                  { title: "Instagram", value: "@upstudio_oficial" },
                ].map((item, index) => (
                  <Grid
                    size={{
                      xs: 12,
                      sm: 6,
                      md: 4,
                    }}
                    key={index}
                  >
                    <MotionBox
                      onClick={() => handleRedirect(item.title)}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      custom={5 + index}
                      sx={{
                        p: 2,
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 2,
                        backdropFilter: "blur(10px)",
                        transition: "0.3s",
                        cursor: "pointer", // 👈 importante
                        "&:hover": {
                          borderColor: theme.pallete.primary.main,
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: theme.pallete.primary.main,
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography sx={{ opacity: 0.8 }}>
                        {item.value}
                      </Typography>
                    </MotionBox>
                  </Grid>
                ))}
              </Grid>

              {/* CTA */}
              <MotionBox
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={8}
                sx={{ mt: 6 }}
              >
                <Button
                  variant="contained"
                  onClick={openBudget}
                  sx={{
                    background: theme.pallete.component.button.primary,
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 2,
                    "&:hover": {
                      background: theme.pallete.component.button.hover,
                      opacity: 0.9,
                    },
                  }}
                >
                  Solicitar orçamento
                </Button>
              </MotionBox>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
