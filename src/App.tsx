import BloodGlucoseTable from "./components/BloodGlucoseTable";
import SMBGChart from "./components/SMBGChart";
import MealDashboard  from  "./components/MealDashboard";
import GlucoseReport from "./components/GlucoseReport";
import MealDashboard2 from "./components/MealDashboard2";
import EnergyIntakeChart from "./components/EnergyIntakeChart";
import MacroIntakeTable from "./components/MacroIntakeTable";

function App() {
  return (
    <div className="App">
      <BloodGlucoseTable />
      <SMBGChart/>
      <MealDashboard />
      <GlucoseReport />
      <MealDashboard2 />
      <EnergyIntakeChart />
      <MacroIntakeTable />
    </div>
  );
}

export default App;

