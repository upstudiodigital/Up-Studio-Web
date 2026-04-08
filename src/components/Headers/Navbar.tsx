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
import logoUP from "../../assets/logo/logoUP.png";
import { theme } from "../../global/theme/theme";
import { useScreenSize } from "../../hooks/useScreenSize/useScreenSize";
import { useCustomNavigate } from "../../hooks/useCustomNavigate/useCustomNavigate";
import { ROUTES } from "../../constants/enums/routes";
const pages = [
  { name: "Home", path: "/" },
  { name: "Serviços", path: "/servicos" },
  { name: "Projetos", path: "/projetos" },
  { name: "Sobre", path: "/sobre" },
  { name: "Contato", path: "/contato" },
];

interface Props {
  onOpenBudget: () => void;
}

function HeaderDefault({ onOpenBudget }: Props) {
  const { isXl } = useScreenSize();
  const { navigate } = useCustomNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

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
        padding: "1rem 0",
      }}
    >
      <Container maxWidth={isXl ? "xl" : "lg"}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: 65,
                },
                height: "100%",
              }}
              onClick={() => navigate(ROUTES.HOME)}
            >
              <img
                src={logoUP}
                alt="Logo UP"
                style={{
                  width: "100%",
                }}
              />
            </Box>

            <Box>
              <Typography
                component={Link}
                to={ROUTES.HOME}
                sx={{
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  color: theme.pallete.primary.white,
                  textDecoration: "none",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontFamily: theme.fonts.poppins,
                    fontWeight: 500,
                    ml: 1,
                  }}
                >
                  Studio Digital
                </Box>
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1.8,
            }}
          >
            {pages?.map((page, index) => (
              <Button
                key={index}
                component={Link}
                to={page.path}
                sx={{
                  fontStyle: "normal",
                  textTransform: "none",
                  fontFamily: theme.fonts.poppins,
                  color: theme.pallete.primary.white,
                  fontWeight: 400,
                  fontSize: "0.9rem",
                  "&:hover": { color: theme.pallete.component.button.primary },
                }}
              >
                {page.name}
              </Button>
            ))}

            <Button
              variant="contained"
              onClick={onOpenBudget}
              sx={{
                borderRadius: 25,
                padding: "0.5rem 1.2rem",
                fontFamily: theme.fonts.poppins,
                background: theme.pallete.component.button.primary,
                "&:hover": { background: theme.pallete.component.button.hover },
              }}
            >
              Orçamento
            </Button>
          </Box>

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
              slotProps={{
                paper: {
                  sx: {
                    mt: 1.5,
                    borderRadius: "16px",
                    minWidth: 200,
                    background: "rgba(19, 18, 18, 0.95)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                    overflow: "hidden",
                  },
                },
              }}
            >
              {pages?.map((page) => (
                <MenuItem
                  key={page.name}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontFamily: theme.fonts.poppins,
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    color: theme.pallete.primary.main,
                    px: 2.5,
                    py: 1.5,
                    transition: "0.3s",
                    "&:hover": {
                      background: "rgba(255,255,255,0.05)",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {page.name}
                </MenuItem>
              ))}

              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  onOpenBudget();
                }}
                sx={{
                  fontFamily: theme.fonts.poppins,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: theme.pallete.primary.main,
                  px: 2.5,
                  py: 1.5,
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  "&:hover": {
                    background: "rgba(255,255,255,0.05)",
                  },
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
