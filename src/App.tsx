// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateForm from './pages/CreateForm';
import PreviewForm from './pages/PreviewForm';
import MyForms from './pages/MyForms';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/create">Create Form</Link> |{' '}
        <Link to="/myforms">My Forms</Link>
      </nav>
      <Routes>
        <Route path="/create" element={<CreateForm />} />
        <Route path="/preview/:formId?" element={<PreviewForm />} />
        <Route path="/myforms" element={<MyForms />} />
      </Routes>
    </Router>
  );
}

export default App;