import React from 'react'
import { StyleSheet, View, Text, TextInput, Keyboard, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function LoginForm() {
    const formik = useFormik({
        initialValues: initialValues()
    })

    const navigation = useNavigation()
    const goToUser =() =>{
        navigation.navigate("Records")
    }
    return (
        <View style={styles.content}>
            <View style={styles.contentImage}>
                <Image source={require('../../assets/logoUninphu.png')} style={styles.image} />
            </View>
            <View style={styles.contentForm}>
                <Text style={styles.title}>Iniciar Sesión</Text>
                <TextInput
                    placeholder='Username'
                    style={styles.input}
                    autoCapitalize='none'
                />
                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    autoCapitalize='none'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.touch} onPress={goToUser} >
                    <Text style={styles.touchText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function initialValues(){
    return{
        username:"",
        password:""
    }
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 50,
        marginHorizontal: 50,
    },
    contentImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 100,
        marginBottom: 5,
        height: 200,
    },
    image: {
        width: '100%',
        height: 170
    },
    contentForm: {
        marginTop: 50,
    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    touch: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 50,
        height: 50,
        backgroundColor: '#F26A1B',
        borderRadius: 20,
    },
    touchText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    }
})