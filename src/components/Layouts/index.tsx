import { Box, Container, Toolbar } from "@mui/material";
import HeaderDefault from "../Headers/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import bg from "../../assets/backgrounds/background2.png";
import { useState } from "react";
import BudgetModal from "../../components/BudgetModal/";
import { useScreenSize } from "../../hooks/useScreenSize/useScreenSize";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const LayoutDefault = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [openBudget, setOpenBudget] = useState(false);

  const handleOpenBudget = () => {
   const phone = "5548996295652";
   const message = "Olá, tudo bem? fiquei interessado e quero fazer um orçamento!";
  
   const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

   window.open(url, "_blank");
   // setOpenBudget(true)
  };
  const handleCloseBudget = () => setOpenBudget(false);
  const {
    isXl,

  } = useScreenSize()
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflowX: "hidden",
        
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -2,
        }}
      />

      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(
            rgba(0,0,0,${isHome ? 0.25 : 0.4}),
            rgba(0,0,0,${isHome ? 0.6 : 0.9})
          )`,
          zIndex: -1,
          
        }}
      />

      <HeaderDefault onOpenBudget={handleOpenBudget} />
   
      <Toolbar />
      <Box
        component="main"
        sx={{
          maxWidth: "100%",
          px: { xs: 2, sm: 3, lg: 0 },
          py: { xs: 6, md: 8, lg: 2 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container maxWidth={isXl ? "xl" : "lg"}>
          <Outlet context={{ openBudget: handleOpenBudget }} />
        </Container>
        <Box
          onClick={handleOpenBudget}
          sx={{
            position: "fixed",
            bottom: { xs: 20, md: 30 },
            right: { xs: 20, md: 20 },
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 9999,
            boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
            },
          }}
        >
          <WhatsAppIcon sx={{ color: "#fff", fontSize: 42 }} />
        </Box>
      </Box>

      <BudgetModal open={openBudget} onClose={handleCloseBudget} />
    </Box>
  );
};
