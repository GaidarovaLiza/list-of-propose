import './App.css';
import Listing from './components/Listing';


function App(props) {
  return (
    <div className="contanier">
      <Listing item={props.item}/>
    </div>
  );
}

export default App;
