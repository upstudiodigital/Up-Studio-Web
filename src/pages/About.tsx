import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

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

export default function AboutSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 10, md: 8 },
        color: "#fff",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">

          {/* LEFT CONTENT */}
          <Grid item xs={12} md={7}>

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
              Sobre{" "}
              <Box component="span" sx={{ color: "#ff6a00" }}>
                Nós
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
              Nossa jornada: do código ao cosmos
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
              Fundada por uma equipe com visão de futuro, transformamos ideias em
              experiências digitais que realmente geram resultado. Nossa trajetória
              é movida por inovação, tecnologia e a busca constante por evolução.
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

            {/* MISSION / VISION */}
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <MotionTypography
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={5}
                  sx={{ color: "#ff6a00", fontWeight: 700, mb: 1 }}
                >
                  Nossa Missão
                </MotionTypography>
                <MotionTypography
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={6}
                  sx={{ opacity: 0.75, fontSize: "0.95rem" }}
                >
                  Impulsionar negócios através da tecnologia, resolvendo problemas
                  complexos e criando soluções digitais de alto impacto.
                </MotionTypography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <MotionTypography
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={5}
                  sx={{ color: "#ff6a00", fontWeight: 700, mb: 1 }}
                >
                  Nossa Visão
                </MotionTypography>
                <MotionTypography
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={6}
                  sx={{ opacity: 0.75, fontSize: "0.95rem" }}
                >
                  Ser referência em transformação digital, levando empresas a um
                  novo nível de crescimento e inovação.
                </MotionTypography>
              </Grid>
            </Grid>

            {/* METRICS */}
            <Box sx={{ mt: 8 }}>
              <MotionTypography
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={7}
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  opacity: 0.9,
                }}
              >
                Nossos números
              </MotionTypography>

              <Grid container spacing={4}>
                {[
                  { value: "500+", label: "Clientes atendidos" },
                  { value: "10+", label: "Anos de experiência" },
                  { value: "250+", label: "Projetos entregues" },
                  { value: "50M+", label: "Linhas de código" },
                ].map((item, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <MotionBox
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      custom={8 + index}
                    >
                      <Typography
                        sx={{
                          color: "#ff6a00",
                          fontWeight: 800,
                          fontSize: { xs: "2rem", md: "2.8rem" }, // 🔥 AQUI FOI AJUSTADO
                          lineHeight: 1,
                        }}
                      >
                        {item.value}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          opacity: 0.7,
                          mt: 0.5,
                        }}
                      >
                        {item.label}
                      </Typography>
                    </MotionBox>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

        
         
        </Grid>
      </Container>

   
    </Box>
  );
}