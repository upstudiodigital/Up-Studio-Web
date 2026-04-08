import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { theme } from "../global/theme/theme";
const services = [
  {
    title: "Design UX/UI",
    description:
      "Criamos experiências digitais intuitivas e centradas no usuário, que encantam e aumentam o engajamento.",
    icon: <BrushIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Desenvolvimento Web",
    description:
      "Construímos plataformas web robustas e escaláveis com tecnologias modernas para máxima performance.",
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Aplicativos Mobile",
    description:
      "Desenvolvemos aplicativos móveis nativos e multiplataforma com performance e usabilidade excepcionais.",
    icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Desenvolvimento de Sistemas",
    description:
      "Criamos sistemas personalizados, ERPs e plataformas SaaS para otimizar e escalar seu negócio.",
    icon: <SettingsIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Soluções E-commerce",
    description:
      "Desenvolvemos lojas virtuais de alta conversão com experiência fluida e integração segura de pagamentos.",
    icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Performance & SEO",
    description:
      "Otimizamos sua presença digital para ranquear melhor, carregar mais rápido e converter mais clientes.",
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
  },
];

// animação container (stagger)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// animação individual
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function ServicesSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 6 },
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          align="center"
          sx={{
            color: theme.pallete.primary.white,
            fontWeight: 600,
            mb: 6,
            fontFamily: theme.fonts.poppins,
            fontSize: { xs: "1.8rem", md: "2.6rem" },
          }}
        >
          Nossos{" "}
          <span style={{ color: theme.pallete.primary.main }}>Serviços </span>
        </Typography>

        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          
          viewport={{ once: true }}
        >
          {services?.map((service, index) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
              key={index}
              sx={{ display: "flex", width: "100%"  }}
            >
              <motion.div variants={cardVariants} style={{ width: "100%" }}>
                <Box
                  sx={{
                    borderRadius: "18px",
                    border: "1px solid rgba(255,115,0,0.5)",
                    px: 4,
                    py: 5,
                    textAlign: "center",
                    backdropFilter: "blur(6px)",
                    boxShadow: "0 0 10px rgba(255,115,0,0.15)",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      transform: "translateY(-8px) scale(1.02)",
                      border: "1px solid rgba(255,115,0,0.9)",
                      boxShadow: "0 0 30px rgba(255,115,0,0.4)",
                    },
                  }}
                >
                  <Box sx={{ color: "#FF6A00", mb: 2 }}>{service.icon}</Box>

                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      mb: 2,
                      fontSize: "1.2rem",
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      maxWidth: "260px",
                      mx: "auto",
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
