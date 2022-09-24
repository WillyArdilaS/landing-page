import { GitHub } from "@mui/icons-material"
import { Box, Button, Grid, IconButton, Paper, Stack, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { Portfolio } from "../database/Portfolio"

export const PortfolioPage = () => {
  return (
    <Container maxWidth="full" sx={{
      flexGrow: 1,
      paddingX: {xs: 5, md: 16},
      paddingY: 6,
      backgroundColor: 'white.main'
    }}>

      <Typography variant="h1" sx={{
        fontFamily: "Open Sans",
        fontSize: 36,
        fontWeight: 800,
        textAlign: "center",
        textTransform: "uppercase",
        color: "black.main"
      }}> Portafolio </Typography>

      {Portfolio.map((project) =>(
        <Box key={project.id} sx={{width: "100%"}}>
          <Paper sx={{
            width: "100%", 
            margin: 6, 
            marginX: "auto", 
            padding: 3, 
            borderRadius: 5, 
            backgroundColor: "secondary.main",
            boxShadow: "card"
          }}>

            <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 1, md:3}}>
            <Grid item xs={12} sm={12} md={6} sx={{display: "flex", alignItems: "center", textAlign: "left"}}>
                <img src={project.image} alt={project.name} className="projectImage" />
              </Grid>

              <Grid item xs={12} sm={12} md={6} sx={{marginTop: 2, textAlign: "center"}}>
                <Typography variant="h2" sx={{
                  marginBottom: 4,
                  fontFamily: "Open Sans",
                  fontSize: 24,
                  fontWeight: 800,
                  color: "white.main"
                  }}> {project.name} </Typography>

                <Typography variant="h2" sx={{
                  width: "85%",
                  marginX: "auto",
                  marginBottom: 5,
                  fontFamily: "Open Sans",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: "white.main"
                }}> {project.description} </Typography>

                <Typography variant="h2" sx={{
                  marginBottom: 4,
                  fontFamily: "Open Sans",
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "white.main"
                }}> {project.stack} </Typography>

                <Stack spacing={2} direction="row" sx={{
                  width: {xs: "75%", sm: "36%", md: "55%", lg: "40%"}, 
                  marginX: "auto", 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center"
                }}>
                  <Button variant="contained" size="large" href={project.link_preview} target="_blank" sx={{
                    height: 40,
                    borderRadius: 2,
                    fontFamily: "Open Sans",
                    fontSize: 16,
                    fontWeight: 800,
                    textAlign: "center",
                    backgroundColor: "primary.main",
                    boxShadow: "button",
                    '&:hover': {
                      backgroundColor: "primary.hover"
                    }
                  }}> Visualizar </Button>

                  <IconButton href="https://github.com/WillyArdilaS" target="_blank" sx={{   
                    display: "flex",  
                    width: "10%",
                    height: "20%",
                    '& svg': {
                      fontSize: 44,
                    },
                    color: "white.main",
                    '&:hover': {
                      backgroundColor: "transparent",
                      transform: "scale(1.2)"
                    }
                  }}>
                    <GitHub />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
          </Paper> 
        </Box>
      ))}
    </Container>
  )
}