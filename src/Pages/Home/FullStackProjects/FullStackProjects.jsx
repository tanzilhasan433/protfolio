import { useEffect, useState } from "react";
import TopProjectsCard from "../../../Components/TopProjectsCard/TopProjectsCard";
import { Link } from "react-router-dom";

const FullStackProjects = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/projects')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div>
            <h2 className="text-center text-blue-800 ">My Full stack Projects </h2>
            <div className="grid justify-center p-14 md:grid-cols-3 gap-5">
           
            <>
              
                {
                    instructors.map(projects => <TopProjectsCard
                            key={projects._id}
                            projects={projects}
                        ></TopProjectsCard>
                    )
                }
           
        </>

        </div>
        <div className="text-center mb-10">
            <Link to="projects">
                <button className="btn w-96 btn-outline ">See All Classes </button>
            </Link>
        </div>
        </div>
    );
};

export default FullStackProjects;