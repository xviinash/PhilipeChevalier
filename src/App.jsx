import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Presentation from "./pages/Presentation";
import Portefolio from "./pages/Portefolio";
import Diplome from "./pages/Diplome";

const App = () => {
  const SECTION_LIST = [
    <Presentation />,
    <Portefolio />,
    <Apropos />,
    <Diplome />,
    <Contact />,
  ];

  return (
    SECTION_LIST.map((e) => e)
  );
};

export default App;
