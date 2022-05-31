import { useState } from 'react';

function Header({ title, italic }) {
    return <h1><u>{italic ? <em>{title}</em> : title}</u></h1>;
}

function ListItem(props) {
    return <li>{props.value}</li>
}

function Steps({ toDisplay }) {
    let steps = ["Register for a Strava account", "Join the Princeton XC/TF Summer Training Club", "View your club on this website!"]
    steps = steps.slice(0, toDisplay);
    
    return (
        <ul style={{listStyleType: "none"}}>
            {steps.map((step=value, index=index) => (
                <>
                    <ListItem key={index} value={`(${index + 1}). ${step}`} />
                    {/*<li key={index * 2}>{`${index + 1 * 2} Hi lol`}</li>*/}
                </>
            ))}
        </ul>
    )
}
function Purpose() {
    const reasons = ["Motivate each other through friendly competition", `Have fun beating up mascots from other schools`, "Make the effort I spent on this worth it"]

    return (
        <ul style={{listStyleType: "none"}}>
            {reasons.map((reason=value, index=index) => (
                <ListItem key={index} value={`(${index + 1}). ${reason}`} />
            ))}
        </ul>
    )
}

function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    return (
        <div>
            Count: <strong>{count}</strong>
            <div>
                <div style={{display: "inline-block"}}><button onClick={increment}>+</button></div>
                <div style={{display: "inline-block"}}><button onClick={decrement}>-</button></div>
            </div>
        </div>
    )
    
}

export default function HomePage() {
    return (
        <div>
            <Header title="Strava Summer Dashboard" italic={true} />
            <Header title="Welcome!" />
            <Steps toDisplay={3} />
            <Header title="So why sign up?" />
            <Purpose />

            <Counter key={"yes"}/>
        </div>
    )
}