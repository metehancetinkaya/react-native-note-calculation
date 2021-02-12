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
    KeyboardAvoidingView,
    TouchableHighlight,
} from 'react-native';
import {
    add, subtract, divide, multiply,
} from 'mathjs';
import { Container, Header, Left, Body, Right } from 'native-base';

export default class NotHesaplama extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Vize: 0,
            Final: 0,
            Ortalama: 0,
            Sapma: 0,
            Tnotu: 0,
            ToplamOrtalama: 0,
        }
    }

    onChangeVizeNotu = (e) => {
        this.setState({
            Vize: e
        })
    }
    onChangeFinalNotu = (e) => {
        this.setState({
            Final: e
        })
    }
    onChangeOrtalama = (e) => {
        this.setState({
            Ortalama: e
        })
    }
    onChangeStandartSapma = (e) => {
        this.setState({
            Sapma: e
        })
    }
    puanHesaplama() {
        Tnotu =
            add(
                multiply(
                    divide(
                        subtract(
                            divide(add(this.state.Vize, this.state.Final), 2), this.state.Ortalama), this.state.Sapma), 10), 50)

        this.setState({ ToplamOrtalama: divide(add(this.state.Vize, this.state.Final), 2) });


        // 80 -100 arasında sıkıntı var hatalı değer veriyor düzeltilmesi gerekiyor
        if (80 <= this.state.Ortalama && this.state.Ortalama <= 100) {
            if (57 <= this.state.ToplamOrtalama && this.state.ToplamOrtalama <= 100) { this.setState({ Sonuc: 'AA' }) }
            else if (52 <= this.state.ToplamOrtalama && this.state.ToplamOrtalama < 57) this.setState({ Sonuc: 'BA' })
            else if (47 <= this.state.ToplamOrtalama && this.state.ToplamOrtalama < 52) this.setState({ Sonuc: 'BB' })
            else if (42 <= this.state.ToplamOrtalama && this.state.ToplamOrtalama < 47) this.setState({ Sonuc: 'CB' })
            else if (37 <= this.state.ToplamOrtalama && this.state.ToplamOrtalama < 42) this.setState({ Sonuc: 'CC' })
            else if (32 <= this.state.ToplamOrtalama && this.state.ToplamOrtalama < 37) this.setState({ Sonuc: 'DC' })
            else if (27 <= this.state.ToplamOrtalama && this.state.ToplamOrtalama < 32) this.setState({ Sonuc: 'DD' })
            else if (22 <= this.state.ToplamOrtalama && this.state.ToplamOrtalama < 27) this.setState({ Sonuc: 'FD' })
            else if (0 <= this.state.ToplamOrtalama && this.state.ToplamOrtalama < 22) this.setState({ Sonuc: 'FF' })
        }
        else if (70 < this.state.Ortalama && this.state.Ortalama < 80) {
            if (59 <= Tnotu && Tnotu <= 100) { this.setState({ Sonuc: 'AA' }) }
            else if (54 <= Tnotu && Tnotu < 59) this.setState({ Sonuc: 'BA' })
            else if (49 <= Tnotu && Tnotu < 54) this.setState({ Sonuc: 'BB' })
            else if (44 <= Tnotu && Tnotu < 49) this.setState({ Sonuc: 'CB' })
            else if (39 <= Tnotu && Tnotu < 44) this.setState({ Sonuc: 'CC' })
            else if (34 <= Tnotu && Tnotu < 39) this.setState({ Sonuc: 'DC' })
            else if (29 <= Tnotu && Tnotu < 34) this.setState({ Sonuc: 'DD' })
            else if (24 <= Tnotu && Tnotu < 29) this.setState({ Sonuc: 'FD' })
            else if (0 <= Tnotu && Tnotu < 24) this.setState({ Sonuc: 'FF' })
        }
        else if (62.5 < this.state.Ortalama && this.state.Ortalama <= 70) {
            if (61 <= Tnotu && Tnotu <= 100) { this.setState({ Sonuc: 'AA' }) }
            else if (56 <= Tnotu && Tnotu < 61) this.setState({ Sonuc: 'BA' })
            else if (51 <= Tnotu && Tnotu < 56) this.setState({ Sonuc: 'BB' })
            else if (46 <= Tnotu && Tnotu < 51) this.setState({ Sonuc: 'CB' })
            else if (41 <= Tnotu && Tnotu < 46) this.setState({ Sonuc: 'CC' })
            else if (36 <= Tnotu && Tnotu < 41) this.setState({ Sonuc: 'DC' })
            else if (31 <= Tnotu && Tnotu < 36) this.setState({ Sonuc: 'DD' })
            else if (26 <= Tnotu && Tnotu < 31) this.setState({ Sonuc: 'FD' })
            else if (0 <= Tnotu && Tnotu < 26) this.setState({ Sonuc: 'FF' })
        }
        else if (57.5 < this.state.Ortalama && this.state.Ortalama <= 62.5) {
            if (63 <= Tnotu && Tnotu <= 100) { this.setState({ Sonuc: 'AA' }) }
            else if (58 <= Tnotu && Tnotu < 63) this.setState({ Sonuc: 'BA' })
            else if (53 <= Tnotu && Tnotu < 58) this.setState({ Sonuc: 'BB' })
            else if (48 <= Tnotu && Tnotu < 53) this.setState({ Sonuc: 'CB' })
            else if (43 <= Tnotu && Tnotu < 48) this.setState({ Sonuc: 'CC' })
            else if (38 <= Tnotu && Tnotu < 43) this.setState({ Sonuc: 'DC' })
            else if (33 <= Tnotu && Tnotu < 38) this.setState({ Sonuc: 'DD' })
            else if (28 <= Tnotu && Tnotu < 33) this.setState({ Sonuc: 'FD' })
            else if (0 <= Tnotu && Tnotu < 28) this.setState({ Sonuc: 'FF' })
        }
        else if (52.5 < this.state.Ortalama && this.state.Ortalama <= 57.5) {
            if (65 <= Tnotu && Tnotu <= 100) { this.setState({ Sonuc: 'AA' }) }
            else if (60 <= Tnotu && Tnotu < 65) this.setState({ Sonuc: 'BA' })
            else if (55 <= Tnotu && Tnotu < 60) this.setState({ Sonuc: 'BB' })
            else if (50 <= Tnotu && Tnotu < 55) this.setState({ Sonuc: 'CB' })
            else if (45 <= Tnotu && Tnotu < 50) this.setState({ Sonuc: 'CC' })
            else if (40 <= Tnotu && Tnotu < 45) this.setState({ Sonuc: 'DC' })
            else if (35 <= Tnotu && Tnotu < 40) this.setState({ Sonuc: 'DD' })
            else if (30 <= Tnotu && Tnotu < 35) this.setState({ Sonuc: 'FD' })
            else if (0 <= Tnotu && Tnotu < 30) this.setState({ Sonuc: 'FF' })
        }
        else if (47.5 < this.state.Ortalama && this.state.Ortalama <= 52.5) {
            if (67 <= Tnotu && Tnotu <= 100) { this.setState({ Sonuc: 'AA' }) }
            else if (62 <= Tnotu && Tnotu < 67) this.setState({ Sonuc: 'BA' })
            else if (57 <= Tnotu && Tnotu < 62) this.setState({ Sonuc: 'BB' })
            else if (52 <= Tnotu && Tnotu < 57) this.setState({ Sonuc: 'CB' })
            else if (47 <= Tnotu && Tnotu < 52) this.setState({ Sonuc: 'CC' })
            else if (42 <= Tnotu && Tnotu < 47) this.setState({ Sonuc: 'DC' })
            else if (37 <= Tnotu && Tnotu < 42) this.setState({ Sonuc: 'DD' })
            else if (32 <= Tnotu && Tnotu < 37) this.setState({ Sonuc: 'FD' })
            else if (0 <= Tnotu && Tnotu < 32) this.setState({ Sonuc: 'FF' })
        }
        else if (42.5 < this.state.Ortalama && this.state.Ortalama <= 47.5) {
            if (69 <= Tnotu && Tnotu <= 100) { this.setState({ Sonuc: 'AA' }) }
            else if (64 <= Tnotu && Tnotu < 69) this.setState({ Sonuc: 'BA' })
            else if (59 <= Tnotu && Tnotu < 64) this.setState({ Sonuc: 'BB' })
            else if (54 <= Tnotu && Tnotu < 59) this.setState({ Sonuc: 'CB' })
            else if (49 <= Tnotu && Tnotu < 54) this.setState({ Sonuc: 'CC' })
            else if (44 <= Tnotu && Tnotu < 49) this.setState({ Sonuc: 'DC' })
            else if (39 <= Tnotu && Tnotu < 44) this.setState({ Sonuc: 'DD' })
            else if (34 <= Tnotu && Tnotu < 39) this.setState({ Sonuc: 'FD' })
            else if (0 <= Tnotu && Tnotu < 34) this.setState({ Sonuc: 'FF' })
        }
        else if (this.state.Ortalama <= 42.5) {
            if (71 <= Tnotu && Tnotu <= 100) { this.setState({ Sonuc: 'AA' }) }
            else if (66 <= Tnotu && Tnotu < 71) this.setState({ Sonuc: 'BA' })
            else if (61 <= Tnotu && Tnotu < 66) this.setState({ Sonuc: 'BB' })
            else if (56 <= Tnotu && Tnotu < 61) this.setState({ Sonuc: 'CB' })
            else if (51 <= Tnotu && Tnotu < 56) this.setState({ Sonuc: 'CC' })
            else if (46 <= Tnotu && Tnotu < 51) this.setState({ Sonuc: 'DC' })
            else if (41 <= Tnotu && Tnotu < 46) this.setState({ Sonuc: 'DD' })
            else if (36 <= Tnotu && Tnotu < 41) this.setState({ Sonuc: 'FD' })
            else if (0 <= Tnotu && Tnotu < 36) this.setState({ Sonuc: 'FF' })
        }

    }

    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Header transparent={true} androidStatusBarColor={'#f5f4f6'}>
                        <Left style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                            <Image style={{ marginLeft: 1, marginTop: 1, height: 20, width: 20, }} source={require('../../assets/ktu2.png')} />
                            <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 17, color: '#212121' }}>KTÜ Student Helper</Text>
                        </Left>
                        <Body></Body>
                    </Header>
                    <StatusBar barStyle='dark-content' />
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#212121' }}>Bağıl Not Hesaplama</Text>
                        </View>
                        <View style={{ flex: 15, alignItems: 'center' }}>
                            <View style={{ marginVertical: 11, flexDirection: 'row' }}>
                                <View style={styles.text}>
                                    <Text style={styles.textSize}>Ara Sınav Notu</Text>
                                    <Text style={styles.textSizeEng}>Midterm</Text>
                                    <TextInput
                                        style={styles.textInputSize}
                                        placeholder='Vize Notu Gir'
                                        placeholderTextColor='rgba(53, 59, 72,1.0)'
                                        autoCorrect={false}
                                        keyboardType={'numeric'}
                                        value={this.state.Vize}
                                        onChangeText={this.onChangeVizeNotu}
                                    />
                                </View>
                                <View style={styles.text}>
                                    <Text style={styles.textSize}>Final / Büt Sınavı Notu</Text>
                                    <Text style={styles.textSizeEng}>Final Exam</Text>
                                    <TextInput
                                        style={styles.textInputSize}
                                        placeholder='Final Notu Gir'
                                        placeholderTextColor='rgba(53, 59, 72,1.0)'
                                        autoCorrect={false}
                                        keyboardType={'numeric'}
                                        value={this.state.Final}
                                        onChangeText={this.onChangeFinalNotu}
                                    />
                                </View>
                            </View>
                            <View style={{ marginVertical: 11, flexDirection: 'row' }}>
                                <View style={styles.text}>
                                    <Text style={styles.textSize}>Sınıf Ortalaması</Text>
                                    <Text style={styles.textSizeEng}>Class Average</Text>
                                    <TextInput
                                        style={styles.textInputSize}
                                        placeholder='Sınıf Ort. Gir'
                                        placeholderTextColor='rgba(53, 59, 72,1.0)'
                                        autoCorrect={false}
                                        keyboardType={'numeric'}
                                        value={this.state.Ortalama}
                                        onChangeText={this.onChangeOrtalama}
                                    />
                                </View>
                                <View style={styles.text}>
                                    <Text style={styles.textSize}>Standart Sapma</Text>
                                    <Text style={styles.textSizeEng}>Stand. Deviation</Text>
                                    <TextInput
                                        style={styles.textInputSize}
                                        placeholder='S.S Gir'
                                        placeholderTextColor='rgba(53, 59, 72,1.0)'
                                        autoCorrect={false}
                                        keyboardType={'numeric'}
                                        value={this.state.Sapma}
                                        onChangeText={this.onChangeStandartSapma}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity style={styles.buttonSize}
                                onPress={() => this.puanHesaplama()}>
                                <Text style={{ fontSize: 23, color: 'white' }}>Hesapla</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 25 }}>{this.state.ToplamOrtalama}</Text>
                                <Text style={{ fontSize: 25 }}>{this.state.Sonuc}</Text>
                            </View>
                        </View>
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
        width: 250,
        backgroundColor: '#212121',
        borderRadius: 17,
        shadowOpacity: 0.27,
        shadowRadius: 1,
        elevation: 10,
        marginVertical: 11,
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