import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-X-456',
    title: 'UberXL',
    multiplier: 1.3,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-X-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];
const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInfo = useSelector(selectTravelTimeInformation);
  const SURGE_CHARGE_RATE = 1.5;

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={tw`border-b border-gray-100`}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NavigateCard');
          }}
          style={tw`absolute top-3 rounded-full left-5 p-3 z-40`}
        >
          <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>

        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride - {travelTimeInfo?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, item: { image, title, id } }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              selected && selected.id == id && 'bg-gray-200'
            }`}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: 'contain' }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInfo?.duration?.text} </Text>
              <Text style={tw`text-xl `}>
                {new Intl.NumberFormat('en-gb', {
                  style: 'currency',
                  currency: 'INR',
                }).format(
                  travelTimeInfo.duration.value *
                    SURGE_CHARGE_RATE *
                    item.multiplier
                )}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={tw`my-auto border-t border-gray-200`}>
        <TouchableOpacity
          style={tw`py-3 m-3  ${!selected ? 'bg-gray-300' : 'bg-black'}`}
          disabled={!selected}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
