// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Picker,
//   StyleSheet,
//   ScrollView,
//   Modal,
// } from 'react-native';
// import MainHeaderComponent from '../InitialLoginScreen/MainHeaderComponent';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icons from 'react-native-vector-icons/Feather';
// import Iconss from 'react-native-vector-icons/AntDesign';
// import {useNavigation} from '@react-navigation/native';

// const LoginScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedValue, setSelectedValue] = useState('Option 1');
//   const [showModal, setModal] = useState(false); // State to control the modal
//   const navigation = useNavigation();

//   // Function to toggle the modal
//   const toggleModal = () => {
//     setModal(!showModal);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <MainHeaderComponent />
//       <View style={styles.loginForm}>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             margin: 0,
//             height: 50,
//             backgroundColor: '#c3e4eb',
//             paddingLeft: 15,
//             paddingRight: 15,
//             alignItems: 'center',
//           }}>
//           <Text style={{color: '#4F8EF7', marginHorizontal: 5}}>Login</Text>
//           <TouchableOpacity>
//             <Text style={{color: '#4F8EF7', marginRight: 5}}>
//               Forgot password?
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View style={{padding: 15, marginTop: 50}}>
//           <View style={styles.TextInput}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 marginBottom: 30,
//               }}>
//               <View
//                 style={{
//                   borderWidth: 1,
//                   height: 50,
//                   width: '10%',
//                   justifyContent: 'center',
//                   alignContent: 'center',
//                   alignItems: 'center',
//                   backgroundColor: '#d0d7d9',
//                   borderColor: '#7e8687',
//                 }}>
//                 <Icons
//                   name="check-square"
//                   color="black"
//                   size={18}
//                   style={{
//                     marginRight: 3,
//                     alignSelf: 'center',
//                     justifyContent: 'center',
//                     alignContent: 'center',
//                     alignItems: 'center',
//                   }}
//                 />
//               </View>
//               <TouchableOpacity
//                 style={{
//                   flex: 1,
//                   borderWidth: 1,
//                   height: 50,
//                   paddingLeft: 15,
//                   borderColor: '#7e8687',
//                 }}
//                 placeholder="Registered Email"
//                 onChangeText={text => setUsername(text)}
//                 onPress={toggleModal} // Show the modal when caretdown icon is pressed
//               >
//                 <Text
//                   style={{
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     top: 15,
//                     fontSize: 16,
//                   }}>
//                   User
//                 </Text>
//                 <Iconss
//                   name="caretdown"
//                   color="#7e8687"
//                   size={16}
//                   style={{
//                     marginRight: 3,
//                     alignSelf: 'flex-end',
//                     justifyContent: 'flex-end',
//                     alignContent: 'flex-end',
//                     alignItems: 'flex-end',
//                   }}
//                 />
//               </TouchableOpacity>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 marginBottom: 30,
//               }}>
//               <View
//                 style={{
//                   borderWidth: 1,
//                   height: 50,
//                   width: '10%',
//                   justifyContent: 'center',
//                   alignContent: 'center',
//                   alignItems: 'center',
//                   backgroundColor: '#d0d7d9',
//                   borderColor: '#7e8687',
//                 }}>
//                 <Icon
//                   name="person"
//                   color="black"
//                   size={18}
//                   style={{
//                     marginRight: 3,
//                     alignSelf: 'center',
//                     justifyContent: 'center',
//                     alignContent: 'center',
//                     alignItems: 'center',
//                   }}
//                 />
//               </View>
//               <TextInput
//                 style={{
//                   flex: 1,
//                   borderWidth: 1,
//                   height: 50,
//                   paddingLeft: 15,
//                   borderColor: '#7e8687',
//                 }}
//                 placeholder="Registered Email"
//                 onChangeText={text => setUsername(text)}
//               />
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 marginBottom: 30,
//               }}>
//               <View
//                 style={{
//                   borderWidth: 1,
//                   borderColor: '#7e8687',
//                   height: 50,
//                   width: '10%',
//                   justifyContent: 'center',
//                   alignContent: 'center',
//                   alignItems: 'center',
//                   backgroundColor: '#d0d7d9',
//                 }}>
//                 <Icon
//                   name="lock-closed"
//                   color="black"
//                   size={18}
//                   style={{
//                     marginRight: 3,
//                     alignItems: 'center',
//                   }}
//                 />
//               </View>
//               <TextInput
//                 style={{
//                   flex: 1,
//                   borderWidth: 1,
//                   height: 50,
//                   paddingLeft: 15,
//                   borderColor: '#7e8687',
//                 }}
//                 placeholder="Password"
//                 secureTextEntry={true}
//                 onChangeText={text => setPassword(text)}
//               />
//             </View>
//           </View>
//         </View>
//         <View>
//           <TouchableOpacity
//             style={{
//               borderWidth: 1,
//               width: 70,
//               height: 30,
//               alignSelf: 'flex-end',
//               backgroundColor: 'green',
//               borderColor: '#7e8687',
//               marginRight: 15,
//             }}>
//             <Text
//               style={{
//                 justifyContent: 'center',
//                 alignSelf: 'center',
//                 alignItems: 'center',
//                 color: 'white',
//               }}>
//               Login
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{borderWidth: 0.6, margin: 15, borderColor: '#7e8687'}}></View>
//         <View style={{flexDirection: 'row', marginLeft: 10, marginBottom: 10}}>
//           <Text style={{textAlign: 'center', fontSize: 15}}>
//             Don't have an account?
//           </Text>
//           <TouchableOpacity
//             onPress={() => navigation.navigate('registerScreen')}>
//             <Text
//               style={{
//                 textAlign: 'center',
//                 fontSize: 15,
//                 color: '#4F8EF7',
//                 marginLeft: 7,
//               }}>
//               Sign Up Here
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={showModal}
//         onRequestClose={toggleModal}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View>
//               <TouchableOpacity
//                 onPress={() => {
//                   setSelectedValue('Option 1');
//                   toggleModal();
//                 }}
//                 style={{borderWidth: 1}}>
//                 <Text>User</Text>
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity
//               onPress={() => {
//                 setSelectedValue('Option 2');
//                 toggleModal();
//               }}
//               style={{borderWidth: 1}}>
//               <Text>Agency</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: 420,
//     height: 700,
//   },
//   TextInput: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     alignContent: 'center',
//   },
//   loginForm: {
//     top: -110,
//     left: 20,
//     borderWidth: 2,
//     borderColor: '#c3e4eb',
//     width: '90%',
//   },
//   modalContainer: {
//     // flex: 1,
//     // width:310,
//     // height:50,
//     top: 290,
//     left: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     width: 310,
//     height: 60,
//     // backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
// });

