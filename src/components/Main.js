//import "../style/App.scss";
import Form from "./Form";
import Preview from "./Preview";
import "../style/layout/_card-page.scss";

function Main() {
  return (
    <main className="main">
      <Preview />
      <Form />
    </main>
  );
}

export default Main;