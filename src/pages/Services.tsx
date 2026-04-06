import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const services = [
  {
    title: "UX/UI Design",
    description:
      "Crafting intuitive, user-centric digital experiences that captivate audiences and drive engagement.",
    icon: <BrushIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Web Development",
    description:
      "Building robust, scalable web platforms with cutting-edge technologies for unparalleled performance.",
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Mobile Apps",
    description:
      "Developing native cross-platform mobile applications that deliver seamless functionality on the go.",
    icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Systems Development",
    description:
      "Creating powerful custom systems, ERPs, and SaaS platforms tailored to optimize your business processes.",
    icon: <SettingsIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Building high-converting online stores with seamless user experience and secure payment integration.",
    icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Performance & SEO",
    description:
      "Optimizing your digital presence to rank higher, load faster, and convert more users into customers.",
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
      ease: "easeOut",
    },
  },
};

export default function ServicesSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 6},
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          align="center"
          sx={{
            color: "#fff",
            fontWeight: 600,
            mb: 6,
            fontSize: { xs: "1.8rem", md: "2.6rem" },
          }}
        >
          Premium Services
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
          {services.map((service, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex" }}
              component={motion.div}
              variants={cardVariants}
            >
              <Box
                sx={{
                  width: "100%",
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
                <Box sx={{ color: "#FF6A00", mb: 2 }}>
                  {service.icon}
                </Box>

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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}