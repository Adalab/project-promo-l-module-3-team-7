import "../style/App.scss";
import "../style/layout/_card-page.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";




function App() {
  return (
    <div className="page__column">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
