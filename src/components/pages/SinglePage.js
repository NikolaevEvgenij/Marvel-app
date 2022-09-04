import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import useMarvelService from '../../services/MarvelService';
import AppBanner from '../appBanner/AppBanner';


const SinglePage = ({ Component, dataType }) => {

   const [data, setData] = useState(null);

   const { id } = useParams();

   const { error, loading, getComic, getCharacter, clearError } = useMarvelService()

   useEffect(() => {
      clearError();
      switch (dataType) {
         case "comic":
            getComic(id).then(onDataLoaded)
            break;
         default:
            getCharacter(id).then(onDataLoaded)
      }
   }, [])


   const onDataLoaded = (data) => {
      setData(data)
   }


   const spinner = loading ? <Spinner /> : null
   const errorMessage = error ? <ErrorMessage /> : null
   const content = errorMessage || spinner || <Component data={data} />

   return (
      <>
         <AppBanner />
         {content}
      </>
   )
}

export default SinglePage;