import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Image from 'next/image'

export const Contact = () => {

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
    <div className={styles.ContactCont}>
        <h1>{t("contactheadingone")}</h1>
        <p>{t("contacttitleone")}</p>
        <div className={styles.card}>
            <h1 className={styles.h1}>{t("contactheadingtwo")}</h1>
            <p className={styles.h1}>{t("contactheadingtwo")}</p>
            <button className={styles.telegram}>
                <Image src={'/images/nav/telegram.png'} alt="" width={30} height={30}/>
            </button>
            <button className={styles.telegram}>
                <Image src={'/images/nav/phone.png'} alt="" width={30} height={30}/>
            </button>
            <br/>
            <button className={styles.contact}>
            {t("contactbtnone")}
            </button>
            
            <button className={styles.contact1}>
            {t("contactbtntwo")}
            </button>
            <br/>
            <li><span>{t("comntacttitle")}</span></li>
        </div>
    </div>
  )
}
