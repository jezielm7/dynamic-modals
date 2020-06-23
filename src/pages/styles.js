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
    height: 180,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#282a40',
  },
  upBtn: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#364c63',
  },
  delBtn: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2c144',
  },
  modalTitle: {
    fontSize: 20,
    marginTop: 15,
    color: '#f2c144',
    textAlign: 'center',
  },
});

export default styles;