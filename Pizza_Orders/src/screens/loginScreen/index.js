import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import sessionActions from '../../store/session/actions'
import { loginInProgress } from '../../store/session/selector'
import { connect } from 'react-redux'

const LogInScreen = ({logIn, loginInProgress}) => {
  
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
  
    return (
    <View>
        <Text>
            Usuario
        </Text>
        <TextInput
            style={styles.input}
            onChangeText={(e)=>setUser(e)}
        />
        <Text>
            Contraseña
        </Text>
        <TextInput
            style={styles.input}
            onChangeText={(e)=>setPassword(e)}
        />
        <TouchableOpacity
            style = {styles.submitButton}
            onPress = {()=>logIn(username, password)}>
            <Text style = {styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
    </View>
  )
}

const mapDispatchToProps = dispatch => {
    return{
        logIn:((username, password)=>dispatch(sessionActions.logIn(username,password)))
    }
}

const mapStateToProps = state => {
    return{
        loginInProress:loginInProgress(state)
    }
}


const connectedLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInScreen)

export default connectedLogin

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })