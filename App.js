import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer'

import CategoriesScreen from './Screens/CategoriesScreen';
import MealsOverviewScreen from './Screens/MealsOverviewScreen';
import MealDetailScreen from './Screens/MealDetailsScreen';
import FavoritesScreen from './Screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/FavoritesContext';

const stack = createNativeStackNavigator();
// const drawer = createDrawerNavigator();


// function DrawerNavigator(){
//   return <drawer.Navigator>
//     <drawer.Screen name='Categories' component={CategoriesScreen} />
//     <drawer.Screen name='Favorites' component={FavoritesScreen} />
//   </drawer.Navigator>
// }

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen 
              name='All Categories' 
              component={CategoriesScreen} 
            />
            <stack.Screen 
              name='MealsOverview' 
              component={MealsOverviewScreen} 
            />
            <stack.Screen
              name='MealDetails'
              component={MealDetailScreen}
              options={{title: "Meal Details"}}
            />
            <stack.Screen name='Favorites' component={FavoritesScreen}/>
          </stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

