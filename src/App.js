import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import UserPage from "./Pages/UserPage/UserPage";

function App() {
    return (
        <div className="App">

                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/user/*' element={<UserPage/>}/>
                </Routes>

        </div>
    );
}

export default App;
