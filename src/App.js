import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HeadSection from './HeadSection/HeadSection';
import BioSection from './BioSection/BioSection';
import SkillsSection from './SkillsSection/SkillsSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import FooterSection from './FooterSection/FooterSection';

function App() {
  return (
    <div className="App">
      <HeadSection/>
      <BioSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
