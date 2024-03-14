import '../App.css';
// import  Navbar  from './Navbar';
import { Hero } from './Hero';
import About from './About';
import Service from './Service';
import Features from './Feature';
import Projects from './Projects';
import { Blogs } from './Blogs';
import NewsLetter from './NewsLetter';
// import Footer from './Footer';






function Home() {
    return (
      <div>
        {/* <Navbar /> */}
        <Hero />
        <About />
        <Service />
        <Features />
        <Projects />
        <Blogs />
        <NewsLetter />
        {/* <Footer /> */}
      </div>
    );
  }
  
  export default Home;