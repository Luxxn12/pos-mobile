import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import ColorPalette from '../../theme/ColorPalette';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ProductsScreen() {
  const [selectedMenuId, setSelectedMenuId] = useState(1); // Default 'All Menu' selected

  const menu = [
    {id: 1, name: 'All Menu', image: 'https://via.placeholder.com/100'},
    {id: 2, name: 'Menu 1', image: 'https://via.placeholder.com/100'},
    {id: 3, name: 'Menu 2', image: 'https://via.placeholder.com/100'},
    {id: 4, name: 'Menu 3', image: 'https://via.placeholder.com/100'},
    {id: 5, name: 'Menu 4', image: 'https://via.placeholder.com/100'},
    {id: 6, name: 'Menu 5', image: 'https://via.placeholder.com/100'},
    {id: 7, name: 'Menu 6', image: 'https://via.placeholder.com/100'},
    {id: 8, name: 'Menu 7', image: 'https://via.placeholder.com/100'},
  ];

  const ListMenu = Array.from({length: 30}, (_, i) => ({
    id: i + 1,
    name: `Bakso ayam ${i + 1}`,
    image: 'https://via.placeholder.com/100',
  }));

  const handleMenuSelect = (id: number) => {
    setSelectedMenuId(id);
  };

  const renderGridItem = ({
    item,
  }: {
    item: {id: number; name: string; image: string};
  }) => (
    <TouchableOpacity style={styles.gridItem}>
      <Image source={{uri: item.image}} style={styles.gridImage} />
      <Text style={[styles.gridText]}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.day}>
          <Icon name="calendar-today" size={20} color={ColorPalette.primary} />
          <Text>Wed, 04 May 2025</Text>
        </View>
        <View style={styles.timeUi}>
          <Icon name="access-time" size={20} color={ColorPalette.primary} />
          <Text>14.30 PM</Text>
        </View>
        <View style={styles.searchUi}>
          <Icon name="search" size={20} color={ColorPalette.primary} />
          <TextInput placeholder="Search..." style={styles.searchInput} />
        </View>
      </View>

      {/* Menu Horizontal */}
      <View style={styles.menuContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}>
          {menu.map((menus, index) => (
            <TouchableOpacity
              key={menus.id}
              style={[
                styles.productCard,
                selectedMenuId === menus.id && styles.selectedProductCard,
                index === menu.length - 1 && styles.lastMenuCard,
              ]}
              onPress={() => handleMenuSelect(menus.id)}>
              <Image source={{uri: menus.image}} style={styles.productImage} />
              <Text
                style={[
                  styles.productName,
                  selectedMenuId === menus.id && styles.selectedProductName,
                ]}>
                {menus.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Grid List */}
      <View style={{flex: 1, flexDirection: 'row', gap: 10}}>
      <ScrollView style={{
        paddingBottom: "20%",
        flex: 1
      }}>
        <View style={styles.gridContainer}>
          {ListMenu.map(item => (
            <TouchableOpacity key={item.id} style={[styles.gridItem]}>
              <Image source={{uri: item.image}} style={styles.gridImage} />
              <Text style={[styles.gridText]}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.invoice}>
        <Text style={styles.invoiceText}>Invoice</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f9f9f9'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  day: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ColorPalette.background,
    padding: 10,
    borderRadius: 20,
  },
  timeUi: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ColorPalette.background,
    padding: 10,
    borderRadius: 20,
  },
  searchUi: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ColorPalette.background,
    paddingHorizontal: 15,
    borderRadius: 20,
    flex: 1,
  },
  searchInput: {flex: 1, marginLeft: 10},
  menuContainer: {paddingBottom: 20},
  scrollViewContent: {paddingLeft: 20},
  productCard: {
    width: 150,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedProductCard: {
    borderColor: ColorPalette.primary,
    backgroundColor: '#F7FCFE',
  },
  productImage: {width: 50, height: 50, borderRadius: 25},
  productName: {marginTop: 5, textAlign: 'center'},
  selectedProductName: {color: ColorPalette.primary},
  gridColumn: {justifyContent: 'flex-start'},
  gridItem: {
    width: '24%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedGridText: {color: ColorPalette.primary},
  gridContent: {
    paddingBottom: '20%',
  },
  lastMenuCard: {
    marginRight: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
    paddingLeft: 20,
  },
  selectedGridItem: {
    borderColor: '#3498db',
    backgroundColor: '#eaf4fc',
  },
  gridImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  gridText: {
    fontSize: 14,
    textAlign: 'center',
  },
  invoice : {
    width: "30%",
    backgroundColor: "#fff",
    borderTopStartRadius: 10,
  },
  invoiceText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 5,
  }
});

export default ProductsScreen;
