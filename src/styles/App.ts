import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 85,
  },
  descriptionText: {
    marginBottom: 20,
    fontWeight: '300',
  },
  generateContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  textInput: {
    width: 220,
    height: 43,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    padding: 10,
  },
  button: {
    width: 80,
    height: 43,
    backgroundColor: '#13C296',
    marginLeft: 10,
    textAlign: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  imageContainer: {
    display: 'flex',
    width: 320,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 500,
  },
});
