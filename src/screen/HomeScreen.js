import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    StatusBar,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    Platform,
    Alert,
    ImageBackground,
    TouchableHighlight,
} from 'react-native';
import {
    add, subtract, divide, multiply,
} from 'mathjs';
import { Container, Header, Left, Body, Right } from 'native-base';

export default class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Header transparent={true} androidStatusBarColor={'#f5f4f6'}>
                        <Body style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                            <Image style={{ marginLeft: 45, marginTop: 1, height: 20, width: 20, }} source={require('../../assets/ktu2.png')} />
                            <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 17, color: '#212121' }}>KTÜ Student Helper</Text>
                        </Body>
                        <Right>
                            <TouchableOpacity>
                                <Image source={require('../../assets/info.png')} />
                            </TouchableOpacity>
                        </Right>
                    </Header>
                    <StatusBar barStyle='dark-content' />
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={{ flex: 1, paddingLeft: 40, justifyContent: 'center' }}>
                            <Text style={{ marginBottom: 5, fontSize: 25, fontWeight: 'bold' }}>Ana Sayfa</Text>
                        </View>
                        <Image
                            style={{ height: 100, width: 100 }}
                            source={require('../../assets/ktu2.png')}
                        />
                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f4f6',
    },
    textSize: {
        fontSize: 20,
        color: '#212121',
        fontFamily: 'Feather',
    },
    textSizeEng: {
        fontSize: 15,
        color: '#212121',
    },
    textInputSize: {
        marginTop: 8,
        fontSize: 15,
        paddingHorizontal: 15,
        width: '100%',
        backgroundColor: '#f5f4f6',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSize: {
        height: 50,
        width: 200,
        backgroundColor: '#212121',
        borderRadius: 17,
        shadowOpacity: 0.27,
        shadowRadius: 1,
        elevation: 10,
        marginVertical: 11,
        marginHorizontal: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearButtonSize: {
        height: 50,
        width: 52,
        backgroundColor: '#ff4d4d',
        borderRadius: 17,
        shadowOpacity: 0.27,
        shadowRadius: 1,
        elevation: 10,
        marginVertical: 11,
        marginHorizontal: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        padding: 13,
        marginHorizontal: 11,
        height: 150,
        width: 150,
        borderRadius: 27,
        backgroundColor: 'white',
        shadowOpacity: 0.27,
        shadowRadius: 1,
        elevation: 10,
        justifyContent: 'flex-end',
    },
    header: {
        flex: 1,
    },
    left: {
        flex: 1,
    },
    body: {
        flex: 5,
        backgroundColor: 'green',
    },
    right: {
        flex: 1,
    },
}
)