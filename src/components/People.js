import { Card, CardMedia, CardContent, CardActions, Button, Typography, Box } from "@mui/material";

function People({ everyone }) {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        minHeight: "100vh",
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          padding: 2,
        }}
      >
        {everyone.map((person) => (
          <Box
            key={person.name}
            sx={{
              maxWidth: 345,
              margin: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.3)",
                  background: "linear-gradient(135deg, #ff7043, #ffca28)", // Warm gradient on hover
                },
                background: "linear-gradient(135deg, #9c27b0, #00bcd4)", // Initial purple-teal gradient
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={person.image}
                alt={person.name}
                sx={{
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)", // Slight zoom on image hover
                  },
                }}
              />
              <CardContent
                sx={{
                  color: "#fff",
                  padding: "16px",
                  background: "linear-gradient(135deg, #9c27b0, #00bcd4)", // Initial purple-teal gradient
                  transition: "background 0.3s ease",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {person.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.9,
                    marginTop: "8px",
                    fontSize: "1rem",
                  }}
                >
                  {person.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", padding: "16px" }}>
                <Button
                  size="medium"
                  variant="contained"
                  color="secondary"
                  href={person.wikiLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    px: 3,
                    py: 1,
                    borderRadius: "8px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#ffca28", // Yellow on button hover
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Know More!
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default People;
