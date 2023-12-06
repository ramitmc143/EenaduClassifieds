import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Iconss from 'react-native-vector-icons/AntDesign';
import MainHeaderComponent from '../InitialLoginScreen/MainHeaderComponent';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setModal] = useState(false);
  const [states, setState] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const navigation = useNavigation();
  console.log('state=', states);
  const toggleModal = () => {
    setModal(!showModal);
  };

  const handleStateClick = () => {
    // Fetch state data and set 'showModal' to true
    fetchDataAndOpenModal();
  };

  const fetchDataAndOpenModal = () => {
    var headers = new Headers();
    headers.append(
      'X-CSCAPI-KEY',
      'eDYwRUxxNjNkZFNOcmswdVN4R1pjb3l2NHgzU0VtcEZYVm5GQTFYdw==',
    );

    var requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow',
    };

    fetch(
      'https://api.countrystatecity.in/v1/countries/IN/states',
      requestOptions,
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
      })
      .then(result => {
        console.log(result);
        setState(result); // Set the state data
        setModal(true); // Open the modal
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleStateSelect = state => {
    if (state === '- select your address State -') {
      setSelectedState('');
    } else {
      setSelectedState(state);
    }
    setModal(false);
  };

  return (
    <ScrollView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{}}>
          <MainHeaderComponent />
        </View>
        <View style={styles.loginForm}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Registration Form</Text>
          </View>

          <View style={[styles.inputContainer]}>
            <View style={[styles.inputField]}>
              <Text style={styles.title}>
                Name <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={text => setUsername(text)}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.title}>
                Mobile Number <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Contact Number"
                onChangeText={text => setUsername(text)}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.title}>
                Email (Username) <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Email ID"
                onChangeText={text => setUsername(text)}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.title}>
                Address1 <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Address1"
                onChangeText={text => setUsername(text)}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.title}>
                Address2 <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Address2"
                onChangeText={text => setUsername(text)}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.title}>
                Address3 <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Address3"
                onChangeText={text => setUsername(text)}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.title}>
                Offline Location <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Offline Location"
                onChangeText={text => setUsername(text)}
              />
            </View>

            <View style={[styles.inputField]}>
              <Text style={styles.title}>
                Pincode <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="pincode"
                onChangeText={text => setUsername(text)}
              />
            </View>

            <View style={styles.inputField}>
              <Text style={styles.title}>
                State <Text style={{color: 'red'}}>*</Text>
              </Text>
              {/* <TextInput
              style={styles.input}
              placeholder="State"
              onChangeText={text => setUsername(text)}
            /> */}

              <TouchableOpacity
                style={[
                  styles.inputField,
                  {
                    // backgroundColor: 'pink',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  },
                ]}
                onPress={handleStateClick}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      borderWidth: 1,
                      width: '96%',
                      height: 50,
                      paddingTop: 15,
                      fontSize: 15,

                      marginLeft: 9,
                      paddingLeft: 15,
                      paddingLeft: '0%',
                      borderColor: '#7e8687',
                      // backgroundColor: 'skyblue',
                      // textAlign: 'center',
                    }}>
                    {' '}
                    {selectedState
                      ? selectedState.name
                      : ' - select your address State - '}
                  </Text>
                  <Iconss
                    name="caretdown"
                    color="#7e8687"
                    size={16}
                    style={{
                      //marginLeft: -15,
                      alignSelf: 'center',
                      //justifyContent: 'flex-end',
                      // alignContent: 'flex-end',
                      // alignItems: 'flex-end',
                      right: '60%',
                      //paddingLeft: 100,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.inputField}>
              <Text style={styles.title}>PAN Number</Text>
              <TextInput
                style={styles.input}
                placeholder="PAN (Optional)"
                onChangeText={text => setUsername(text)}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.title}>GST Number</Text>
              <TextInput
                style={styles.input}
                placeholder="GST (Optional)"
                onChangeText={text => setUsername(text)}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.title}>
                Captcha <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Type the above text"
                onChangeText={text => setUsername(text)}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('loginScreen')}>
            <Text style={styles.loginButtonText}>Register</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
          {/* <View style={styles.registerTextContainer}>
          <Text style={styles.registerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('registerScreen')}>
            <Text style={styles.signUpLink}>Sign Up Here</Text>
          </TouchableOpacity>
        </View> */}
        </View>
        {/* <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.divider}></View>
          </View>
        </View>
      </Modal> */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={toggleModal}>
          <View style={styles.modalContainer}>
            <ScrollView>
              <View style={styles.modalContent}>
                <TouchableOpacity
                  onPress={() => {
                    setModal(false);
                    handleStateSelect('- select your address State -');
                  }}
                  style={{marginTop: 5}}>
                  <Text
                    style={{fontWeight: '500', fontSize: 15, color: 'black'}}>
                    - select your address State -
                  </Text>
                </TouchableOpacity>
                {states.map((state, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.modalOption}
                    onPress={() => handleStateSelect(state)}>
                    <Text
                      style={
                        selectedState == state
                          ? styles.selectedText
                          : styles.unselectedText
                      }>
                      {state.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </Modal>
      </ScrollView>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    //padding: 10,
  },
  loginForm: {
    borderWidth: 2,
    borderColor: '#c3e4eb',
    borderRadius: 10,
    // backgroundColor: 'pink',
    margin: 10,
    // padding: 15,
    marginTop: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: '#c3e4eb',
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#4F8EF7',
    marginHorizontal: 5,
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 20,
  },
  inputField: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    //marginLeft: 15,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    height: 50,
    width: '96%',
    borderColor: '#7e8687',
  },
  loginButton: {
    borderWidth: 1,
    width: 70,
    height: 35,
    alignSelf: 'flex-start',
    backgroundColor: 'green',
    borderColor: '#7e8687',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    borderRadius: 5,
    elevation: 6,
  },
  loginButtonText: {
    color: 'white',
  },
  divider: {
    borderWidth: 0.6,
    margin: 15,
    borderColor: '#7e8687',
  },
  registerTextContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 10,
  },
  registerText: {
    textAlign: 'center',
    fontSize: 15,
  },
  signUpLink: {
    textAlign: 'center',
    fontSize: 15,
    color: '#4F8EF7',
    marginLeft: 7,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 438,
    left: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    // borderRadius: 10,
  },
  modalOption: {
    padding: 10,
    width: 333,
    height: 40,
    // top: 0,
    alignSelf: 'center',
  },
  selectedText: {
    color: 'blue',
  },
  unselectedText: {
    color: 'black',
  },
  title: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 7,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    // Other styles for your container here
  },
  // Define your other styles here as needed
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
  },
  modalOption: {
    padding: 10,
  },
  selectedText: {
    color: 'blue',
  },
  unselectedText: {
    color: 'black',
  },
});
