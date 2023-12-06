

const Conversion = () => {
    return (
            <div>
                <h1 className="text-center">FeedBack</h1>
                <div className="hero mb-10 me-40 bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co/2cS8SZ5/contact-b1d6f289bf01c7ebf4cc.png" alt="" />
                    </div>
                    <div className="card w-[50%] shadow-xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <label className="form-control">
                        <div className="label">
                            <span className="label-text">Message</span>                            
                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Comment"></textarea>

                        </label>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Conversion;



