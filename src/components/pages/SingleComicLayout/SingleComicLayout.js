import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

import './SingleComicLayout.scss'

const SingleComicLayout = ({ data }) => {
   if (!data) {
      return
   }
   const { description, language, pageCount, price, thumbnail, title } = data
   return (
      <div className="single-comic">
         <Helmet>
            <meta
               name="description"
               content={`${title} comic book`}
            />
            <title>{title}</title>
         </Helmet>
         <img src={thumbnail} alt={title} className="single-comic__img" />
         <div className="single-comic__info">
            <h2 className="single-comic__name">{title}</h2>
            <p className="single-comic__descr">{description}</p>
            <p className="single-comic__descr">Language: {language}</p>
            <p className="single-comic__descr">{pageCount}</p>
            <div className="single-comic__price">{price}</div>
         </div>
         <Link to='/comics' className="single-comic__back">Back to all</Link>
      </div>
   )
}
export default SingleComicLayout