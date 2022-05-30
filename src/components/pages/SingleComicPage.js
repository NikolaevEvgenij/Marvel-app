import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import useMarvelService from '../../services/MarvelService';
import './singleComicPage.scss';

const SingleComicPage = () => {

   const [comic, setComic] = useState({});

   const { comicId } = useParams();

   const { error, loading, getComic, clearError } = useMarvelService()

   useEffect(() => {
      clearError();
      getComic(comicId)
         .then(comic => setComic(comic))
   }, [comicId])
   console.log(comic)

   const renderComic = (comic) => {
      const { description, language, pageCount, price, thumbnail, title } = comic
      return (
         <div className="single-comic">
            <img src={thumbnail} alt="x-men" className="single-comic__img" />
            <div className="single-comic__info">
               <h2 className="single-comic__name">{title}</h2>
               <p className="single-comic__descr">{description}</p>
               <p className="single-comic__descr">{pageCount}</p>
               <p className="single-comic__descr">Language: {language}</p>
               <div className="single-comic__price">{price}</div>
            </div>
            <Link to='/comics' className="single-comic__back">Back to all</Link>
         </div>
      )
   }

   const spinner = loading ? <Spinner /> : null
   const errorMessage = error ? <ErrorMessage /> : null
   const content = errorMessage || spinner || renderComic(comic)

   return (
      <>
         {content}
      </>
   )
}

export default SingleComicPage;