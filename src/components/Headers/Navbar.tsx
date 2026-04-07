import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "Serviços", path: "/servicos" },
  { name: "Projetos", path: "/projetos" },
  { name: "Sobre", path: "/sobre" },
  { name: "Contato", path: "/contato" },
];

// 🔥 RECEBENDO A PROP
interface Props {
  onOpenBudget: () => void;
}

function HeaderDefault({ onOpenBudget }: Props) {
  const [anchorElNav, setAnchorElNav] =
    React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "transparent",
        boxShadow: "none",
        marginTop: "1rem",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>

          {/* 🔥 LOGO */}
          <Typography
            component={Link}
            to="/"
            sx={{
              fontWeight: 600,
              fontSize: "1.2rem",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            UP
            <Box component="span" sx={{ fontWeight: 300, ml: 1 }}>
              Studio Digital
            </Box>
          </Typography>

          {/* 🧭 DESKTOP */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  color: "#fff",
                  "&:hover": { color: "#ff6a00" },
                }}
              >
                {page.name}
              </Button>
            ))}

            {/* 🔥 CTA AGORA ABRE MODAL */}
            <Button
              variant="contained"
              onClick={onOpenBudget} // 🔥 AQUI
              sx={{
                background: "#ff6a00",
                "&:hover": { background: "#e65c00" },
              }}
            >
              Orçamento
            </Button>
          </Box>

          {/* 📱 MOBILE */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                >
                  {page.name}
                </MenuItem>
              ))}

              {/* 🔥 CTA MOBILE */}
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  onOpenBudget(); // 🔥 AQUI
                }}
              >
                Orçamento
              </MenuItem>
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderDefault;