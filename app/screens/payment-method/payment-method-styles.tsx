/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    checkout:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    checkoutButton:{
        backgroundColor: '#51C3FE',
        borderRadius: 4,
        height: 42,
        width: 140,
    },
    creditCardImage:{
        height: 24,
        width: 100
    },
    discount:{
        flexDirection: 'row',
    },
    dotSeperator:{
        alignSelf: 'center',
        borderColor: '#51C3FE',
        borderRadius: 10,
        borderStyle: 'dotted',
        borderWidth: 2,
        height: 1,
        width: 80,
    },
    headerContainer:{
        elevation: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal:48,
        paddingVertical: 20,
    },
    paymentMethod:{
        marginHorizontal: 16,
        marginTop: 20,
    },
    paymentMethodCard:{
        borderColor: "#E0E0E0",
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 16
    },
    paymentMethodFooter:{
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 30,
    },
    paymentMethodFooterContainer:{
        justifyContent: 'space-between',
    },
    paymentMethodFullContainer:{
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 20
    },
    radioGroup:{
        alignItems: 'center',
        flexDirection: 'row'
    },
    step:{
        alignItems: 'center',
    }
})

export default styles