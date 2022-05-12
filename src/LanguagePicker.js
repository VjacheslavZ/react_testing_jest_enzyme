import React from "react";

function LanguagePicker({ setLanguage }) {
  const langueges = [
    { code: 'en', symbol: '🇺🇸' },
    { code: 'emoji', symbol: '😊' },
  ];

  const languageIcons = langueges.map((lang) => {
    return (
      <span
        data-test="language-icon"
        key={lang.code}
        onClick={() => setLanguage(lang.code)}
      >
        {lang.symbol}
      </span>
    )
  })

  return (
    <div data-test="component-language-picker">
      {languageIcons}
    </div>
  )
};

export default LanguagePicker;
