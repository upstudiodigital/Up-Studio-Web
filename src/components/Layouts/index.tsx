import { Box, Toolbar } from "@mui/material";
import HeaderDefault from "../Headers/Navbar";
import { Outlet } from "react-router-dom";
import bg from "../../assets/backgrounds/background2.png"; // ajuste o caminho

export const LayoutDefault = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflowX: "hidden", // 🔥 evita scroll lateral
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
          backgroundSize: "cover", // 🔥 evita bug mobile
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -2,
        }}
      />

      {/* 🌑 OVERLAY SUAVE */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.6))",
          zIndex: -1,
        }}
      />

      {/* 🧭 NAVBAR */}
      <HeaderDefault />

      {/* 🔧 OFFSET PRA NAVBAR FIXA */}
      <Toolbar />

      {/* 📄 CONTEÚDO */}
      <Box
        component="main"
        sx={{
          width: "100%",
          maxWidth: "100%", // 🔥 evita overflow
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
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};