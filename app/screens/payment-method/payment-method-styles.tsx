/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
        justifyContent: 'space-evenly',
        paddingVertical: 20,
        paddingHorizontal: 20,
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 260,
        padding: 30,
    },
    radioGroup:{
        alignItems: 'center',
        flexDirection: 'row'
    },
    step:{
        alignItems: 'center',
    },
    checkout:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 40
    }
})

export default styles