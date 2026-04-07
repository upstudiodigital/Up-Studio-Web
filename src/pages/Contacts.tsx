import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom"; // 🔥

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
      ease: "easeOut",
    },
  }),
};

// 🔥 TIPAGEM (boa prática)
type OutletContextType = {
  openBudget: () => void;
};

export default function ContactSection() {
  // 🔥 PEGANDO DO LAYOUT
  const { openBudget } = useOutletContext<OutletContextType>();

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 10, md: 14 },
        color: "#fff",
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          px: { xs: 3, md: 8, lg: 12 },
        }}
      >
        <Grid container spacing={6}>

          {/* LEFT CONTENT */}
          <Grid item xs={12} md={7}>
            <Box sx={{ maxWidth: 620 }}>

              {/* TITLE */}
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
                }}
              >
                Fale{" "}
                <Box component="span" sx={{ color: "#ff6a00" }}>
                  Conosco
                </Box>
              </MotionTypography>

              {/* SUBTITLE */}
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

              {/* DESCRIPTION */}
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
                  background:
                    "linear-gradient(90deg, transparent, #ff6a00, transparent)",
                  mb: 4,
                }}
              />

              {/* CONTACT OPTIONS */}
              <Grid container spacing={3}>
                {[
                  { title: "Email", value: "contato@upstudio.com" },
                  { title: "WhatsApp", value: "(48) 99999-9999" },
                  { title: "Instagram", value: "@upstudio" },
                ].map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <MotionBox
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
                        "&:hover": {
                          borderColor: "#ff6a00",
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#ff6a00",
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
                  onClick={openBudget} // 🔥 AQUI ESTÁ A MAGIA
                  sx={{
                    background: "#ff6a00",
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 2,
                    "&:hover": {
                      background: "#ff6a00",
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