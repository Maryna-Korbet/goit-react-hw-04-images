import fetchDataApi from 'services/api';
import { Component } from 'react';
import css from 'components/App/App.module.css';


export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    per_page: 12,
  }

 render() {
   return ();
  }
}

