import React, {useState} from 'react';
import './App.css';

function App() {
    const [s, setS] = useState('')
        return (
        <div className="App">
            <h1>mobile button test: 1</h1>
            <hr/>
            <p>pressed button: {s}</p>
            <div
                id="button1"
                className="button"
                onTouchStart={() => {
                    setS('1')
                }}
            ></div>
            <div
                id="button2"
                className="button"
                onTouchStart={(e) => {
                    e.preventDefault()
                    setS('2')
                }}
            ></div>
            <div
                id="button3"
                className="button"
                onTouchStart={(e) => {
                    e.preventDefault()
                    setS('3')
                }}
            ></div>
            <div
                id="button4"
                className="button"
                onTouchStart={(e) => {
                    e.preventDefault()
                    setS('4')
                }}
                onContextMenu={(e) => {
                    e.preventDefault()
                }}
            ></div>
        </div>
    );
}

export default App;
