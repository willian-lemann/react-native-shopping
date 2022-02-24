import React from "react";

import Routes from "./src/routes";

import Provider from "./src/store";

const App = () => {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
};

export default App;
