import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import InputSearch from './views/InputSearch';
import Category from './views/Category';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import ProductDetails from './views/ProductDetails';
import Cart from './views/Cart';
import Payment from './views/Payment';
import SuccessOrder from './views/SuccessOrder';
import Account from './views/Account';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import { Modal } from 'react-native';
import ProductContextProvider from './contexts/ProductContext';
import Test from './views/Test';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <ProductContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InputSearch"
            component={InputSearch}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="News"
            component={News}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewsDetails"
            component={NewsDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SuccessOrder"
            component={SuccessOrder}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    // </ProductContextProvider>

    // <Test />



  );
};