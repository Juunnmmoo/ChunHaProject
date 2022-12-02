import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './Navigation/DrawerNavigator';


export default function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
  );
}


