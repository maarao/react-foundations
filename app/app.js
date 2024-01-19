import { useState } from 'react';

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
    }

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = useState(0);

    function handleClick() {
        console.log("increment like count")
        setLikes(likes + 1);
    }

    return (
        <div>

            {/* Nesting the Header component */}
            <Header title="HEHEHA" />

            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like({likes})</button>

        </div>
    );
}
root.render(<HomePage />);