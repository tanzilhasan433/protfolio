/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */



const TopSkillsCard = ({skillsItem}) => {
    const { name, logo, Exp, level } = skillsItem;
    return (
        //  <div className="card w-96 bg-base-100 shadow-xl">
        //         <figure>
        //             <img
        //                 src={img}
        //                 alt="image"
        //             />
        //         </figure>
        //         <p className='font-bold absolute top-2 p-3 left-[300px] text-sm bg-[#fa6a57] badge text-white'></p>
        //         <div className="card-body">
        //             <h2 className="card-title">
        //                 {name}
        //                 <div className="badge badge-success text-white">TOP</div>
        //             </h2>
                    

        //             <div className="card-actions justify-end">
        //                 <div className="badge badge-outline">Course</div>
        //                 <div className="badge badge-outline">Best</div>
        //             </div>
        //         </div>
        //     </div>

                <div className="card card-side w-96 bg-base-100 shadow-xl">
                           <figure><img src={logo} alt="img"/></figure>
                     <div className="card-body">
                              <h2 className="card-title"> {name} </h2>
                              <p> {Exp} Years Experience</p>
                               <p> {level} </p>
                    </div>
               </div>
    );
};

export default TopSkillsCard;