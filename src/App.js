import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lorem from 'react-lorem-component'

function App() {

    const data = [
        {
            title: 'Article1',
            content: <Lorem count={1}/>
        },
        {
            title: 'Article2',
            content: <Lorem count={3}/>
        },
        {
            title: 'Article3',
            content: <Lorem count={1}/>
        },
    ]

    const Card = ({title, content}) => {
        return (
            <div className="App-card">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <article className="App-content">
                {data.map(props => Card(props))}
            </article>

        </div>
    );
}

export default App;
