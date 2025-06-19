import { Seperator } from "../../common/Seperator";
import styles from "./whatonmind.module.css";
import WhatOnMindList from "./WhatOnMindList";
const WhatOnMind = () => {
  let WhatOnMindHeading = "What's on your mind?---";
  return (
    <>
      <section className={styles.whatOnMind}>
        <div className="container">
          <div className="row">
            <h2 className={styles.headingText}>{WhatOnMindHeading}</h2>
            <div className="col-md-12">
              <div className="row">
                <WhatOnMindList />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Seperator />
    </>
  );
};
export default WhatOnMind;
