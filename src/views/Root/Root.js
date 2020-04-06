import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsView from '../ProductsView/ProductsView';
import ShoppingView from '../ShoppingView/ShoppingView';
import SettingsView from '../SettingsView/SettingsView';
import Header from '../../components/Header/Header';
import AppContext from '../../context';
import Modal from '../../components/Modal/Modal'

import apple from '../../assets/img/apple.svg'
import pie from '../../assets/img/pie.svg'
import jug from '../../assets/img/jug.svg'

class Root extends React.Component {

  state = {

    isModalOpen: false,

    categories: [
      {
        name: 'fruit',
        src: apple
      },
      {
        name: 'sweets',
        src: pie
      },
      {
        name: 'alkohol',
        src: jug
      }
    ],

    products: [
      {
        id: 0,
        name: 'Apple',
        quantity: 2,
        measure: 'szt',
        category: 'fruit'
      },
      {
        id: 1,
        name: 'pie',
        quantity: 1,
        measure: 'l',
        category: 'sweets'
      },
      {
        id: 2,
        name: 'pie',
        quantity: 1,
        measure: 'l',
        category: 'sweets'
      }
    ]
  }

  openModal = () => {
    this.setState({
      isModalOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false
    })
  }

  editProduct = (e, newValue) => {

    e.preventDefault();

    this.setState(prevState => ({

      products: prevState.products.map(el => (
        el.id === newValue.id ? {
          ...el,
          name: newValue.name,
          quantity: newValue.quantity,
          measure: newValue.measure
        } : el
      )
      )

    }))

  }

  addProduct = (e, item) => {
    
    e.preventDefault();
    const newItem = item;
    newItem.id = this.state.products.length;

    console.log(newItem)

    this.setState(prevState => ({
        products: [...prevState['products'], newItem]
    }))
    this.closeModal();
  }

  render() {

    const { isModalOpen } = this.state;
    const contextElement = {
      ...this.state,
      editProduct: this.editProduct,
      addProduct: this.addProduct
    }

    return (
      <BrowserRouter >
        <AppContext.Provider value={contextElement}>
          <Header openModal={this.openModal}/>
          <Switch>
            <Route exact path="/" component={ProductsView} />
            <Route path="/shopping" component={ShoppingView} />
            <Route path="/settings" component={SettingsView} />
          </Switch>
          { isModalOpen && <Modal closeModal={this.closeModal} /> }
        </AppContext.Provider>
      </BrowserRouter>
    )
  }

}

export default Root;