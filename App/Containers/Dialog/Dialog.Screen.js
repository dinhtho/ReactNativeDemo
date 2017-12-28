import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, View, Text } from 'react-native'
import PopupDialog from 'react-native-popup-dialog';



class DialogScreen extends Component {

    constructor(props) {
        super(props)

    }


    render() {
        return (
            <View>
                <Button
                    title="Show Dialog"
                    onPress={() => {
                        this.popupDialog.show();
                    }}
                />
                <PopupDialog
                    width ={200}
                    height ={150}
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    dismissOnTouchOutside={false}
                    containerStyle={{paddingTop:200}}
                >
                    <View>
                        <Text>Hello</Text>
                    </View>
                </PopupDialog>
            </View>

        );

    }

    //</editor-fold>
}


function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogScreen);