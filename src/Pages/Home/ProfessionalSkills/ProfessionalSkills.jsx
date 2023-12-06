// import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import TopSkillsCard from "../../../Components/TopSkillsCard/TopSkillsCard";

const ProfessionalSkills = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/skills')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [classes]);
  
  
    return (
        <>
        <h1 className="text-center">Profesional Skills</h1>
        {/* <SectionTitle title="Popular Courses" subTitle="Learn Online" /> */}
        <div className="grid justify-center p-14 md:grid-cols-3 gap-5">
            {
                classes.map(skillsItem => <TopSkillsCard
                    key={skillsItem._id}
                    skillsItem={skillsItem}
                ></TopSkillsCard>)
            }
        </div>
        <div className="text-center mb-10">
            <Link to="skills">
                <button className="btn w-96 btn-outline ">See All Classes </button>
            </Link>
        </div>
    </>
    );
};

export default ProfessionalSkills;