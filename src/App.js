import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//views
import Home from './views/Home'
import WeatherPage from './views/WeatherPage'
//context
import {CityContextProvider} from './context/CityContext';

//layout
import MainLayout from './layout/MainLayout'
function App() {
  //state
  
 
  return (
    <CityContextProvider>
      <BrowserRouter>
      <MainLayout>

        <Switch>
        <Route path="/" exact>
            <Home  />
          </Route>

          <Route path="/:city" exact>
            <WeatherPage  />
          </Route>

          <Route path="/:city/details" exact>
          <WeatherPage  />          
          </Route>

        </Switch>
        </MainLayout>

      </BrowserRouter>
    
    </CityContextProvider>
  );
}

export default App;
