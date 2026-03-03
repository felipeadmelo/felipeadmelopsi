import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import YourRoutes from './YourRoutes'; // Assuming you have your routes defined in a separate file

function App() {
    return (
        <Router>
            <YourRoutes /> {/* Replace this with your actual routes */}
        </Router>
    );
}

export default App;