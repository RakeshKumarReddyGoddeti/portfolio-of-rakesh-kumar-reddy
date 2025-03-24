import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles/mainStyles.jsx";
import GlobalStyles from './styles/mainStyles.jsx';

import Home from './Components/Pages/Home.jsx';
import About_page_content from './Components/Molecules/About_page_content.jsx';
import Resume from './Components/Molecules/Resume.jsx';
import Education from './Components/Molecules/Education.jsx';
import Works from './Components/Molecules/Works.jsx';
import Contact from './Components/Molecules/Contact.jsx';


function App() {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />}>
          <Route index element={<About_page_content />} />
          <Route path="about" element={<About_page_content />} />
          <Route path="resume" element={<Resume />} />
          <Route path="education" element={<Education />} />
          <Route path="works" element={<Works />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
