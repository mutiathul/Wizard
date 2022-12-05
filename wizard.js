import React, {useState} from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Wizard1 from './Header';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from 'native-base';
import Wizard2 from './wizard2';

const Example1 = () => {
  return (
    <Box width="100%" rounded="lg">
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            Biodata
          </Heading>
        </Stack>
        <Text fontWeight="400" style={{color: 'black'}}>
          Wizard2
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center" />
        </HStack>
      </Stack>
    </Box>
  );
};
const Example2 = () => {
  return (
    <Box width="98%" rounded="lg">
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            Upload Identitas
          </Heading>
        </Stack>
        <Text fontWeight="400" style={{color: 'white'}}>
          Wizard2
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center" />
        </HStack>
      </Stack>
    </Box>
  );
};
const Example3 = () => {
  return (
    <Box width="98%" rounded="lg">
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            Wizard3
          </Heading>
        </Stack>
        <Text fontWeight="400" style={{color: 'white'}}>
          Wizard3
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center" />
        </HStack>
      </Stack>
    </Box>
  );
};

function HomeScreen({navigation}) {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={{flex: 1}}>
          <NativeBaseProvider>
            <View flex={1} px="3">
              <ScrollView horizontal={true}>
                <HStack>
                  <TouchableOpacity
                    style={{backgroundColor: 'green'}}
                    onPress={() => navigation.navigate('Home')}>
                    <Example1 />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{backgroundColor: 'white'}}
                    onPress={() => navigation.navigate('Details')}>
                    <Example2 />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Example3 />
                  </TouchableOpacity>
                </HStack>
              </ScrollView>
              <Wizard1 />
            </View>
          </NativeBaseProvider>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SafeAreaProvider>
        <ScrollView>
          <View style={{flex: 1}}>
            <NativeBaseProvider>
              <View flex={1} px="3">
                <ScrollView horizontal={true}>
                  <HStack>
                    <TouchableOpacity
                      style={{backgroundColor: 'white'}}
                      onPress={() => navigation.navigate('Home')}>
                      <Example1 />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{backgroundColor: 'green'}}
                      onPress={() => navigation.navigate('Details')}>
                      <Example2 />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Example3 />
                    </TouchableOpacity>
                  </HStack>
                </ScrollView>

                <Wizard2 />
              </View>
            </NativeBaseProvider>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    </View>
  );
}

const Stackk = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stackk.Navigator>
        <Stackk.Screen name="Home" component={HomeScreen} />
        <Stackk.Screen name="Details" component={DetailsScreen} />
      </Stackk.Navigator>
    </NavigationContainer>
  );
}

export default App;
