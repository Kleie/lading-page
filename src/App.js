import styled from "styled-components";
import "./App.css";

import Hero from "./components/Hero/Hero";
import Features from "./components/MainFeatures/MainFeatures";
import PricingPlans from "./components/PricingPlans/PricingPlans"

const Container = styled.div``;

function App() {
  return (
    <div className="App">

      <Container>
        <Hero />
        <Features/>
        <PricingPlans/>
      </Container>

    </div>
  );
}

export default App;
