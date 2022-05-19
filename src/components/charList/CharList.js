import { Component } from 'react';
import { ReactDOM } from 'react-dom';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import './charList.scss';


class CharList extends Component {
   state = {
      CharList: [],
      loading: true,
      error: false,
      newItemLoading: false,
      offset: 400,
      charEnded: false,
      refs: []
   }

   marvelService = new MarvelService();

   componentDidMount() {
      this.onLoad()
   }

   onCharListLoading = () => {
      this.setState({
         newItemLoading: true
      })
   }

   onCharListLoaded = (CharList) => {
      let ended = false
      if (CharList.length === 0) ended = true

      this.setState(state => ({
         CharList: state.CharList.concat(CharList),
         loading: false,
         error: false,
         newItemLoading: false,
         offset: state.offset + 9,
         charEnded: ended
      }))
   }

   onError = () => {
      this.setState({
         loading: false,
         error: true
      })
   }
   onCharLoading = () => {
      this.setState({
         loading: true
      })
   }

   onLoad = () => {
      this.onCharListLoading();
      this.marvelService
         .getAllCharacters(this.state.offset)
         .then(this.onCharListLoaded)
         .catch(this.onError)
   }

   itemRefs = [];

   setMyRef = elem => {
      this.itemRefs.push(elem);
      console.log(this.itemRefs)
   }

   onFocus = (i) => {
      this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
      this.itemRefs[i].classList.add('char__item_selected')
      this.itemRefs[i].focus();
   }

   RenderCharList = (CharList) => {
      const charasters = CharList.map((item, i) => {
         const { id, name, thumbnail } = item

         let imgStyle = { 'objectFit': 'cover' };
         if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = { 'objectFit': 'unset' };
         }
         return (
            <li
               tabIndex={0}
               ref={this.setMyRef}
               className="char__item"
               key={id}
               onClick={() => {
                  this.props.onCharSelected(id);
                  this.onFocus(i)
               }}
               onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") {
                     this.props.onCharSelected(id);
                     this.onFocus(i)
                  }
               }}>
               <img src={thumbnail} alt="abyss" style={imgStyle} />
               <div className="char__name">{name}</div>

            </li>
         )
      })
      return (
         <ul className="char__grid">
            {charasters}
         </ul>
      )
   }


   render() {
      const { CharList, loading, error, newItemLoading, charEnded } = this.state;
      const spinner = loading ? <Spinner /> : null
      const errorMessage = error ? <ErrorMessage /> : null
      const content = errorMessage || spinner || this.RenderCharList(CharList)

      return (
         <div className="char__list">
            {content}

            <button className="button button__main button__long"
               disabled={newItemLoading}
               style={{ "display": charEnded ? "none" : 'block' }}
               onClick={this.onLoad}>
               <div className="inner">load more</div>
            </button>
         </div>
      )
   }
}

CharList.propTypes = {
   onCharSelected: PropTypes.func.isRequired
}

export default CharList;