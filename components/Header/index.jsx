import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

import Image from 'next/image'

export const Header = () => {
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
    <div className={styles.navCont}>
      <ul>
      <li>
           <Image src={'/images/nav/Logo.png'} alt="logo" width={198} height={62} className={styles.logo} />
         </li>
         <li>
           <h1 className={styles.text1}>8-800-700-60-50</h1>
           <li className={styles.text2}><span>{t("time")}</span></li>
         </li>
         <li> 
           {/* <p>{t("title")}</p> */}
         </li>
         <li>
           <Image src={'/images/nav/telegram.png'} alt="logo" width={32} height={26} className={styles.image} />
         </li>
         <li>
           <Image src={'/images/nav/phone.png'} alt="logo" width={32} height={26} className={styles.image} />
         </li>
      <li>
        <select
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
        >
          <option value="en">En</option>
          <option value="uz">Uz</option>
          <option value="ru">Ru</option>
        </select>
      </li>
      </ul>
    </div>
  );
};
