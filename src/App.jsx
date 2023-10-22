import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Presentation from "./pages/Presentation";
import Portefolio from "./pages/Portefolio";
import Diplome from "./pages/Diplome";
import Logiciel from "./pages/Logiciel";

const App = () => {
  const SECTION_LIST = [
    <Presentation />,
    <Portefolio />,
    <Apropos />,
    <Diplome />,
    <Logiciel />,
    <Contact />,
  ];

  return (
    SECTION_LIST.map((e) => e)
  );
};

export default App;
