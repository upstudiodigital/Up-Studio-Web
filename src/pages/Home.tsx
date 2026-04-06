import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
});

export default function Home() {
  return (
    <Container
      maxWidth="xl"
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
          pt: { xs: 6, md: 10 },
        }}
      >
        <Box
          sx={{
            maxWidth: "560px",
            width: "100%",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* 🔥 TEXTO */}
          <Box
            component={motion.div}
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
          >
            <Typography
              sx={{
                fontWeight: 700,
                color: "#fff",
                mb: 3,
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3.2rem",
                },
                lineHeight: 1.2,
              }}
            >
              Innovate. Elevate.
              <br />
              Dominate Future Tech.
            </Typography>
          </Box>

          {/* 🔥 BOTÕES */}
          <Box
            component={motion.div}
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Button
                fullWidth={{ xs: true, sm: false }}
                variant="contained"
                sx={{
                  background: "#ff6a00",
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: "8px",
                  "&:hover": {
                    background: "#e65c00",
                  },
                }}
              >
                Get a quote
              </Button>

              <Button
                fullWidth={{ xs: true, sm: false }}
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  px: 3,
                  py: 1.5,
                  borderRadius: "8px",
                  "&:hover": {
                    borderColor: "#ff6a00",
                    color: "#ff6a00",
                  },
                }}
              >
                View projects
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}