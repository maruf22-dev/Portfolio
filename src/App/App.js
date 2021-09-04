// mpm imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import GlobalStyle from './globalStyle'
//
// pages : user defined JSX : functional components
import {Contact, Home, About} from '../components/exports'
import Projects from '../ProjectsPage/projects';
//
//
function App() // App : contains all the components
{
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
           <Route path='/contact' exact component={Contact} />
           <Route path='/project' exact component={Projects} />
          {/* <Route path='/project'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px' }}>
              <a href='/' style={{ color: '#dbdbdb', textDecoration: 'none' }}> UNDER CONSTRUCTION ! ! !</a>
            </div>
          </Route> */}
        </Switch>
      </Router>
    </>
  );
};
export default App;
//
// Basis for connection (routes) of all pages
//   __  __          _____  _    _ ______ ___  ___
//  |  \/  |   /\   |  __ \| |  | |  ____|__ \|__ \ 
//  | \  / |  /  \  | |__) | |  | | |__     ) |  ) |
//  | |\/| | / /\ \ |  _  /| |  | |  __|   / /  / /
//  | |  | |/ ____ \| | \ \| |__| | |     / /_ / /_
//  |_|  |_/_/    \_\_|  \_\____/|_|    |____|____|
//
