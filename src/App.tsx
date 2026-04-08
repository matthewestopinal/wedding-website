import React from 'react';
import styles from './app.module.css';
import headerImage from './assets/headerImage.jpg';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.titleWords}>
            GETTING
          </div>
          <div className={styles.titleWords}>
            MARRIED
          </div>
          <img className={styles.headerImage} src={headerImage} />
        </div>

        <div className={styles.text1}>
          Matthew and Destiny will be eloping in Colorado, and invite you to celebrate with a reception.
        </div>
        <div className={styles.location}>
          <div className={styles.bold}>February 20 2027</div>
          <div>The Parthenon</div>
          <div>Nashville TN</div>
          <div className={styles.bold}>6 - 10</div>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsSubcontainer}>
            <div className={styles.detailsTitle} >
              Details:
            </div>
            <div className={styles.detailsSubtitle}>No Gifts, No Kids :( </div>
            We are so happy to have you join us to celebrate our love and marriage.
            Your company is the only gift we need! Please do not bring any gifts, please do not attempt to give us any money.
            Our lives are abundant and we only wish to celebrate with our loved ones!
            If you feel you MUST contribute, please donate to our chosen recipient the ACLU.

            <div className={styles.button}>
              DONATE HERE
            </div>
          </div>
        </div>

        <div>
          We are so happy to have you join us to celebrate our love and marriage. 
          Your company is the only gift we need! Please do not bring any gifts, please do not attempt to give us any money.
          Our lives are abundant and we only wish to celebrate with our loved ones!
          If you feel you MUST contribute, please donate to our chosen recipient the ACLU.
        </div>

        <div>
          DONATE HERE 
        </div>

        <div>
          We love all the little ones in our lives! However, the venue and vibes of this event are not kid friendly. Please join us for this adult-only reception! 
        </div>
            
        <div>
          Our Story 
        </div>

        <div>
          After four years of living two miles apart and never meeting Matthew and Destiny met in Boulder CO in 2023. They met and quickly bonded over their common roots, loves for reading and animals, being vegetarian, and weird music. They spent a lovely summer in Boulder getting to know each other and falling in love.  
        </div>

        <div>
          They continued enjoying adventures and travels all over Colorado, and the world. Matthew asked Destiny to marry him on Sept. 23rd 2025 in Pescia Romana, Italy. They live in Fort Collins CO, with their other two loves Sparkles and newest family member - March. 
        </div>

        <div>
          Sparkles & March 
        </div>

        <div>
          Destiny ‘adopted’ Sparkles from a trash can in 2020, and she has been her ever present side kick ever since. After many years of being a girl gang duo, Sparkles happily welcome Matthew to the mix and she now serves her rightful role of queen of the house hold. All hail Queen Sparkles. 
        </div>

        <div>
          March, Marchy, Marching Girl is the newest member of the family. Matthew and Destiny adopted March, a retired racer and mommy into the family this spring. After a rough life she has joined her new family for a life of treats, naps, and snuggles. And to be an additional loyal delegate to the Queen. 
        </div>
      </div>
    </div>
  );
}

export default App;
