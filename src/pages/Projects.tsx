import {
  Box,
  Typography,
  Dialog,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Planeta1 from "../assets/planets/planeta1.png";
import Planeta2 from "../assets/planets/planeta2.png";
// import Planeta3 from "../assets/planets/planeta3.png";
import { theme } from "../global/theme/theme";

const projects = [
  {
    title: "RN Terraplanagem",
    link: "https://www.rnterraplanagem.com.br/",
    description:
      "Entramos nesse projeto para construir uma presença digital sólida, alinhada com a força e a credibilidade da empresa no mercado.",
    images: [
      "https://res.cloudinary.com/dpol64ufe/image/upload/v1775683426/0ac56520-69e4-4d64-9c95-2d995ccd7168.png",
      "https://res.cloudinary.com/dpol64ufe/image/upload/v1775684393/9e02b9af-0d94-4beb-b971-b0b268feba50.png",
      "https://res.cloudinary.com/dpol64ufe/image/upload/v1775684416/1fc99695-d045-4f1b-970d-1b3d44c3e77a.png"
    ],
    problem:
      "A empresa não possuía uma presença digital estruturada, o que dificultava a comunicação dos serviços e limitava a geração de novos clientes no ambiente online.",
    solution:
      "Criamos um site institucional moderno, com foco em clareza, posicionamento e conversão, traduzindo o valor da empresa para o digital de forma estratégica.",
    results:
      "A empresa passou a ter mais visibilidade online, gerando novos contatos, fortalecendo sua credibilidade e abrindo novas oportunidades de negócio.",
    tech: "React, UI/UX Design, SEO.",
    image: Planeta1,
  },

  {
    title: "Resort dos Canyons",
    link: "https://www.resortdoscanyons.com.br/",
    description:
      "Desenvolvemos do zero a primeira plataforma digital do resort, transformando completamente a forma como o negócio vende e se conecta com seus clientes.",
    images: [
      "https://res.cloudinary.com/dpol64ufe/image/upload/v1775683211/60e4083c-79a6-4f0d-a5b1-ebab13ead049.png",
      "https://res.cloudinary.com/dpol64ufe/image/upload/v1775683262/b49e83da-b31d-4565-9b1a-271f7583be96.png",
      "https://res.cloudinary.com/dpol64ufe/image/upload/v1775683307/88dc17a0-3374-4f63-a455-cc685ab18988.png",
    ],
    problem:
      "O resort não possuía uma plataforma digital para venda dos seus produtos, resultando em perda de vendas e limitando o crescimento no ambiente online.",
    solution:
      "Construímos a primeira plataforma digital do cliente, com nova identidade visual, experiência de compra fluida e integração completa com múltiplos métodos de pagamento.",
    results:
      "95% dos clientes migraram para o digital, com alto sucesso nas vendas online, além da criação de novas fontes de receita dentro da própria plataforma, como carteiras digitais e vendas de passaportes por temporada",
    tech: "React, Node.JS, UX/UI, Integrações de pagamento e com terceiros, SEO.",
    image: Planeta2,
  },

  {
    title: "Luz Viva ",
    subtitle: "Em construção",
    description:
      "Estamos conduzindo a evolução da plataforma com foco total em performance, organização e escalabilidade.",
    images: [
      "https://res.cloudinary.com/dpol64ufe/image/upload/v1775683531/0120fa8f-929d-4276-891f-4da0b91939ee.png",
      "https://res.cloudinary.com/dpol64ufe/image/upload/v1775683562/05e2889a-98ff-44ee-9f7a-26be609e4d84.png",
      "https://res.cloudinary.com/dpol64ufe/image/upload/v1775683593/68902e84-b22c-4930-97e4-104de1e27fc8.png",
      "https://res.cloudinary.com/dpol64ufe/image/upload/v1775683569/89d69c91-c779-4af5-a73c-d250cb41e053.png",
    ],
    problem:
      "A plataforma apresentava limitações de performance e organização, impactando a experiência do usuário e dificultando a evolução do produto.",
    solution:
      "Estamos reestruturando toda a aplicação com foco em performance, boas práticas e arquitetura escalável, preparando o sistema para crescimento.",
    results:
      "Uma plataforma mais rápida, estável e preparada para evoluir, garantindo melhor experiência para o usuário e mais segurança para o negócio.",
    tech: "React, Nest.js, UX/UI.",
    image: Planeta1,
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  const orderedProjects = [projects[1], projects[0], projects[2]];
  const list = isMobile ? orderedProjects : projects;

  return (
    <Box sx={{ display: "flex", width: "100%", py: 10 }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography
          align="center"
          sx={{
            color: theme.pallete.primary.white,
            mb: 0,
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 600,
            fontFamily: theme.fonts.poppins,
          }}
        >
          Nossos{" "}
          <span style={{ color: theme.pallete.primary.main }}>Projetos</span>
        </Typography>

        <Typography
          align="center"
          sx={{
            color: "rgba(255,255,255,0.7)",
            mb: 6,
            fontSize: { xs: "1rem", md: "1.3rem" },
          }}
        >
          Para nós cada projeto é um mundo diferente — clique para conhecê-los
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6, lg: 0 },
            justifyContent: "center",
            alignItems: "center",
            pb: 4,
          }}
        >
          {list?.map((project, index) => {
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
                  scale: isActive ? 1 : isMobile ? 1 : 0.85,
                  opacity: isActive ? 1 : isMobile ? 1 : 0.4,
                }}
                transition={{ duration: 0.4 }}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component={motion.img}
                  src={project.image}
                  animate={{
                    y: [0, -3, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    y: { duration: 4, repeat: Infinity },
                    rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                  }}
                  sx={{
                    width: { xs: 170, md: 180, lg: 320 },
                  }}
                />

                <Typography
                  sx={{
                    mt: {
                      xs: !isActive ? -2 : -3,
                      lg: !isActive ? -3.5 : -5,
                    },
                    color: isActive ? theme.pallete.primary.white : "rgba(255,255,255,0.5)",
                    fontSize: isActive ? "1.2rem" : "0.85rem",
                    fontFamily: theme.fonts.poppins,
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.85rem",
                    fontFamily: theme.fonts.poppins,
                  }}
                >
                  {project.subtitle}
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
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  gap: 2,
                  background: "rgba(8,8,8,0.98)",
                  border: "1px solid rgba(255,115,0,0.7)",
                  borderRadius: "20px",
                  color: "#fff",
                  p: { xs: 2, md: 4 },
                },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
                <Box
                  onClick={() => setSelectedProject(null)}
                  sx={{
                    background: theme.pallete.component.button.primary,
                    px: 3,
                    py: 1.5,
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontFamily: theme.fonts.poppins,
                  }}
                >
                  Fechar
                </Box>
              </Box>

              <Box
                sx={{
                  flex: 1, 
                  overflowY: "auto",  
              
                  pb: 2,
                }}
              >
                <Box sx={{ mb: 4 }}>
                  <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={20}
                    loop
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                      0: { slidesPerView: 1 },
                      600: { slidesPerView: 2 },
                      900: { slidesPerView: 3 },
                    }}
                  >
                    {selectedProject.images.map(
                      (img: string, index: number) => (
                        <SwiperSlide key={index}>
                          <Box
                            component={motion.img}
                            src={img}
                            whileHover={{ scale: 1.05 }}
                            sx={{
                              width: "100%",
                              height: { xs: "100%", md: 200 },
                              borderRadius: "12px",
                            }}
                          />
                        </SwiperSlide>
                      ),
                    )}
                  </Swiper>
                </Box>

                <Typography sx={{ fontSize: "1.8rem", }}>
                  {selectedProject.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.7)",
                    mb: 3,
                    maxWidth: "700px",
                  }}
                >
                  {selectedProject.description}
                </Typography>

                <Grid container spacing={2}>
                  {[
                    { label: "PROBLEMA", value: selectedProject.problem },
                    { label: "SOLUÇÃO", value: selectedProject.solution },
                    { label: "RESULTADOS", value: selectedProject.results },
                    { label: "TECNOLOGIAS", value: selectedProject.tech },
                  ].map((item, index) => (
                    <Grid
                      size={{
                        xs: 12,
                        md: 4,
                      }}
                      key={index}
                    >
                      <Box
                        sx={{ p: 2, border: "1px solid rgba(255,255,255,0.1)" }}
                      >
                        <Typography sx={{ color: "#FF6A00" }}>
                          {item.label}
                        </Typography>
                        <Typography>{item.value}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {selectedProject.link && (
                <Box
                  onClick={() => {
                    window.open(selectedProject.link, "_blank");
                  }}
                  sx={{
                    background: theme.pallete.component.button.primary,
                    px: 3,
                    py: 1.5,
                    borderRadius: "20px",
                    cursor: "pointer",
                    textAlign: "center",
                    fontFamily: theme.fonts.poppins,
                  }}
                >
                  Acessar Projeto
                </Box>
              )}
            </Dialog>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
}
