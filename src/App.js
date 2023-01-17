import CheckoutPage from "./components/CheckoutPage";
import { Link, Typography } from "@mui/material";
import "./App.css";
import { Box } from "@mui/system";
function App() {
  return (
    <div className="App">
      <Typography variant="h3" color="inherit" mb={4} align="center">
        Company name
      </Typography>
      <CheckoutPage />
      <Box mt={10}>
        <Typography variant="body2" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://material-ui.com/">
            Ivan Kovacevic
          </Link>
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </div>
  );
}

export default App;
