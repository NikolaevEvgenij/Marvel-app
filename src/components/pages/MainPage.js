import { useState } from "react";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import CharSearchForm from "../charSearchForm/CharSearchForm";
import decoration from '../../resources/img/vision.png'

const MainPage = () => {

   const [selectedChar, setChar] = useState(null)

   const onCharSelected = id => setChar(id)
   return (
      <>
         <ErrorBoundary>
            <RandomChar />
         </ErrorBoundary>
         <div className="char__content">
            <ErrorBoundary>
               <CharList onCharSelected={onCharSelected}
               />
            </ErrorBoundary>
            <div>
               <ErrorBoundary>
                  <CharInfo charId={selectedChar} />
               </ErrorBoundary>
               <ErrorBoundary>
                  <CharSearchForm />
               </ErrorBoundary>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
         </div>
      </>
   )
}

export default MainPage