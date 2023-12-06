/* eslint-disable react/prop-types */

const TopProjectsCard = ({ projects }) => {
    const { img, name, web, paragraph } = projects;

    return (
        <div className="card flex w-96 bg-base-100 shadow-xl">
                 <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">new</div>
                    </h2>
                    <p>{paragraph}</p>
                    <p> {web} </p>
                </div>
          </div>
    );
};

export default TopProjectsCard;