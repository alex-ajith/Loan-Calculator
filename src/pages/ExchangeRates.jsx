import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
  Pagination,
  Stack,
} from "@mui/material";

function ExchangeRates() {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const API_KEY = "29aa8fffa3047cff92c52826";
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setRates(response.data.conversion_rates);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  const rateEntries = Object.entries(rates);
  const totalPages = Math.ceil(rateEntries.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRates = rateEntries.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Exchange Rates
      </Typography>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && (
        <>
          <List>
            {paginatedRates.map(([currency, rate]) => (
              <ListItem key={currency}>
                <ListItemText primary={`${currency}: ${rate}`} />
              </ListItem>
            ))}
          </List>

          <Stack alignItems="center" marginTop={2}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Stack>
        </>
      )}
    </Container>
  );
}

export default ExchangeRates;
