import React from 'react';
import Settings from '../../components/Settings/Settings';
import AppContext from '../../context';


const SettingsView = () => (
    <AppContext.Consumer>
        {(context) => (
            <Settings isDark={context.isDark} minimal={context.minimal} darkChange={context.darkChange} minimalChange={context.minimalChange} />
        )}
    </AppContext.Consumer>
);

export default SettingsView;