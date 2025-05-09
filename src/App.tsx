import { sdk } from "@farcaster/frame-sdk";
import { useEffect } from "react";
import Navbar from "./components/Navbar.tsx";

function App() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <>
     <Navbar />
    </>
  );
}

export default App;
