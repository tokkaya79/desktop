import { Route, Routes } from 'react-router-dom';

import { BoardPage } from './pages/BoardPage';
import { DetailPage } from './pages/DetailPage';

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<BoardPage />}
                />
                <Route
                    path="/detail"
                    element={<DetailPage />}
                />
            </Routes>
        </>
    );
}
export default App;


