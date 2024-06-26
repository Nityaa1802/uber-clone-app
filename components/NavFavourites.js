import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const NavFavourites = () => {
  const data = [
    {
      id: 1,
      icon: 'home',
      location: 'Home',
      destination: 'Agra,Uttar Pradesh,India',
    },
    {
      id: 2,
      icon: 'briefcase',
      location: 'Work',
      destination: 'Mathura,Uttar Pradesh,India',
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`w-full flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-500 p-3`}
            name={icon}
            type='ionicon'
            color='white'
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
