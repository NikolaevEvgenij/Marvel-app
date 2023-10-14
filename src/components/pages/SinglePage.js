import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useMarvelService from '../../services/MarvelService';
import AppBanner from '../appBanner/AppBanner';
import setContent from '../../utils/setContent';


const SinglePage = ({ Component, dataType }) => {

   const [data, setData] = useState(null);

   const { id } = useParams();

   const { process, setProcess, getComic, getCharacter, clearError } = useMarvelService()

   useEffect(() => {
      clearError();
      switch (dataType) {
         case "comic":
            getComic(id).then(onDataLoaded)
               .then(() => setProcess('confirmed'))
            break;
         default:
            getCharacter(id).then(onDataLoaded)
               .then(() => setProcess('confirmed'))
      }
   }, [])


   const onDataLoaded = (data) => {
      setData(data)
   }

   return (
      <>
         <AppBanner />
         {setContent(process, Component, data)}
      </>
   )
}

export default SinglePage;