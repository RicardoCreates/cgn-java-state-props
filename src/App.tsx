import {useState} from 'react'
import './App.css'
import {chars} from "./Characters.ts"
import RAndMGallery from "./components/RAndMGallery.tsx";

function App() {
    const [filter, setFilter] = useState<string>("")

    const filteredList = chars
        .filter((currywurst) => currywurst.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <>
            <input
                type="text"
                onChange={(event) => setFilter(event.target.value)}
                placeholder="Search your Character"
            />
            {filteredList.length > 0 ? (
                <RAndMGallery chars={filteredList} />
            ) : (
                <p>No Characters Found!</p>
            )}
        </>
    );
}

export default App;
