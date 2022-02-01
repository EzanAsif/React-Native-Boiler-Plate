import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async token => {
  try {
    let value = await AsyncStorage.getItem(token);
    console.log('this is value from user file');
    console.log(value);
    console.log(typeof value);
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};

export const token = getData('token');
export const user = getData('user');
// export const user = JSON.parse(getData('user'));
