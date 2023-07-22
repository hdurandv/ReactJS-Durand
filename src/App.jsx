import './App.css'
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";


function App() {

  return(
  <main className='main'> 
    <Navbar/>
    <ItemListContainer greeting ="Primer avance del proyecto, Tienda Global Peru" />
  </main>
  ) 
    
}

export default App
