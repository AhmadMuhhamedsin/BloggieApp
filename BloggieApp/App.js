import AppState from './src/AppState/AppState'
import Home from './src/screens/Home/Home';
import registerNNPushToken from 'native-notify';
export default function App() {
registerNNPushToken(5254, 'G9f4Bkrly8S5y50dtUFV20');
  return (
    <AppState/>
  );
}

