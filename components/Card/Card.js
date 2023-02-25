import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Image from 'next/image'

export const Card = () => {

  const t = useTranslations();
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState(router.locale);

  useEffect(() => {
    if (selectedLang) {
      router.push(router.asPath, undefined, {
        locale: selectedLang,
      });
    }
  }, [selectedLang]);


  return (
    <div  className={styles.cardCont}>
      <div className={styles.box1}>
        <div className={styles.textbox}>
           <p>{t("cardtitleone")}</p>
        </div>
        <div className={styles.imgbox}>
          <Image src={'/images/image1.png'} alt="" width={80} height={130} className={styles.image}/>
        </div>
      </div> 
      <div className={styles.box2}>
        <div className={styles.textbox}>
          <p>{t("cardtitletwo")}</p>
        </div>
        <div className={styles.imgbox}>
          <Image src={'/images/image2.png'} alt="" width={80} height={130} className={styles.image}/>
        </div>
      </div>
      <div className={styles.box1}>
        <div className={styles.textbox}>
          <p>{t("cardtitilethree")}</p>
        </div>
        <div className={styles.imgbox}>
          <Image src={'/images/image3.png'} alt="" width={80} height={130} className={styles.image}/>
        </div>
      </div>
      <div className={styles.box2}>
        <div className={styles.textbox}>
          <p>{t("cardtitilefour")}</p>
        </div>
        <div className={styles.imgbox}>
          <Image src={'/images/image4.png'} alt="" width={80} height={130} className={styles.image}/>
        </div>
      </div>
      <div className={styles.text}>
        <p>{t("cardtextone")}</p>
        <p>{t("cardtexttwo")}</p>
        <p>{t("cardtextthree")}</p>
        <p>{t("cardtextfour")}</p>
        <p>{t("cardtextfive")}</p>
        <p>{t("cardtextsix")}</p>
        <p>{t("cardtextseven")}</p>
      </div>
    </div>
  )
}
