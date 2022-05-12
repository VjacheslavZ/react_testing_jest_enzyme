import React from "react";
import LanguageContext from "./contexts/languageContext";
import stringModule from './helpers/strings';

const Congrats =  ({ success  }) => {
  const language = React.useContext(LanguageContext);

  if (success) {
    return (
      <div data-test='component-congrats' className='alert alert-success'>
        <span data-test='congrats-message'>
          {stringModule.getStringByLanguage(language, 'congrats')}
        </span>
      </div>
    )
  } else {
    return (
      <div data-test='component-congrats' />
    )
  }
}

export default Congrats;
