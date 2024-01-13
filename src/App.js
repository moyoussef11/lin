import { Header } from './components/Header/Header';
import EN from './lang/en.json';
import AR from './lang/ar.json';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Hero from './pages/Hero';
import Footer from './components/footer/Footer';
import Social from './components/social/Social';
import Up from './components/btn/Up';
import { Route, Routes } from 'react-router-dom';
import Articles from './pages/Articles';
import Videos from './pages/Videos';
import OurBusiness from './pages/OurBusiness';
import OurServices from './pages/OurServices';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: EN,
      },
      ar: {
        translation: AR,
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    react: {
      useSuspense:false,
    }
  });

function App() {
  return (
    <>
      <Header />
      <Social />
      <Up />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/ourBusiness" element={<OurBusiness />} />
        <Route path="/OurServices" element={<OurServices />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
