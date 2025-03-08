import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import EngineeringTopics from './EngineeringTopics';

function App() {
  // Exercise 1: Embed JavaScript Expressions in JSX || Using a conditional statement in JSX
  const currentYear = new Date().getFullYear();
  const isLoggedIn = true;

  return (
    <div>
      {/* Exercise 1 */}

      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>Current Year: {currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
      
      {/* Exercise 2 */}

      <Home title = "Home Page" description = "Welcome to our website" />
      <About title = "About Us" description = "We are passionate about delivering quality experiences" />
      <Contact title = "Contact Us" description = "Feel free to reach out to us via email or phone." />

      {/* Exercise 3: Lists and Modularization */}

      <EngineeringTopics />

    </div>
  );
}

export default App;
