import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export const Main = () => {

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
    <div className={styles.mainCont}>
        <h1>
        {t("headingone")}
        <span className={styles.line}></span>
        <span className={styles.title}>{t("headingonetitle")}</span>
        </h1>
        <p className={styles.title}>{t("maintitileone")}</p>
        <button className={styles.btn1}>{t("mainbtnone")}</button>
        <button className={styles.btn2}>{t("mainbtntwo")}</button>
    </div>
  )
}
