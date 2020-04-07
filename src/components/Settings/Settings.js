import React from 'react';
import Button from '../../components/Button/Button';
import styles from './Settings.module.scss';

class Settings extends React.Component {

    state={
        minimal: this.props.minimal
    }

    inputChange = (e) => {
        this.setState({
            minimal: e.target.value
        })
        this.props.minimalChange(e)
    }

    render() {
        const { isDark } = this.props;
        return (
            <div className={isDark ? `${styles.wrapper} ${styles.isDark}` : styles.wrapper}>
                <div className={styles.setting}>
                    <span className={styles.settingDesc}>Minimal quantity:</span>
                    <input value={this.state.minimal} type="number" onChange={(e) => this.inputChange(e)} />
                </div>
                <div className={styles.setting}>
                    <span className={styles.settingDesc}>Dark mode: </span>
                    <Button styleButton="darkModeButton" onClick={(e) => this.props.darkChange()}>
                        {isDark ? 'deactive' : 'active' }
                    </Button>
                </div>
            </div>
        );
    }
}

export default Settings;