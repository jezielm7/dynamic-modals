import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(65, 32, 130)',
  },
  button: {
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#304050',
  },
  text: {
    fontSize: 16,
    color: '#f2c144',
  },
  modalContent: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#282a40',
  },
  detailArea: {
    alignItems: 'center', 
    justifyContent: 'center',
  },
  detailImage: {
    width: 65, 
    height: 65,
    marginBottom: 3.5,
  },
  musicTitle: {
    color: '#e4b02b',
  },
});

export default styles;