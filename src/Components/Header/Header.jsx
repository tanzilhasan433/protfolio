/* eslint-disable react/no-unescaped-entities */


const Header = () => {
    return (
        <div className="hero me-40 bg-base-200">
            <div className="hero-content  flex-col lg:flex-row-reverse ">               
                 <img src="https://i.ibb.co/y6sfGqs/93955-1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="m-10">
                <h1 className="text-5xl font-bold">Md. Tanzil Hasan</h1>
                <p className="py-6"> I'm Tanzil and I am a competitive programmer. I am passionate about computer programming, problem solving and creating efficient algorithms. I am always looking for new challenges and ways to improve my skills. I am also a strong believer in collaboration and believe that working together is the best way to solve complex problems.</p>
                <button className="btn btn-primary">Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
