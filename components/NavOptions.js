import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
  {
    id: 1,
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: 2,
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatScreen',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 px-6 pb-8 bg-gray-200 m-2 w-40`}
          onPress={() => {
            navigation.navigate(item.screen);
          }}
          disabled={!origin}
        >
          <View
            style={tw`justify-between items-center  ${
              !origin && 'opacity-20'
            } `}
          >
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text style={tw`text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name='arrowright'
              color='white'
              type='antdesign'
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
