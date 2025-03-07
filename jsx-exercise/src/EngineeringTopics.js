import React from 'react';

function EngineeringTopics() {
    const topics = [
        {title: "Software Engineering", description: "Building innovative software solutions for the modern world."},
        {title: "Electrical Engineering", description: "Powering innovation in electronics and systems."},
        {title: "Mechanical Engineering", description: "esigning machines and systems that shape the future"},
        {title: "Chemical Engineering", description: "dvancing processes for a sustainable future."}
    ];
    return (
        <div>
            <h2>Engineering Topics</h2>
            <ul>
                {topics.map((topic, index) => (
                    <li key = {index}>
                        <h3>{topic.title}</h3>
                        <p>{topic.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EngineeringTopics;