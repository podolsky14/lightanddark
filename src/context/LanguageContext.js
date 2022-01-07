import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es";

const translation = {
    es: {  
    headerTitle: "CABECERA",
    headerLight: "CLARO",
    headerDark: "OBSCURO",
    headerContent: "Cumbia pa bailar, cumbia pa bailar....",
    mainTitle: "PRINCIPAL",
    mainContent: "Zlatan Ibrahimovic es uno de los mejores futbolistas del siglo XXI. A pesar de su altura, se caracteriza por una gran técnica al más fiel estilo Marco van Basten. También posee gran capacidad para el gol -siendo uno de los mayores goleadores de la historia- y un remate muy potente y preciso. A lo largo de su carrera nunca ganó un balón de oro ni integro el podio. Tampoco pudo ganar una UEFA Champions League. Integró la selección nacional sueca, y a pesar de ser su máximo goleador histórico, jamás llegó a jugar una instancia final de un torneo importante. No obstante, ha sido un futbolista extraordinario en cuanto a campeonatos nacionales de las ligas más importantes del mundo. Brilló principalmente en la liga italiana y francesa; teniendo excelentes actuaciones y convirtiendo goles memorables.",
    footerTitle: "PIE DE PAGINA",
    footerContent: "taladro taladro taladro, cuando mierda vas a volver(8)"
},
   en:{
   headerTitle: "HEADER",
   headerLight: "LIGHT",
   headerDark: "DARK",
   headerContent: "Cumbia to dance, cumbia to dance ...",
   mainTitle: "MAIN",
   mainContent: "Zlatan Ibrahimovic is one of the best footballers of the 21st century. Despite its height, it is characterized by a great technique in the most faithful Marco van Basten style. He also has great ability to score - being one of the greatest scorers in history - and a very powerful and precise shot. Throughout his career he has never won a ballon d'or or been on the podium. Nor could he win a UEFA Champions League. He was a member of the Swedish national team, and despite being their top scorer in history, he never played a final instance of a major tournament. However, he has been an extraordinary footballer in terms of national championships of the most important leagues in the world. It shone mainly in the Italian and French league; having excellent performances and scoring memorable goals.",
   footerTitle: "FOOTER",
   footerContent: "drill drill drill when shit are you coming back(8)"
}
}

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translation[language]);

  const handleLanguage = (e) => {
    //console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translation.es);
    } else {
      setLanguage("en");
      setTexts(translation.en);
    }
  };

  const data = { texts, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;