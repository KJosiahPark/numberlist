import React, { useState } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import { unfold } from "ramda";

import ListCard from "./ListCard";
import AddItemPrompt from "./AddItemPrompt";
import theme from "./theme";

const App = () => {
  const [items, setItems] = useState(() =>
    unfold((n) => (n > 100 ? false : [n, n + 1]), 0)
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ListCard items={items} setItems={setItems}/>
      <AddItemPrompt items={items} setItems={setItems}/>
    </ThemeProvider>
  )
};

export default App;