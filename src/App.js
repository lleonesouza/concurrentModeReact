import React, { Suspense, SuspenseList, useState } from "react";
import { createResource } from "./resources";
import "./App.css";
import {User, Number} from "./components";


function App() {
  const initialResource = createResource();
  const [resource, setResource] = useState(initialResource);

  const refresh = () => {
    setResource(createResource());
  };

  return (
    <div className="App-header">

      <button onClick={refresh}>Refresh</button>

      <br />

      <SuspenseList revealOrder="together">
        <Suspense fallback={<p>loading user...</p>}>
          <User resource={resource} />
        </Suspense>

        <br />

        <Suspense fallback={<p>loading number...</p>}>
          <Number resource={resource} />
        </Suspense>
      </SuspenseList>
    </div>
  );
}

export default App;
