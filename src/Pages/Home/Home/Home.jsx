import Conversion from "../../../Components/Conversion/Conversion";
import Header from "../../../Components/Header/Header";
import FullStackProjects from "../FullStackProjects/FullStackProjects";
import ProfessionalSkills from "../ProfessionalSkills/ProfessionalSkills";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <ProfessionalSkills></ProfessionalSkills>
            <FullStackProjects></FullStackProjects>
            <Conversion></Conversion>
        </div>
    );
};

export default Home;