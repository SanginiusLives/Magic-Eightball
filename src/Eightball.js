import React, { useState } from 'react';
import './Eightball.css'

function Eightball () {
    const questions = [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ];

    const rand = Math.floor(Math.random() * questions.length);
    
    const [msg, setAnswer] = useState("Think of a question");
    const [color, setColor] = useState("black");
    const [colorCount, setColorCount] = useState({});
    const ballColor = {backgroundColor: color};

    const ballChange = () => {
        let randQuestion = questions[rand];
        setAnswer(randQuestion.msg);
        setColor(randQuestion.color);

        setColorCount(count => ({
            ...count,
            [randQuestion.color]: (count[randQuestion.color] || 0) + 1
        }))
    };

    const reset = () => {
        setAnswer("Think of a question");
        setColor('black');
        setColorCount({})
    }
    

    return (
        <div>
            <div id="eightball" style={ballColor} onClick={ballChange}>
                <p>{msg}</p>
            </div>

            <button onClick={reset}>Reset the Eightball</button>
            <h2>Color Count</h2>
            <div className="flex">
                {Object.entries(colorCount).map(([color, count]) => (
                    <p>{color}: {count}</p>
                ))}
            </div>
        </div>
    )
};

export default Eightball;