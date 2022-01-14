import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title : 'what is react',
        content: 'React is great'
    },
    {
        title : 'what is react2',
        content: 'React is great2'
    },
    {
        title : 'what is react3',
        content: 'React is great3'
    }
]

const App = () => {
    // return <div><Accordion items={items}/></div>
    return <div><Search /></div>
}

export default App;