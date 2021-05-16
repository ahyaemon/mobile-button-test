import React, {useState} from 'react';
import './App.css';

function App() {
    const [s, setS] = useState('')
        return (
        <div className="App">
            <h1>mobile button test</h1>
            <hr/>
            <p>pressed button: {s}</p>
            <div className="button"
                onClick={() => { setS('1') }}
            ></div>
        </div>
    );
}

export default App;
