import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import LandingPage from "./pages/LandingPage";


function App() {
  return (
      <>

        <Tabs>
          <TabList>
            <Tab>home</Tab>
          </TabList>

            <TabPanel>
                <LandingPage/>
            </TabPanel>


        </Tabs>


      </>

  );
}

export default App;
