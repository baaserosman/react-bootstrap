import MyNavbar from "./components/MyNavbar";
import CourseCard from "./components/CourseCard";
import data from "./data";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <MyNavbar />
      <CourseCard data={data} />
      <Footer />
    </div>
  );
}

export default App;
