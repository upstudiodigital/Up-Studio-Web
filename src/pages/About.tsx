import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
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

export default function AboutSection() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        py: { xs: 10, md: 8, lg: 5, xl: 15 },
        color: "#fff",
        position: "relative",
      }}
    >
      <Grid container spacing={6}>
        {/* LEFT CONTENT */}
        <Grid
          size={{
            xs: 12,
            md: 7,
            lg: 12,
            xl: 7,
          }}
        >
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
              fontFamily: theme.fonts.poppins,
            }}
          >
            Sobre{" "}
            <Box component="span" sx={{ color: theme.pallete.primary.main }}>
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
            experiências digitais que realmente geram resultado. Nossa
            trajetória é movida por inovação, tecnologia e a busca constante por
            evolução.
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

          <Grid container spacing={4}>
            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <MotionTypography
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={5}
                sx={{
                  color: theme.pallete.primary.main,
                  fontWeight: 700,
                  mb: 1,
                }}
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

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <MotionTypography
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={5}
                sx={{
                  color: theme.pallete.primary.main,
                  fontWeight: 700,
                  mb: 1,
                }}
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
              Desafios reais que resolvemos diariamente para impulsionar
              negócios
            </MotionTypography>

            <Grid container spacing={4}>
              {[
                {
                  value: "300+",
                  label: "Problemas operacionais resolvidos",
                },
                {
                  value: "260+",
                  label: "Chamados e modernização de sistemas internos",
                },
                { value: "220+", label: "Atendimentos e suportes realizados" },
                {
                  value: "4+",
                  label: "Anos evoluindo negócios com tecnologia",
                },
              ].map((item, index) => (
                <Grid
                  size={{
                    xs: 6,
                    md: 3,
                  }}
                  key={index}
                >
                  <MotionBox
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    custom={8 + index}
                  >
                    <Typography
                      sx={{
                        color: theme.pallete.primary.main,
                        fontWeight: 800,
                        fontSize: { xs: "2rem", md: "2.8rem" },
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
    </Box>
  );
}
