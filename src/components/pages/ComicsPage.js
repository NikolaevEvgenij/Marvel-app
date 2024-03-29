import { Helmet } from "react-helmet";

import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const ComicsPage = () => {
   return (
      <>
         <Helmet>
            <meta
               name="description"
               content="All our comics store in here"
            />
            <title>Comics Page</title>
         </Helmet>
         <AppBanner />
         <ErrorBoundary>
            <ComicsList />
         </ErrorBoundary>
      </>
   )
}

export default ComicsPage