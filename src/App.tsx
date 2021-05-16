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
            <div className="button"
                onClick={(e) => {
                    e.preventDefault()
                    setS('2')
                }}
            ></div>
            <div className="button"
                onTouchStart={() => {
                    setS('3')
                }}
            ></div>
            <div className="button"
                onTouchStart={(e) => {
                    e.preventDefault()
                    setS('4')
                }}
            ></div>
        </div>
    );
}

export default App;
