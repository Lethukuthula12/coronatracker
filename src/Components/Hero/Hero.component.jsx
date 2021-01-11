import React from 'react'
import styles from "./Hero.module.css";
import manMust2 from "../../images/01-mask-man/mask-man.svg";
import CoronaLogo from "../../images/covid.png";


const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.row1}>
          <img className={styles.image1} src={manMust2} alt="Covid-19" />
        </div>
        <div className={styles.marquee}>
          <p className={styles.inforCorona}>
            COVID-19: The Real Facts: Coronavirus is a virus causing cold and
            flu symptoms and has been around and identifiable for many, many
            decades. || In December 2019, a novel coronavirus strain was first
            detected in Wuhan, China, causing fatal respiratory disease in
            around 2% of those who contracted it. It is a completely new strain
            which is very contagious and can be serious in some cases. || This
            coronavirus has its origin in bats and originally spread to humans
            from infected animals! Now, of course, human-to-human transmission
            is the reason for the rapid spread.|| The Novel Coronavirus was
            officially named COVID-19 by the World Health Organization. Through
            global travel and spread, the outbreak has reached significant
            proportions in many parts of the globe, and has been declared a
            public health emergency. It has swept from China to several Asian,
            European, Australasian and American countries, and has reached
            African shores in the past month. ||There are now over 98 000
            recognised cases worldwide, and there have been 3356 fatalities
            (Statistics from 5th March 2020). South Africa has identified its
            first case this week, a 38-year-old male who had travelled to Italy
            in a group. We shall see more cases in South Africa in the ensuing
            weeks. ||Symptoms and diagnosis in South Africa will be complicated
            by the overlap with the annual Influenza season, starting in
            April/May. Therefore, a FLU VACCINE is particularly important this
            year.
          </p>
        </div>
        <div className={styles.row2}>
          <img className={styles.corona} src={CoronaLogo} alt="Covid-19" />
          <div className={styles.coronaDescription}>
            <p>
              What Is Corona? <br /> COVID-19 is a disease caused by a new
              strain of coronavirus. 'CO' stands for corona, 'VI' for virus, and
              'D' for disease. Formerly, this disease was referred to as '2019
              novel coronavirus' or '2019-nCoV.'
            </p>
          </div>
          <a
            href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
            target="_blank" rel="noreferrer"
          >
            <input type="submit" value="Learn More" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
