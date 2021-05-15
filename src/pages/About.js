import { useState, useEffect } from "react";

function About(props) {
    // Create state to hold about data
    const [about, setAbout] = useState(null);

    // Create function to make API call 
    const getAboutData = async () => {
        // Make API call and get response
        const response = await fetch(props.URL + "about");
        // Turn response into javascript object
        const data = await response.json();
        // Set the about state to the data
        setAbout(data);
    };

    // Make an initial call for the data inside a useEffect, so it only happens once a component loads
    useEffect(() => getAboutData(), []);

    // Define a function that will return the JSX needed once we get the data
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    );

    // If data arrives return the result of loaded, if not, an h1 that says loading
    return about ? loaded() : <h1>Loading...</h1>;

};

export default About;