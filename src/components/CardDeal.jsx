import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        DeenTire App <br className="sm:block hidden" /> for managing your debts
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        This is a mobile app that tracks your debts and gives daily reports.
        It has payment feature and amazing dashboard.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
