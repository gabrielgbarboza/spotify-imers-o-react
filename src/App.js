import './App.css';
import Header from './componentes/Header/Header.js';
import Main from './componentes/Main/Main.js';
import Sidebar from './componentes/Sidebar/Sidebar.js';
import Footer from './componentes/Footer/Footer.js';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />;
      <Main />;
      <Footer />;
    </div>
  );
}

export default App;
