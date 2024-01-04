// create your App component here
import React, { useEffect, useState } from 'react';

function App() {
    const [dogImg, setDogImg] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((r) => r.json())
            .then((data) => setDogImg(data.message));
    }, []);

    return (
        <div>
            <p>{!dogImg ? 'Loading...' : null}</p>
            <img src={dogImg} alt='A Random Dog'></img>
        </div>
    );
}

export default App;
