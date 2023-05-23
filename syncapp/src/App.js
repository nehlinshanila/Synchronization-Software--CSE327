import Navbar from "./components/Navbar/navbar";
import Frontpage from "./components/Frontpage/frontpage";
import StatisticsChart from "./components/statistics";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Frontpage/>
      <StatisticsChart/>
    </div>
  )
}

export default App;