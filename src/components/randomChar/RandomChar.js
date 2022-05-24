import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService'
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

const RandomChar = () => {

   const [char, setChar] = useState({});

   const { getCharacter, loading, error, clearError } = useMarvelService();

   useEffect(() => {
      updateChar();
   }, [])

   const onCharLoaded = (char) => {
      setChar(char);
   }

   const updateChar = () => {
      clearError();
      const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
      getCharacter(id)
         .then(onCharLoaded)
   }

   const errorMessage = error ? <ErrorMessage /> : null
   const spinner = loading ? <Spinner /> : null
   const content = errorMessage || spinner || <View char={char} />
   return (
      <div className="randomchar">
         {content}
         <div className="randomchar__static">
            <p className="randomchar__title">
               Random character for today!<br />
               Do you want to get to know him better?
            </p>
            <p className="randomchar__title">
               Or choose another one
            </p>
            <button className="button button__main">
               <div className="inner" onClick={updateChar}>try it</div>
            </button>
            <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
         </div>
      </div>
   )

}


const View = ({ char }) => {
   const { name, description, thumbnail, homepage, wiki } = char

   let style = {}
   if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
      style = { objectFit: 'contain' }
   }
   return (
      <div className="randomchar__block">
         <img src={thumbnail} style={style} alt="Random character" className="randomchar__img" />
         <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">
               {description}
            </p>
            <div className="randomchar__btns">
               <a href={homepage} className="button button__main">
                  <div className="inner">homepage</div>
               </a>
               <a href={wiki} className="button button__secondary">
                  <div className="inner">Wiki</div>
               </a>
            </div>
         </div>
      </div>
   )
}

export default RandomChar;