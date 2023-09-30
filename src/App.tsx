import Header from "./components/Header";
import Modal from "./components/Modal";
import Project from "./pages/Projects";
import Tasks from "./pages/Tasks";

function App() {
    return (
        <div className="wrapper">
            <div className="content">
                <Header></Header>
                <Tasks />
            </div>
            {/* <Modal></Modal> */}
        </div>
    );
}

export default App;