import React, { useState } from 'react';
import {
  Container, Grid, TextField, Button, Typography,
  Paper, Table, TableHead, TableRow, TableCell, TableBody,
  MenuItem, Select, InputLabel, FormControl
} from '@mui/material';

const currencySymbols = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  INR: '₹',
  JPY: '¥',
  CAD: 'C$',
};

const LoanCalculator = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [schedule, setSchedule] = useState([]);
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  

  const symbol = currencySymbols[currency] || '$';

  const calculateAmortization = () => {
    const P = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term) * 12;

    if (!P || !r || !n) return;

    const x = Math.pow(1 + r, n);
    const monthly = (P * x * r) / (x - 1);
    setMonthlyPayment(monthly.toFixed(2));

    let balance = P;
    const rows = [];

    for (let i = 1; i <= n; i++) {
      const interest = balance * r;
      const principal = monthly - interest;
      balance -= principal;
     

      rows.push({
        month: i,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : '0.00',
      });
    }

    setSchedule(rows);
   
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '3rem', marginBottom: '3rem'}}>
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Loan Calculator Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth label="Loan Amount" variant="outlined" type="number"
              value={amount} onChange={(e) => setAmount(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth label="Interest Rate (%)" variant="outlined" type="number"
              value={rate} onChange={(e) => setRate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth label="Term (Years)" variant="outlined" type="number"
              value={term} onChange={(e) => setTerm(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel>Currency</InputLabel>
              <Select
                value={currency}
                label="Currency"
                onChange={(e) => setCurrency(e.target.value)}
              >
                {Object.keys(currencySymbols).map((cur) => (
                  <MenuItem key={cur} value={cur}>{cur}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="center">
            <Button variant="contained" color="primary" size="large" onClick={calculateAmortization}>
              Calculate
            </Button>
          </Grid>

          {monthlyPayment && (
            <Grid item xs={12}>
              <Typography align="center" variant="h6" color="primary">
                Monthly Payment: {symbol}{monthlyPayment}
              </Typography>
            </Grid>
          )}

          {schedule.length > 0 && (
            <Grid item xs={12}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Month</TableCell>
                    <TableCell>Principal</TableCell>
                    <TableCell>Interest</TableCell>
                    <TableCell>Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {schedule.slice(0, 12).map((row) => (
                    <TableRow key={row.month}>
                      <TableCell>{row.month}</TableCell>
                      <TableCell>{symbol}{row.principal}</TableCell>
                      <TableCell>{symbol}{row.interest}</TableCell>
                      <TableCell>{symbol}{row.balance}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default LoanCalculator;
