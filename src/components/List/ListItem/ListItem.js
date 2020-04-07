import React from 'react';
import styles from './ListItem.module.scss';
import ListItemCategory from './ListItemCategory/ListItemCategory';
import Button from '../../Button/Button';
import AppContext from '../../../context';
import settings from '../../../assets/img/settings.svg';
import check from '../../../assets/img/check.svg';

class ListItem extends React.Component {

    state = {
        id: this.props.id,
        productId: this.props.id,
        name: this.props.name,
        quantity: this.props.quantity,
        measure: this.props.measure,
        edited: false
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    startEdit = (e) => {
        e.preventDefault();
        this.setState({
            edited: true
        })
    }

    endEdit = (e) => {
        this.setState({
            edited: false
        })
    }
    
    render() {
        
        const {category} = this.props;

        return(
            <AppContext.Consumer>
                { context => (
                    <li className={styles.listItem}>
                        <ListItemCategory category={category} />

                        <form className={styles.listItemForm} onSubmit={(e) => context.editProduct(e, this.state)}>

                        { this.state.edited ? 
                            (<input className={styles.productName} name="name" value={this.state.name} onChange={this.handleInputChange} />)
                            :
                            (<span className={styles.productName}>{this.state.name}</span>) 
                        }

                        { this.state.edited ? 
                            (<input className={styles.quantityInput} name="quantity" type="number" min="0" value={this.state.quantity} onChange={this.handleInputChange} />)
                            :
                            (<span>{this.state.quantity}</span>) 
                        }

                        { this.state.edited ? 
                            (<input className={styles.measureInput} name="measure" value={this.state.measure} onChange={this.handleInputChange} />)
                            :
                            (<span className={styles.measure}>/ {this.state.measure}</span>) 
                        }

                        { this.state.edited ?
                            (<Button styleButton="icon" onClick={this.endEdit}>
                                save
                                <img src={check} />    
                            </Button>)
                            :
                            (<Button styleButton="icon" onClick={this.startEdit}>
                                <img src={settings} />  
                                edit
                            </Button>)
                        }

                        </form>

                    </li>
                )}
            </AppContext.Consumer>
        )
    }

}

export default ListItem;