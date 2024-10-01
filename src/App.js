import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <Input type="text" label="Username" />
                    <Button label="Submit" />
                </div>
            </header>
        </div>
    );
}

export default App;
