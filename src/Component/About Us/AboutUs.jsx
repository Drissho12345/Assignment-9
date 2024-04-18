
const AboutUs = () => {
    return (
        <div className="grid gap-9 lg:grid-cols-2 mt-9 mb-14 sm:grid-cols-1">
            <div>
                <img className="rounded-xl lg:h-[550px]" src="https://i.pinimg.com/originals/4a/16/f3/4a16f3d7d37d3780af9ef7173e91437d.jpg" alt="" />
            </div>
            <div>
                <h1 className="text-center font-bold text-3xl">About Us</h1>
                <div>
                    <h3 className="font-bold text-xl pt-2 pb-2">About Advanced Industrial Technologies</h3>
                    <p>Advanced Industrial Technologies is a leading provider of industrial solutions, dedicated to revolutionizing manufacturing processes and driving progress across various sectors. With a proud heritage spanning 7 years, reliability, and innovation.</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl pt-2 pb-2">Our Mission</h3>
                    <p>At Advanced Industrial Technologies, our mission is simple yet ambitious: to empower industries through cutting-edge technology, unparalleled expertise, and a relentless commitment to customer satisfaction. We strive to exceed expectations, challenge conventional norms, and deliver value-driven solutions that propel businesses forward.</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl pt-2 pb-2">Commitment to Quality and Safety</h3>
                    <p>At Advanced Industrial Technologies, quality and safety are paramount. We adhere to stringent quality control measures and industry standards to ensure that every project we undertake meets the highest levels of performance and reliability. Our dedication to safety extends beyond compliance; it is ingrained in our culture and reflected in every aspect of our operations.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;