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
    ImageBackground,
    FlatList,
    TouchableWithoutFeedback,
    BackAndroid
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
        console.log("aaa" + index);
    }
    renderItem(item, index) {
        let url;
        console.log("aa" + index)
        if (item.files && item.files.length > 0) {
            url = item.files[0].large_url;
        } else {
            return null;
        }
        return (
            <TouchableWithoutFeedback onPress={() => this.onClickItem(index)}>
                <View   >

                    <ImageBackground
                        style={{ flex: 1, height: 120, alignItems:'center',justifyContent:'center' }}
                        source={{ uri: url }}
                    >
                        <Text>{item.name}</Text>
                    </ImageBackground>
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
                renderItem={({ item, index }) => this.renderItem(item, index)}


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
        BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
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