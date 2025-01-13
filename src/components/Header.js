import React from "react";
import { Typography, Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const gradientAnimation = keyframes`
  from {
    background-position: 200% center;
  }
  to {
    background-position: -200% center;
  }
`;

export default function Header() {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://w7.pngwing.com/pngs/298/82/png-transparent-a-song-of-ice-and-fire-daenerys-targaryen-a-game-of-thrones-television-show-game-of-thrones-title-sequence-game-of-thrones-iron-throne-television-computer-wallpaper-brand.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        py: 6,
        position: "relative",
        height: "20vh", // Set a specific height for the header
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "&::before, &::after": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
            animation:`${gradientAnimation} 4s linear infinite,` // Add dark overlay for contrast
        },
        "&::before": {
          top: 0,
          left: 0,
        },
        "&::after": {
          top: 0,
          left: 0,
        },
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontFamily: "Georgia, serif",
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: "bold",
          textShadow: "0px 3px 5px rgba(0, 0, 0, 0.7)",
          animation: `${fadeIn} 2s ease-in-out, ${slideDown} 1s ease-in-out`,
          zIndex: 2, // Ensure text appears above overlay
        }}
      >
        Game of Thrones Houses
      </Typography>
    </Box>
  );
}
