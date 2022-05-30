import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
   const { loading, request, error, clearError } = useHttp();

   const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   const _apiKey = 'apikey=6384ce9cf17f02f85ebfa13f965d5627';
   const _baseOffset = 400;


   const _transformCharacter = (char) => {
      return {
         id: char.id,
         name: char.name,
         description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
         thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
         homepage: char.urls[0].url,
         wiki: char.urls[1].url,
         comics: char.comics.items
      }
   }

   const _transformComic = (comic) => {
      return {
         id: comic.id,
         title: comic.title,
         description: comic.description || 'There is no description',
         pageCount: comic.pageCount ? `${comic.pageCount} p.` : 'No information about the number of pages',
         language: comic.textObjects.language || 'en-us',
         thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
         price: comic.prices.price ? `${comic.prices.price}$` : 'not available'
      }
   }

   const getAllCharacters = async (offset = _baseOffset) => {
      const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`)
      return res.data.results.map(item => _transformCharacter(item))
   }

   const getCharacter = async (id) => {
      const res = await request(`${_apiBase}characters/${id}?${_apiKey}`)
      return _transformCharacter(res.data.results[0]);
   }

   const getComics = async (offset = _baseOffset) => {
      const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`)
      return res.data.results.map(comic => _transformComic(comic))
   }

   const getComic = async (id) => {
      const res = await request(`${_apiBase}comics/${id}?${_apiKey}`)
      return _transformComic(res.data.results[0]);
   }


   return { loading, error, getAllCharacters, getCharacter, getComics, getComic, clearError }
}

export default useMarvelService