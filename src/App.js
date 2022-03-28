import {useGlobalContext} from "./context"
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"


function App() {

  // if(loading){
  //   return (
  //     <div className="loading">
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  
  return (
    <main className="App">
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
