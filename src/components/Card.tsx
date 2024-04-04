import { Box } from "@mui/material";

interface Props {
  label: string;
  n1: number;
  n2: number;
}

const Card = ({ label, n1, n2 }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 3,
      }}
    >
      <Box
        sx={{
          boxShadow: "0 1px ",
          borderRadius: "10% 10% 15% 15%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#2B2840",
            width: 180,
            height: 90,
            lineHeight: "180%",
            borderRadius: "10% 10% 15% 15%",
            fontSize: 100,
            color: "#FF4076",
            textAlign: "center",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          {n1}
        </Box>
        <Box
          sx={{
            backgroundColor: "#313049",
            width: 180,
            height: 90,
            lineHeight: "1%",
            borderRadius: "10% 10% 15% 15% ",
            fontSize: 100,
            overflow: "hidden",

            color: "#FF4076",
            textAlign: "center",
          }}
        >
          {n2}
        </Box>
      </Box>

      <Box
        sx={{
          color: "#787397",
          fontSize: 15,
          letterSpacing: 10,
          marginTop: 3,
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        {label}
      </Box>
    </Box>
  );
};

export default Card;
