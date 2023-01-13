import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import {FaMobile} from "react-icons/fa"
import {AiFillCode} from "react-icons/ai"
import {AiTwotoneSetting} from "react-icons/ai"

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      {/* <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" 
      style = {{color: "red"}}/> */}
     {icon == "Mobile" ? <FaMobile style = {{color:"#3FBFD3", fontSize:"28px"}} />
     : icon == "Web" ? <AiFillCode style = {{color:"#3FBFD3", fontSize:"28px"}} /> :
     <AiTwotoneSetting style = {{color:"#3FBFD3", fontSize:"34px"}} /> }

    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the tech.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Our services are highly tailored for all modern businesses. We do all kinds
       of tech-related services. We tackle every techological aspect of your business 
       effectively.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
