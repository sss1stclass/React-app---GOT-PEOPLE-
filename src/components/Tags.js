import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import People from "./People";
import data from "../got.json";

function Tags() {
  const [activeHouse, setActiveHouse] = useState("");
  const houseNames = ["Show All", ...data.map((house) => house.name)];

  const everyone =
    activeHouse && activeHouse !== "Show All"
      ? data.find((house) => house.name === activeHouse).people
      : data.reduce((acc, house) => acc.concat(house.people), []);

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 4,
        px: 2,
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: 3,
          color: "#333",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
        }}
      >
        Select a House:
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
          marginBottom: 4,
        }}
      >
        {houseNames.map((house) => (
          <Button
            key={house}
            variant={house === activeHouse ? "contained" : "outlined"}
            onClick={() => setActiveHouse(house)}
            sx={{
              textTransform: "capitalize",
              px: 3,
              py: 1,
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "20px",
              transition: "0.3s",
              boxShadow:
                house === activeHouse
                  ? "0px 4px 15px rgba(0, 0, 0, 0.2)"
                  : "none",
              background:
                house === activeHouse
                  ? "linear-gradient(135deg, #6a11cb, #2575fc)"
                  : "transparent",
              color: house === activeHouse ? "#fff" : "#6a11cb",
              borderColor: "#6a11cb",
              "&:hover": {
                background:
                  house === activeHouse
                    ? "linear-gradient(135deg, #5e0eb8, #1e69e1)"
                    : "rgba(106, 17, 203, 0.1)",
              },
            }}
          >
            {house}
          </Button>
        ))}
      </Box>
      <People everyone={everyone} />
    </Box>
  );
}

export default Tags;
