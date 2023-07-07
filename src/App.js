import Navbar from './Navbar';
import './App.css';
import Content from './content';
import Reel from './Reel';
import Endsection from './Endsection';

function App() {
  return (
    <div>
    <div className="App">
        <Navbar />
        <Reel/>
        <Content/>
        <Endsection/>
    </div>
    </div>
  );
}

export default App;
