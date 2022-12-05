import React from 'react';
import {
  Select,
  Box,
  CheckIcon,
  Center,
  NativeBaseProvider,
  Input,
  TextArea,
} from 'native-base';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {
  Text,
  Card,
  Button,
  Icon,
  Header as HeaderRNE,
  HeaderProps,
} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
//import Region from './region.json';
import dataa from './fakedata.json';

const TextAreaa = () => {
  return (
    <Box w="100%">
      <TextArea h={20} placeholder="Text Area Placeholder" />
    </Box>
  );
};
export default () => {
  const [selectedProvinsi, setSelectedProvinsi] = React.useState();
  const [selectedKota, setSelectedKota] = React.useState();

  const availableKota = dataa?.datawilayah?.find(
    c => c.name === selectedProvinsi,
  );
  return (
    <SafeAreaProvider>
      {/* <HeaderRNE
        placement="left"
        leftComponent={{
          icon: 'menu',
          color: '#fff',
        }}
        centerComponent={{text: 'Header'}}
      /> */}
      <NativeBaseProvider>
        <View style={styles.container}>
          <Card>
            <Text>First Name</Text>
            <Input placeholder="" />
            <Text>Last Name</Text>
            <Input placeholder="" />
            <Text>Alamat</Text>
            <TextAreaa />
            <Text>Provinsi</Text>
            {/* <SelectProvinsi /> */}
            <Select
              selectedValue={selectedProvinsi}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={itemValue => setSelectedProvinsi(itemValue)}>
              {/* {users.map((u, i) => (
          <Select.Item key={i} value={u.name} label={u.name} />
        ))} */}
              {dataa.datawilayah.map((value, key) => {
                return (
                  <Select.Item
                    value={value.name}
                    key={key}
                    label={value.name}
                  />
                );
              })}
            </Select>
            <Text>Kota</Text>
            <Select
              selectedValue={selectedKota}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={itemValue => setSelectedKota(itemValue)}>
              {/* {users.map((u, i) => (
          <Select.Item key={i} value={u.name} label={u.name} />
        ))} */}
              {availableKota?.kota.map((value, key) => (
                <Select.Item value={value} key={key} label={value} />
              ))}
            </Select>
          </Card>
        </View>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
