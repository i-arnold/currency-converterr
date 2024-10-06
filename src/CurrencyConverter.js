import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const fixedExchangeRates = {
  USD: {
    EUR: 0.9,
    GBP: 0.8,
    JPY: 110,
    CAD: 1.3,
    AUD: 1.4,
    CHF: 0.95,
    CNY: 6.5,
    INR: 75,
    MXN: 20,
    RUB: 80,
    RWF: 1000 
  },
  RWF: {
    USD: 0.001, 
    EUR: 0.0009,
    GBP: 0.0008,
    
  }
  
};

const CurrencyConverter = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);

  const handleConvert = () => {
    const conversionRate = fixedExchangeRates[baseCurrency][targetCurrency];
    setResult(amount * conversionRate);
  };

  return (
    <div className="dark-blue-background d-flex align-items-center justify-content-center">
      <Container className="text-center d-flex align-items-center justify-content-center">
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group controlId="baseCurrency">
                <Form.Label className="tech-font">Base Currency</Form.Label>
                <Form.Select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
                  {Object.keys(fixedExchangeRates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="amount">
                <Form.Label className="tech-font">Amount</Form.Label>
                <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control-custom" />
              </Form.Group>
            </Form>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group controlId="targetCurrency">
                <Form.Label className="tech-font">Target Currency</Form.Label>
                <Form.Select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
                  {Object.keys(fixedExchangeRates[baseCurrency]).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="result">
                <Form.Label className="tech-font">Result</Form.Label>
                <Form.Control type="text" value={result} disabled />
              </Form.Group>
              <Button variant="primary" onClick={handleConvert} className="btn-custom">
                Convert
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CurrencyConverter;