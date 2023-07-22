```javascript
import React from 'react';
import { useTranslation } from 'react-i18next';

const MultiLanguageSupport = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <h2>{t('multiLanguageSupport.title')}</h2>
      <p>{t('multiLanguageSupport.description')}</p>
      <div>
        <button onClick={() => changeLanguage('en')}>{t('multiLanguageSupport.english')}</button>
        <button onClick={() => changeLanguage('fr')}>{t('multiLanguageSupport.french')}</button>
        <button onClick={() => changeLanguage('es')}>{t('multiLanguageSupport.spanish')}</button>
      </div>
    </div>
  );
};

export default MultiLanguageSupport;
```
