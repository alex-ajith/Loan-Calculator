import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function About() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="start"
        textAlign="justify"
        borderBottom={1}
        p={4}
        m={1}
      >
        <Typography
          variant="h1"
          color="primary"
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
          gutterBottom
        >
          About Loan Calculator App
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          This Loan Calculator App is a modern, single-page web application
          built using React JS and Material UI. It allows users to calculate
          loan EMIs (Equated Monthly Installments), view a detailed amortization
          schedule, and see real-time currency conversions of their EMI using
          live exchange rates.
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h2"
          color="primary"
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
          gutterBottom
          pl={4}
        >
          Features
        </Typography>
        <Box
          component="ul"
          sx={{
            pl: 6,
            mb: 4,
          }}
        >
          {[
            "Loan EMI calculation using standard financial formulas",
            "Dynamic amortization schedule table with monthly breakdown",
            "Real-time currency conversion of EMI using a live exchange rate API",
            "Paginated exchange rate table for 160+ currencies",
            "Dark/Light mode toggle for a customizable experience",
            "Collapsible header navigation on mobile screens",
            "Fully responsive UI built with Material UI",
          ].map((feature, index) => (
            <Typography
              key={index}
              component="li"
              color="text.secondary"
              variant="body1"
            >
              {feature}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap={2} px={4}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              component="span"
              variant="h2"
              color="primary"
              sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
            >
              EMI Formula Used
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The EMI (Equated Monthly Installment) is calculated using the
              standard formula:
            </Typography>
            <Typography>EMI =</Typography>
            <Typography>Where:</Typography>
            <Typography>[P x R x (1+R) N] / [(1+R)N - 1]</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              component="span"
              variant="h2"
              color="primary"
              sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
            >
              Currency Conversion API
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ mb: 2 }}>
              This app integrates with the free tier of the ExchangeRate-API to
              fetch live exchange rates.
              <br />
              API Endpoint Example:{" "}
              <a
                href="https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1976d2", textDecoration: "underline" }}
              >
                ExchangeRate-API
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}

export default About;
