import {
  Modal,
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";
import { User, Mail, Building2, Briefcase } from "lucide-react";

const MotionBox = motion(Box);

interface Props {
  open: boolean;
  onClose: () => void;
}

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    background: "rgba(255,255,255,0.03)",
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.15)",
    },
    "&:hover fieldset": {
      borderColor: "#ff6a00",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ff6a00",
    },
  },
  input: { color: "#fff" },
};

export default function BudgetModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <MotionBox
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          sx={{
            width: "100%",
            maxWidth: 1100,
            borderRadius: "20px",
            p: { xs: 3, md: 5 },
            background:
              "linear-gradient(145deg, rgba(20,20,20,0.85), rgba(20,20,20,0.6))",
            backdropFilter: "blur(30px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 0 60px rgba(255,106,0,0.15)",
            color: "#fff",
          }}
        >
          {/* TITLE */}
          <Typography
            sx={{
              fontSize: { xs: "1.8rem", md: "2rem" },
              fontWeight: 800,
              mb: 4,
            }}
          >
            Vamos construir algo incrível juntos.
          </Typography>

          {/* GRID PRINCIPAL */}
          <Grid container spacing={2}>
            {/* COLUNA 1 (ÍCONES) */}
            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
            >
              {[
                { icon: <User size={18} />, placeholder: "Seu nome" },
                { icon: <Mail size={18} />, placeholder: "Seu email" },
                { icon: <Building2 size={18} />, placeholder: "Empresa" },
                {
                  icon: <Briefcase size={18} />,
                  placeholder: "Nome do projeto",
                },
              ].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 2,
                  }}
                >
                  <Box sx={{ color: "#fff", opacity: 0.7 }}>{item.icon}</Box>

                  <TextField
                    fullWidth
                    placeholder={item.placeholder}
                    sx={inputStyle}
                  />
                </Box>
              ))}
            </Grid>

            {/* COLUNA 2 */}
            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
            >
              {["Tipo de projeto", "Tecnologia", "Prazo", "Orçamento"].map(
                (label, i) => (
                  <TextField
                    key={i}
                    select
                    fullWidth
                    defaultValue=""
                    sx={{ ...inputStyle, mb: 2 }}
                  >
                    <MenuItem value="">{label}</MenuItem>
                    <MenuItem value="1">Opção 1</MenuItem>
                    <MenuItem value="2">Opção 2</MenuItem>
                  </TextField>
                ),
              )}
            </Grid>

            {/* COLUNA 3 */}
            <Grid
              size={{
                xs: 12,
                md: 8,
              }}
            >
              {["Serviço", "Plataforma", "Necessidade"].map((label, i) => (
                <TextField
                  key={i}
                  select
                  fullWidth
                  defaultValue=""
                  sx={{ ...inputStyle, mb: 2 }}
                >
                  <MenuItem value="">{label}</MenuItem>
                  <MenuItem value="1">Opção 1</MenuItem>
                  <MenuItem value="2">Opção 2</MenuItem>
                </TextField>
              ))}
            </Grid>

            {/* DETALHES + BOTÃO */}
            <Grid
              size={{
                xs: 12,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "stretch",
                }}
              >
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Detalhes do projeto"
                  sx={inputStyle}
                />

                <Button
                  variant="contained"
                  sx={{
                    minWidth: { xs: "100%", md: "220px" },
                    background: "linear-gradient(90deg, #ff6a00, #ff8c42)",
                    fontWeight: 700,
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(255,106,0,0.4)",
                    "&:hover": { opacity: 0.9 },
                  }}
                >
                  Enviar solicitação
                </Button>
              </Box>
            </Grid>
          </Grid>
        </MotionBox>
      </Box>
    </Modal>
  );
}
