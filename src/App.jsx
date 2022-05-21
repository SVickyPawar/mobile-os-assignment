import logo from './logo.svg';
import './App.css';

function App() {
  var system=["Andriod","Blackberry","iPhone","Windows Phone"];

  var mobiles=["Samsumg","HTC","Micromax","Apple"];
  return (
    <div className="App">
     <h1>Mobile Operating System</h1>
     <ul>
     {system.map((e)=>{
       return <div>
         <li><h3>{e}</h3></li>
       </div> 
     })}
     </ul>
     
    
     <h1>Mobile Manufactureres</h1>
     <ul>
     {mobiles.map((brand)=>{
       return <li> <h3>{brand}</h3></li>
     })}
     </ul>
    </div>
  );
}

export default App;
