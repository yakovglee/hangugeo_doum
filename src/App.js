import FlipCard from "./components/FlipCard";

import { data } from "./data";

function App() {
    return (
        <div className="flex flex-wrap justify-center mt-10">
            {data.map((entry) => (
                <FlipCard
                    key={entry.id}
                    chapter_name={entry.chapter_name}
                    translation={entry.translation}
                />
            ))}
        </div>
    );
}

export default App;
