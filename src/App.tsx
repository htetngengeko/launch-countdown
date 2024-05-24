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
  const launchDate = new Date("June 7 2024 23:59:59").getTime();
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(launchDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(launchDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeRemaining]);

  function calculateTimeRemaining(launchDate: number) {
    const currDate = new Date().getTime();
    const distance = launchDate - currDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

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
          <Card
            label={"DAYS"}
            n1={timeRemaining.days}
            n2={timeRemaining.days}
          />
          <Card
            label={"HOURS"}
            n1={timeRemaining.hours}
            n2={timeRemaining.hours}
          />
          <Card
            label={"MINUTES"}
            n1={timeRemaining.minutes}
            n2={timeRemaining.minutes}
          />
          <Card
            label={"SECONDS"}
            n1={timeRemaining.seconds}
            n2={timeRemaining.seconds}
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
      <Box className="attribution">
        <p style={{ color: "#FF0064" }}>
          Coded by
          <a
            href="https://github.com/htetngengeko"
            style={{
              color: "white",
              backgroundColor: "transparent",
              textDecoration: "none",
            }}
          >
            {" "}
            HtetNge
          </a>
        </p>
      </Box>
    </Box>
  );
}

export default App;
