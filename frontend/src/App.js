import { About, Header, Footer, Skills, Work, Testimonial} from './container'
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
