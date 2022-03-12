import {useState} from "react";
import {css} from "@emotion/react";
import {Box, Button, Container, Typography, useTheme} from "@mui/material";

import logo from './logo.png';

function App() {
  const [error, setError] = useState(false);

  const theme = useTheme();

  const styles = {
    root: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    error: css`
      color: ${theme.palette.error.main};
      font-weight: bold;
    `,
    primary: css`
      color: ${theme.palette.primary.main};
    `
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <a href="https://mui.com">
          <img src={logo} className="mui-logo" alt="mui" width={64} height={64} />
        </a>

        <Box css={styles.root}>
          <Typography css={error ? styles.error : styles.primary}> Change text style clicking button </Typography>
          <Button onClick={() => setError(!error)} variant="contained"> Change color </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
