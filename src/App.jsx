import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Presentation from "./pages/Presentation";
import Portefolio from "./pages/Portefolio";

const App = () => {
  const SECTION_LIST = [
    <Presentation />,
    <Portefolio />,
    <Apropos />,
    <Contact />,
  ];

  return (
    SECTION_LIST.map((e) => e)
  );
};

export default App;
