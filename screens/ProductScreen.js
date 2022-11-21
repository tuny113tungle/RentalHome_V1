import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image } from 'react-native'

export default class ProductScreen extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.sc2}>
                <View style={styles.sc2Top}>
                    <Image
                        source={require('./images/do.jpg')}
                        style ={styles.imgDo}
                    />

                    <Text style={styles.txtName}>
                    Điện Thoại Vsmart Joy 3- 3 Hàng chính hãng
      
                    </Text>

                

                </View>

                <View style={styles.sc2Bottom}>

                    <Text style={styles.txtChonMau}>
                    Chọn một màu bên dưới:
                    </Text>

                    
                    <Button
                        title='Go back'
                        onPress={() => { navigation.goBack() }}

                    >

                    </Button>

                    <Button title="Sig Up " onPress={() => { navigation.navigate('Sig Up') }}>

                    </Button>
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    sc2:{
        flex: 1,
    },

    sc2Top:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgDo: {
        flex:1,
        width: 200,
        height: 250,
    },

    txtName: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
    },

    sc2Bottom: {
        flex: 1,
    },

    txtChonMau: {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 70,
    },
})
