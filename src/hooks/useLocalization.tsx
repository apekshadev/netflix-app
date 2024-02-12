import { useState, useEffect } from 'react';
type Locale = 'en-US' | 'hindi';
const useLocalization = () => {
  const [locale, setLocale] = useState<Locale>('hindi');
  const [translate, setTranslate] = useState<{ [key: string]: string }>({});
  
  useEffect(() => {
    import(`../locales/${locale}`).then((module) => {
      setTranslate(module.language);
    });
  }, [locale]);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return { translate, changeLocale };
};

export default useLocalization;