// export default LoginScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Picker,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';
import MainHeaderComponent from '../InitialLoginScreen/MainHeaderComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Feather';
import Iconss from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState('User'); // Default selection
  const [showModal, setModal] = useState(false);
  const navigation = useNavigation();

  // Function to toggle the modal
  const toggleModal = () => {
    setModal(!showModal);
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,

        // alignItems: 'center',
        // justifyContent: 'center',
      }}>
      <ScrollView style={{}}>
        <View style={{}}>
          <MainHeaderComponent />
        </View>
        <View style={styles.container}>
          <View style={styles.loginForm}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 0,
                height: 50,
                backgroundColor: '#c3e4eb',
                paddingLeft: 15,
                paddingRight: 15,
                alignItems: 'center',
              }}>
              <Text style={{color: '#4F8EF7', marginHorizontal: 5}}>Login</Text>
              <TouchableOpacity>
                <Text style={{color: '#4F8EF7', marginRight: 5}}>
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 15, marginTop: 50}}>
              <View style={styles.TextInput}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 30,
                  }}>
                  <View
                    style={{
                      borderWidth: 1,
                      height: 50,
                      width: '10%',
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#d0d7d9',
                      borderColor: '#7e8687',
                    }}>
                    <Icons
                      name="check-square"
                      color="black"
                      size={18}
                      style={{
                        marginRight: 3,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}
                    />
                  </View>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      height: 50,
                      paddingLeft: 15,
                      borderColor: '#7e8687',
                    }}
                    placeholder="Registered Email"
                    onChangeText={text => setUsername(text)}
                    onPress={toggleModal}>
                    <Text
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 15,
                        fontSize: 16,
                        color:
                          selectedValue === 'User'
                            ? 'blue'
                            : 'black' || selectedValue === 'Agency'
                            ? 'blue'
                            : 'black', // Change color on selection
                      }}>
                      {selectedValue}
                    </Text>
                    <Iconss
                      name="caretdown"
                      color="#7e8687"
                      size={16}
                      style={{
                        marginRight: 3,
                        alignSelf: 'flex-end',
                        justifyContent: 'flex-end',
                        alignContent: 'flex-end',
                        alignItems: 'flex-end',
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 30,
                  }}>
                  <View
                    style={{
                      borderWidth: 1,
                      height: 50,
                      width: '10%',
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#d0d7d9',
                      borderColor: '#7e8687',
                    }}>
                    <Icon
                      name="person"
                      color="black"
                      size={18}
                      style={{
                        marginRight: 3,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}
                    />
                  </View>
                  <TextInput
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      height: 50,
                      paddingLeft: 15,
                      borderColor: '#7e8687',
                    }}
                    placeholder="Registered Email"
                    onChangeText={text => setUsername(text)}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 30,
                  }}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#7e8687',
                      height: 50,
                      width: '10%',
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#d0d7d9',
                    }}>
                    <Icon
                      name="lock-closed"
                      color="black"
                      size={18}
                      style={{
                        marginRight: 3,
                        alignItems: 'center',
                      }}
                    />
                  </View>
                  <TextInput
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      height: 50,
                      paddingLeft: 15,
                      borderColor: '#7e8687',
                    }}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                  />
                </View>
              </View>
            </View>

            {/* Login Button */}

            <View style={{marginTop: -20}}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  width: 70,
                  height: 35,
                  alignSelf: 'flex-end',
                  backgroundColor: 'green',
                  borderColor: '#7e8687',
                  marginRight: 15,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 6,
                }}
                onPress={() => navigation.navigate('loginWebView')}>
                <Text
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderWidth: 0.6,
                margin: 15,
                marginTop: 20,
                borderColor: '#7e8687',
              }}
            />
            <View
              style={{flexDirection: 'row', marginLeft: 10, marginBottom: 10}}>
              <Text style={{textAlign: 'center', fontSize: 15}}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('registerScreen')}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    color: '#4F8EF7',
                    marginLeft: 7,
                  }}>
                  Sign Up Here
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={toggleModal}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedValue('User');
                    toggleModal();
                  }}
                  style={styles.modalOption}>
                  <Text
                    style={
                      selectedValue === 'User'
                        ? styles.selectedText
                        : styles.unselectedText
                    }>
                    User
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#7e8687',
                    top: 0,
                  }}></View>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedValue('Agency');
                    toggleModal();
                  }}
                  style={styles.modalOption}>
                  <Text
                    style={
                      selectedValue === 'Agency'
                        ? styles.selectedText
                        : styles.unselectedText
                    }>
                    Agency
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 400,
    // height: 700,
    //flex: 1,
    backgroundColor: '#fff',
  },
  TextInput: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  loginForm: {
    // top: 10,
    left: 20,
    borderWidth: 2,
    borderColor: '#c3e4eb',
    width: '90%',
    borderRadius: 5,
    // width: 350,
    height: 490,
    marginBottom: 40,
    // backgroundColor: 'gray',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 285,
    left: 69,
  },
  modalContent: {
    backgroundColor: 'white',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // padding: 20,
    // borderRadius: 10,
    height: 90,
    // top:200
    borderWidth: 1,
  },
  modalOption: {
    // borderWidth: 1,
    padding: 10,
    // margin: 5,
    width: 285,
    height: 40,
    top: -5,
    //  left:0,
    //  right:0
  },
  selectedText: {
    color: 'blue',
  },
  unselectedText: {
    color: 'black',
  },
});

export default LoginScreen;
