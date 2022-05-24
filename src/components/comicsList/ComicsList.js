import { useState, useEffect } from 'react'

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import './comicsList.scss';

const ComicsList = () => {
   const [comics, setComics] = useState([])
   const [newItemLoading, setNewItemLoading] = useState(false);
   const [offset, setOffset] = useState(400)
   const [comicEnded, setComicEnded] = useState(false)


   const { error, loading, getComics } = useMarvelService();

   useEffect(() => {
      onRequest(offset, true);
   }, [])

   const onRequest = (offset, initial) => {
      initial ? setNewItemLoading(false) : setNewItemLoading(true)
      getComics(offset)
         .then(onComicsLoaded)
   }

   const onComicsLoaded = (newComics) => {
      if (newComics.length < 8) {
         setComicEnded(true)
      }

      setNewItemLoading(false)
      setComics(comics => comics.concat(newComics))
      setOffset(offset => offset + 8)
   }

   const renderComics = (comics) => {
      const comicsList = comics.map((comic, i) => {
         const { id, title, thumbnail, price } = comic

         return (
            <li className="comics__item"
               key={i}>
               <a href="#">
                  <img src={thumbnail} alt="ultimate war" className="comics__item-img" />
                  <div className="comics__item-name">{title}</div>
                  <div className="comics__item-price">{price}</div>
               </a>
            </li>
         )
      })
      return (
         <ul className="comics__grid">
            {comicsList}
         </ul>
      )
   }

   const spinner = loading && !newItemLoading ? <Spinner /> : null
   const errorMessage = error ? <ErrorMessage /> : null
   const content = errorMessage || spinner || renderComics(comics);

   return (
      <div className="comics__list">
         {content}
         <button className="button button__main button__long"
            disabled={newItemLoading}
            style={{ "display": comicEnded ? "none" : 'block' }}
            onClick={() => onRequest(offset, false)}>
            <div className="inner">load more</div>
         </button>
      </div>
   )
}

export default ComicsList;