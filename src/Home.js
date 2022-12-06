import './Home.css';
import GreetingCard from './components/GreetingCard';
import SideNav from './components/SideNav';

function Home() {
  return (
    <div className="Home">
      <GreetingCard />
      <SideNav />
    </div>
  );
}

export default Home;
