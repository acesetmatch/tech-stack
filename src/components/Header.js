import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const { viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text>{props.headerText}
            </Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15
    }
};

export default Header;
