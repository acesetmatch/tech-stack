import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        // Take list of libraries to render data to screen
        // this.datasource (datasource for listview)
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }
    
    //Element in the list that the listview is rendering.
    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        return (
            <ListView 
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
} 


// To take the global state of redux store. Takes props off of state and use them in components.
const mapStateToProps = state => {
    return { libraries: state.libraries };
};


// Syntax calls connet function, returns another function, then library list is called. 
export default connect(mapStateToProps)(LibraryList);

