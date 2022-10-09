import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import LandingPage from "./pages/LandingPage";
import TabPage from "./pages/TabPage";
import {TAB_DATA} from "./data/data";


function App() {
  return (
      <>

        <Tabs>
          <TabList>
            <Tab>home</Tab>
              <Tab>tabs</Tab>
          </TabList>

            <TabPanel>
                <LandingPage/>
            </TabPanel>

            <TabPanel>
                <TabPage tabs={TAB_DATA}/>
            </TabPanel>
        </Tabs>


      </>

  );
}

export default App;
