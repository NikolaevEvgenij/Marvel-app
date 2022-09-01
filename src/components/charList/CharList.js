import { useState, useRef, useEffect } from 'react';
import { ReactDOM } from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import './charList.scss';

const CharList = (props) => {

   const [charList, setCharList] = useState([]);
   const [newItemLoading, setNewItemLoading] = useState(false);
   const [offset, setOffset] = useState(400);
   const [charEnded, setCharEnded] = useState(false);

   const { loading, error, getAllCharacters } = useMarvelService();

   useEffect(() => {
      onLoad(offset, true);
   }, [])


   const onLoad = (offset, initial) => {
      initial ? setNewItemLoading(false) : setNewItemLoading(true)
      getAllCharacters(offset)
         .then(onCharListLoaded)
   }

   const onCharListLoaded = (newCharList) => {
      let ended = false
      if (newCharList.length < 9) ended = true

      setCharList(charList => [...charList, ...newCharList]);
      setNewItemLoading(false);
      setOffset(offset => offset + 9);
      setCharEnded(ended)
   }

   const itemRefs = useRef([]);

   const onFocus = (i) => {
      itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
      itemRefs.current[i].classList.add('char__item_selected')
      itemRefs.current[i].focus();
   }

   const RenderCharList = (CharList) => {
      const charasters = CharList.map((item, i) => {
         const { id, name, thumbnail } = item

         let imgStyle = { 'objectFit': 'cover' };
         if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = { 'objectFit': 'unset' };
         }
         return (
            <CSSTransition
               key={id}
               timeout={400}
               classNames='char__item'>
               <li
                  tabIndex={0}
                  ref={el => itemRefs.current[i] = el}
                  className="char__item"
                  onClick={() => {
                     props.onCharSelected(id);
                     onFocus(i)
                  }}
                  onKeyDown={(e) => {
                     if (e.key === " " || e.key === "Enter") {
                        props.onCharSelected(id);
                        onFocus(i)
                     }
                  }}>
                  <img src={thumbnail} alt="abyss" style={imgStyle} />
                  <div className="char__name">{name}</div>

               </li>
            </CSSTransition>
         )
      })
      return (
         <TransitionGroup component={'ul'} className="char__grid">
            {charasters}
         </TransitionGroup>
      )
   }

   const spinner = loading && !newItemLoading ? <Spinner /> : null
   const errorMessage = error ? <ErrorMessage /> : null
   const content = errorMessage || spinner
   const items = RenderCharList(charList)

   return (
      <div className="char__list">
         {content}
         {items}
         <button className="button button__main button__long"
            disabled={newItemLoading}
            style={{ "display": charEnded ? "none" : 'block' }}
            onClick={() => onLoad(offset)}>
            <div className="inner">load more</div>
         </button>
      </div>
   )
}


CharList.propTypes = {
   onCharSelected: PropTypes.func.isRequired
}


export default CharList;