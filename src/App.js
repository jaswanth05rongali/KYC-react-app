import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import KYCNavBar from './components/navBar';
import './App.css';

class App extends React.Component{
    render(){
        return (
            <div>
                <KYCNavBar />
                <Routes />
            </div>
        );
    }
}

export default App;
