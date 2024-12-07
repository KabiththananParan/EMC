import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
    return(
        <>
            <Navbar></Navbar>
            <Searchbar></Searchbar>
            <Products></Products>
            <About></About>
            <Footer></Footer>
        </>
    )
}

export default App;