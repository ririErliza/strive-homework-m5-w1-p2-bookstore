
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import LatestRelease from './Components/LatestRelease';


function App() {
  return (
    <div >
      <MyNav 
      title="Yo!Bookstore"
      substitle="your source of fun"/>

      
      <Welcome />

      <LatestRelease/>

      
      <MyFooter />
      
      
    </div>
  );
}

export default App;
