import about1 from "../../assets/about1.jpg";

const About = () => {
  return (
    <div className="my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <img src={about1} alt="" className="w-full h-auto rounded" />
        </div>
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4 text-orange-600">About Us</h3>
          <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700">
            <li className="mb-2">
              <strong>Customer First:</strong> We prioritize our customers’
              needs and work tirelessly to meet their expectations.
            </li>
            <li className="mb-2">
              <strong>Quality:</strong> We are committed to providing products
              of the highest quality.
            </li>
            <li className="mb-2">
              <strong>Integrity:</strong> We conduct our business with honesty
              and transparency.
            </li>
            <li className="mb-2">
              <strong>Innovation:</strong> We embrace change and continually
              seek new ways to improve.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
