import { Box, Toolbar } from "@mui/material";
import HeaderDefault from "../Headers/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import bg from "../../assets/backgrounds/background2.png";
import { useState } from "react";
import BudgetModal from "../../components/BudgetModal/";

export const LayoutDefault = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // 🔥 ESTADO GLOBAL DO MODAL
  const [openBudget, setOpenBudget] = useState(false);

  // 🔥 FUNÇÃO DE ABRIR (REUTILIZÁVEL)
  const handleOpenBudget = () => setOpenBudget(true);
  const handleCloseBudget = () => setOpenBudget(false);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* 🌌 BACKGROUND */}
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

      {/* 🌑 OVERLAY DINÂMICO */}
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

      {/* 🧭 NAVBAR */}
      <HeaderDefault onOpenBudget={handleOpenBudget} /> {/* 🔥 */}

      {/* 🔧 OFFSET PRA NAVBAR FIXA */}
      <Toolbar />

      {/* 📄 CONTEÚDO */}
      <Box
        component="main"
        sx={{
          width: "100%",
          maxWidth: "100%",
          px: { xs: 2, sm: 3, md: 6 },
          py: { xs: 3, md: 6 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {/* 🔥 PASSANDO FUNÇÃO PARA AS PÁGINAS */}
          <Outlet context={{ openBudget: handleOpenBudget }} />
        </Box>
      </Box>

      {/* 🔥 MODAL GLOBAL */}
      <BudgetModal
        open={openBudget}
        onClose={handleCloseBudget}
      />
    </Box>
  );
};