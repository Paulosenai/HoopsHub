import * as React from 'react';
import { Icon } from '@rneui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../../telas/home/HomePage';
import Drills from '../../telas/drills/Drills';
import Estatisticas from '../../telas/estatisticas/Estatisticas';
import Calendario from '../../telas/calendario/Calendario';
import Login from '../../telas/login/Login';
import Register from '../../telas/register/Register';
import HomeLogin  from '../../telas/homeLogin/HomeLogin';
import Atualizar  from '../../telas/atualizar/Atualizar';
import EstatisticasWnba from '../../telas/estatisticas/EstatisticasWnba';
import EstatisticasNBB from '../../telas/estatisticas/EstatisticasNbb';
import EstatisticasOTE from '../../telas/estatisticas/EstatisticasOte';
import CalendarioNBB from '../../telas/calendario/CalendarioNBB';
import CalendarioWNBA from '../../telas/calendario/CalendarioWNBA';
import CalendarioOTE from '../../telas/calendario/CalendarioOTE';
import Arremesso from '../../telas/arremesso/Arremesso';
import Dribles from '../../telas/dribles/Dribles';
import Passes from '../../telas/passe/Passe';
import Layup from '../../telas/layups/Layup';
import Noticias from '../../telas/home/noticia';



const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <HomePage />
  );
}

function DrillScreen() {
  return (
    <Drills />
  );
}
function StatsScreen() {
  return (
    <Estatisticas />
  );
}
function CalendarScreen() {
  return (
    <Calendario />
  );
}

const Tab = createBottomTabNavigator();

export function Inicio() {
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          // Customize tab bar styles
          tabBarStyle: { backgroundColor: 'black', borderTopColor: 'white', borderTopWidth: 1 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Drills':
                iconName = focused ? 'basketball' : 'basketball-outline';
                break;
              case 'Statistics':
                iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                break;
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Calendar':
                iconName = focused ? 'calendar' : 'calendar-outline';
                break;
              
            }
            return <Icon type='ionicon' name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'orange',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Drills" component={DrillScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Statistics" component={StatsScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Calendar" component={CalendarScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
  )
}

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='HomeLogin'>
        {/*telas principais*/}
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="HomeLogin" component={HomeLogin} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Atualizar" component={Atualizar} /> 
        <Stack.Screen name="Login" component={Login} />
        {/*Estatisticas*/}
        <Stack.Screen name="EstatisticasWnba" component={EstatisticasWnba} />
        <Stack.Screen name="EstatisticasOte" component={EstatisticasOTE} />
        <Stack.Screen name="EstatisticasNbb" component={EstatisticasNBB} />
        <Stack.Screen name="Estatisticas" component={Estatisticas} />
        {/*Calendarios*/}
        <Stack.Screen name="CalendarioNBB" component={CalendarioNBB} />
        <Stack.Screen name="CalendarioWNBA" component={CalendarioWNBA} />
        <Stack.Screen name="CalendarioOTE" component={CalendarioOTE} /> 
        {/*Drills*/}
        <Stack.Screen name="Arremesso" component={Arremesso} /> 
        <Stack.Screen name="Layup" component={Layup} /> 
        <Stack.Screen name="Passes" component={Passes} /> 
        <Stack.Screen name="Dribles" component={Dribles} /> 
        <Stack.Screen name="Noticias" component={Noticias} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}