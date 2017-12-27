import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItemAction } from './ListItem.Action'
import PropTypes from 'prop-types';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ListView,
    Image,
    FlatList
} from 'react-native'
import { URL } from 'url';


class ListItemScreen extends Component {
    constructor() {
        super();
        // const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        // this.state = {
        //     dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        // };
    }



    // componentWillReceiveProps(nextProp) {
    //     this.setState({
    //         dataSource: this.state.dataSource.cloneWithRows(nextProp.data)
    //     });

    // }

    renderItem(item) {
        let url;
        console.log("test")
        if (item.files && item.files.length > 0) {
            url = item.files[0].large_url;
        } else {
            return null;
        }
        return (
            <View>
                <Text>{item.name}</Text>
                <Image
                    style={{ flex: 1, height: 90 }}
                    source={{ uri: url }}
                />
            </View>
        )
    }

    componentDidMount() {
        this.props.fetchData(ListItemAction.listItemFetch());
    }


    render() {
        return (


            <FlatList
                data={this.props.data}
                renderItem={({ item }) => this.renderItem(item)}
                keyExtractor={(item, index) => index}
            />


            // <ListView
            //     dataSource={this.state.dataSource}
            //     renderRow={this.renderRow.bind(this)}
            // />


        );
    }



}

function mapStateToProps(state) {
    return {
        data: state.listItemTest.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (request) => dispatch(request)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItemScreen);