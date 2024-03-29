import { lazy, Suspense } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";

const Page404 = lazy(() => import('../pages/404'))
const MainPage = lazy(() => import('../pages/MainPage'))
const ComicsPage = lazy(() => import('../pages/ComicsPage'))
const SinglePage = lazy(() => import('../pages/SinglePage'))
const SingleComicLayout = lazy(() => import('../pages/SingleComicLayout/SingleComicLayout'));
const SingleCharLayout = lazy(() => import('../pages/SingleCharLayout/SingleCharLayout'));

const App = () => {
   return (
      <Router>
         <div className="app">
            <AppHeader />
            <main>
               <Suspense fallback={<span>Loading...</span>}>
                  <Routes>
                     <Route path='/' element={<MainPage />} />
                     <Route path='/comics' element={<ComicsPage />} />
                     <Route path='/comics/:id' element={<SinglePage Component={SingleComicLayout} dataType={'comic'} />} />
                     <Route path='/characters/:id' element={<SinglePage Component={SingleCharLayout} dataType={''} />} />
                     <Route path="*" element={<Page404 />} />
                  </Routes>
               </Suspense>
            </main>
         </div>
      </Router >
   )
}

export default App;