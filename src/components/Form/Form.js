import React from 'react';
import AppContext from '../../context';
import Option from './Option/Option';
import Button from '../Button/Button';
import styles from './Form.module.scss';
import Input from './Input/Input';

class Form extends React.Component {

    state = {
        name: '',
        quantity: '',
        measure: '',
        category: 'fruit'
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    selectLoad = category => {
        this.setState({
            category: category
        })
    }

    render() {

        return (
            <AppContext.Consumer>
                {(context) => (

                    <form className={styles.form} onSubmit={(e) => context.addProduct(e, this.state)}>

                        <Input label="Product name:" name="name" value={this.state.name} onChange={this.handleInputChange}/>
                        <Input label="Quantity:" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} type="number"/>
                        <Input label="Measure:" name="measure" value={this.state.measure} onChange={this.handleInputChange}/>

                        <select className={styles.select} name="category" onChange={this.handleInputChange}>
                            {
                                context.categories.map(elem => (
                                    <Option key={elem.name} value={elem.name} />
                                ))
                            }
                        </select>
                        <Button>Wyślij</Button>
                    </form>
                )}
            </AppContext.Consumer>
        );
    }
}


export default Form;