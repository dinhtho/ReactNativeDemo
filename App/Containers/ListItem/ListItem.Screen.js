import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItemAction } from './ListItem.Action'
import PropTypes from 'prop-types';
import { Images } from '../../Themes'

import {
    Text,
    View,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    BackHandler,
    ToastAndroid
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

    renderSeparator = () => (
        <View
            style={{
                backgroundColor: 'white',
                height: 2,
            }}
        />
    );

    onClickItem(index) {
        console.log('click at ' + index);
        ToastAndroid.show('click at ' + index, ToastAndroid.SHORT)

    }
    renderItem = ({ item, index }) => {
        let url;
        let name
        if (item && item.files && item.files.length > 0) {
            url = item.files[0].large_url;
            name = item.name
        }
        return (
            <TouchableWithoutFeedback onPress={() => this.onClickItem(index)}>
                <View style={{ height: 120 }} >

                    <Image
                        style={{ flex: 1 }}
                        source={url ? { uri: url } : Images.ignite}
                    />
                    <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                        <Text style={{ backgroundColor: 'transparent' }}>{name}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }



    render() {
        return (


            <FlatList
                ref={(ref) => { this.flatListRef = ref; }}
                keyExtractor={(item, index) => index}
                data={this.props.data}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem={this.renderItem}
                initialNumToRender={6} // 6 items will load in the first time
                windowSize={4} // 4 items will load before it's visible (2 on top and 2 below bottom)


            />




            // <ListView
            //     dataSource={this.state.dataSource}
            //     renderRow={this.renderRow.bind(this)}
            // />


        );
    }

    // scroll flatlist 
    onBackPress() {
        this.flatListRef.scrollToIndex({ animated: true, index: 0 });
        return true;
    }
    componentDidMount() {
        this.props.fetchData(ListItemAction.listItemFetch());
        // Back pressed 
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
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