import { useState } from "react";

import FlipCard from "./components/FlipCard";

import { data } from "./data";

function App() {

    return (

        <div className="flex flex-wrap gap-6 p-6">
            <FlipCard  />
            <FlipCard />
            <FlipCard />
            <FlipCard />
            <FlipCard  />
            <FlipCard />
            <FlipCard />
            <FlipCard />

        </div>
            
    );
}

export default App;
