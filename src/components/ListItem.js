import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import CardSection from './common/CardSection';
import * as actions from '../actions';

// {connect} Connect to call an action creator

class ListItem extends Component {

    // All elements will be animated if the layoutanimation
    // is called before the update takes place
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }
    render() {
        const { titleStyles } = styles;
        const { id, title } = this.props.library;

        // Select library is an action
        return (
            <TouchableWithoutFeedback 
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection >
                        <Text style={titleStyles}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyles: {
        fontSize: 18,
        paddingLeft: 15
    }
};

// Selected library id was wired up to the SelectionReducer
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

// First argument of connect is for only maptoprops - Set to null since it is required
// Connect helper is doing two things: 
// 1. Mutates the action creators so they are automatically dispatched to redux store 
// 2. modifying what data will show up as props in the ListItem Componen
export default connect(mapStateToProps, actions)(ListItem);
