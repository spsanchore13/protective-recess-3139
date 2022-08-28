
import Topbar from "./components/Navbar/Topbar"
import NavMenu from "./components/Navbar/NavMenu";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./component/Footer"

export default function App() {

    return (
        <div className="App">
            <Topbar />
            <NavMenu />
            <AllRoutes />
            <Footer />

            {/* <HomePage /> */}
        </div >
    );
}
