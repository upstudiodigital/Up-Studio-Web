import {
  Box,
  Typography,
  Container,
  Dialog,
  Grid,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Planeta1 from "../assets/planets/planeta1.png";
import Planeta2 from "../assets/planets/planeta2.png";
import Planeta3 from "../assets/planets/planeta3.png";

const projects = [
  {
    title: "PROJECT NOVA",
    problem:
      "Inefficient legacy systems causing data bottlenecks and scalability issues.",
    solution:
      "Developed a modular, cloud-based system using AI-driven optimization.",
    results:
      "40% increase in speed and improved client satisfaction.",
    tech: "AWS, React, Node, Docker",
    image: Planeta1,
  },
  {
    title: "PROJECT ORBIT",
    problem: "Low user engagement.",
    solution: "UX redesign + gamification.",
    results: "70% increase in retention.",
    tech: "Figma, React",
    image: Planeta2,
  },
  {
    title: "PROJECT PULSE",
    problem: "Slow platform.",
    solution: "Performance optimization.",
    results: "2x faster load time.",
    tech: "Next.js, Vercel",
    image: Planeta3,
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        {/* TITLE */}
        <Typography
          align="center"
          sx={{
            color: "#fff",
            mb: 6,
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 600,
          }}
        >
          OUR PROJECTS
        </Typography>

        {/* CAROUSEL */}
        <Box
          sx={{
            display: "flex",
            gap: 6,
            overflowX: "auto",
            justifyContent: "center",
            pb: 4,
          }}
        >
          {projects.map((project, index) => {
            const isActive = index === activeIndex;

            return (
              <Box
                key={index}
                component={motion.div}
                onClick={() => {
                  setActiveIndex(index);
                  setSelectedProject(project);
                }}
                animate={{
                  scale: isActive ? 1.2 : 0.85,
                  opacity: isActive ? 1 : 0.4,
                }}
                transition={{ duration: 0.4 }}
                sx={{
                  flexShrink: 0,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* PLANETA */}
                <Box
                  component={motion.img}
                  src={project.image}
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  sx={{
                    width: { xs: 130, md: 180 },
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />

                <Typography
                  sx={{
                    mt: 2,
                    color: isActive
                      ? "#fff"
                      : "rgba(255,255,255,0.5)",
                    fontSize: isActive ? "1rem" : "0.85rem",
                    transition: "0.3s",
                  }}
                >
                  {project.title}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <Dialog
              open
              onClose={() => setSelectedProject(null)}
              fullWidth
              maxWidth="lg"
              PaperProps={{
                component: motion.div,
                initial: { scale: 0.85, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.85, opacity: 0 },
                transition: { duration: 0.4 },
                sx: {
                  background: "rgba(8,8,8,0.98)",
                  border: "1px solid rgba(255,115,0,0.7)",
                  borderRadius: "20px",
                  color: "#fff",
                  p: { xs: 2, md: 4 },
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 0 50px rgba(255,115,0,0.35)",
                },
              }}
            >
              <Box>
                {/* FUNDO ANIMADO */}
                <Box
                  component={motion.div}
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle, rgba(255,115,0,0.15), transparent)",
                  }}
                />

                {/* HEADER */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 4,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <Typography sx={{ opacity: 0.6 }}>A</Typography>

                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    sx={{
                      border: "1px solid rgba(255,255,255,0.4)",
                      px: 2,
                      py: 0.8,
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                    }}
                  >
                    LIVE DEMO
                  </Box>
                </Box>

                {/* TITLE */}
                <Typography
                  component={motion.h2}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  sx={{
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    mb: 3,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {selectedProject.title} 🚀
                </Typography>

                {/* GRID */}
                <Grid container spacing={2} sx={{ position: "relative", zIndex: 2 }}>
                  {[
                    { label: "PROBLEM", value: selectedProject.problem },
                    { label: "SOLUTION", value: selectedProject.solution },
                    { label: "RESULTS", value: selectedProject.results },
                    { label: "SOLUTION", value: selectedProject.solution },
                    { label: "RESULTS", value: selectedProject.results },
                    { label: "TECHNOLOGIES", value: selectedProject.tech },
                  ].map((item, index) => (
                    <Grid item xs={12} md={4} key={index}>
                      <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{
                          scale: 1.03,
                          boxShadow:
                            "0 0 20px rgba(255,115,0,0.2)",
                        }}
                        sx={{
                          borderRadius: "14px",
                          p: 2.5,
                          background: "rgba(255,255,255,0.02)",
                          border:
                            "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            color: "#FF6A00",
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          {item.label}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "0.8rem",
                            color: "rgba(255,255,255,0.7)",
                          }}
                        >
                          {item.value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                {/* CLOSE */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mt: 4,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(null)}
                    sx={{
                      background: "#FF6A00",
                      px: 3,
                      py: 1,
                      borderRadius: "20px",
                      cursor: "pointer",
                    }}
                  >
                    CLOSE
                  </Box>
                </Box>
              </Box>
            </Dialog>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
}