import React from "react";
import { useTranslation } from "react-i18next";

const TextCompo = () => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{t("welcome")}</h1>
      <button onClick={() => handleLanguageChange("en")}>English</button>
      <button onClick={() => handleLanguageChange("es")}>Spanish</button>
      <p>{t("change_language")}</p>
    </div>
  );
};

export default TextCompo;
