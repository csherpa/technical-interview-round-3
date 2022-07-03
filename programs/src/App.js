import Banner from './components/Banner';
import Cards from './components/Cards/Cards';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <div className="container">
          <img
            src="https://res.cloudinary.com/wherewego/image/upload/v1633703966/lntpxfldojazr0wkpdhb.png"
            alt="WhereWeGo logl"
          />
          <nav>
            <a target="_blank" rel="noreferrer" href="https://wherewego.org">
              Learn more
            </a>
          </nav>
        </div>
      </header>
      <Banner />
      {/* Display program grid here */}
      <Cards />
    </div>
  );
}

export default App;
