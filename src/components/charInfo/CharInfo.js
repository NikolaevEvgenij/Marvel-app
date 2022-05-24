
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import Skeleton from "../skeleton/Skeleton"

import './charInfo.scss';

const CharInfo = (props) => {
   const [char, setChar] = useState(null)

   const { loading, error, getCharacter } = useMarvelService();

   const onCharLoaded = (char) => {
      setChar(char);
   }

   const updateChar = () => {
      const { charId } = props;
      if (!charId) {
         return;
      }
      getCharacter(charId)
         .then(onCharLoaded)
   }

   useEffect(() => {
      updateChar();
   }, [props.charId])

   const skeleton = loading || char || error ? null : <Skeleton />
   const spinner = loading ? <Spinner /> : null
   const errorMessage = error ? <ErrorMessage /> : null
   const content = skeleton || errorMessage || spinner || <View char={char} />

   return (
      <div className="char__info">
         {content}
      </div>
   )

}

const View = ({ char }) => {
   const { name, description, thumbnail, homepage, wiki, comics } = char

   let renderComics = 'There are no comics for this character'

   if (comics.length !== 0) {
      renderComics = comics.map((item, i) => {
         if (i >= 10) { return }

         return (
            <li key={i} className="char__comics-item ">
               {item.name}
            </li>
         )
      })
   }


   let imgStyle = { 'objectFit': 'cover' };
   if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
      imgStyle = { 'objectFit': 'unset' };
   }

   return (
      <>
         <div className="char__basics">
            <img src={thumbnail} alt={name} style={imgStyle} />
            <div>
               <div className="char__info-name">{name}</div>
               <div className="char__btns">
                  <a href={homepage} className="button button__main">
                     <div className="inner">homepage</div>
                  </a>
                  <a href={wiki} className="button button__secondary">
                     <div className="inner">Wiki</div>
                  </a>
               </div>
            </div>
         </div>
         <div className="char__descr">
            {description}
         </div>
         <div className="char__comics">Comics:</div>
         <ul className="char__comics-list">
            {renderComics}
         </ul>
      </>
   )
}


CharInfo.propTypes = {
   charId: PropTypes.number
}


export default CharInfo;