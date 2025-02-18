import React from 'react';
import Home from './pages/home/Home';
import ThemeProvider from './shared/components/ThemeProvider';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <div className="App">
                <Home/>
            </div>
        </ThemeProvider>
    );
};

export default App;