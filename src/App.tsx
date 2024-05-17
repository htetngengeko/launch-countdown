import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import bgStars from "./images/bg-stars.svg";
import hills from "./images/pattern-hills.svg";
import "./index.css";

function App() {
  const [currDate, setCurrDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgStars})`,
        backgroundColor: "rgb(30,30,40)",
        height: "100vh",
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "75%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            color: "white",
            fontSize: 20,
            letterSpacing: 10,
            marginBottom: 8,
          }}
        >
          WE'RE LAUNCHING SOON.
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "75%",
          }}
        >
          <Card label={"DAYS"} n1={currDate.getDay()} n2={currDate.getDay()} />
          <Card
            label={"HOURS"}
            n1={currDate.getHours()}
            n2={currDate.getHours()}
          />
          <Card
            label={"MINUTES"}
            n1={currDate.getMinutes()}
            n2={currDate.getMinutes()}
          />
          <Card
            label={"SECONDS"}
            n1={currDate.getSeconds()}
            n2={currDate.getSeconds()}
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${hills})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "transparent",
          height: "25%",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "20%",
            color: "#787397",
          }}
        >
          <FacebookIcon sx={{ fontSize: 35 }} />
          <PinterestIcon sx={{ fontSize: 35 }} />
          <InstagramIcon sx={{ fontSize: 35 }} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
