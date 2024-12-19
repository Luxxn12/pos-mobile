import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../Home/HomeScreen';
import ProductsScreen from '../Products/ProductsScreen';
import SalesScreen from '../Sales/SalesScreen';
import ReportsScreen from '../Reports/ReportsScreen';
import InventoryScreen from '../Inventory/InventoryScreen';
import SettingsScreen from '../Settings/SettingsScreen';
import ColorPalette from '../../theme/ColorPalette';
import Icon from 'react-native-vector-icons/MaterialIcons';

function DashboardScreen() {
  const [activeTab, setActiveTab] = useState<string>('Home');
  const renderContent = () => {
    if (activeTab === 'Home') return <HomeScreen />;
    if (activeTab === 'Products') return <ProductsScreen />;
    if (activeTab === 'Sales') return <SalesScreen />;
    if (activeTab === 'Reports') return <ReportsScreen />;
    if (activeTab === 'Inventory') return <InventoryScreen />;
    if (activeTab === 'Settings') return <SettingsScreen />;
    return null;
  };
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.name}
            style={[
              styles.tabItem,
              activeTab === tab.name && styles.activeTabItem,
            ]}
            onPress={() => setActiveTab(tab.name)}>
            <Icon
              name={tab.icon}
              size={activeTab === tab.name ? 25 : 20}
              style={[
                styles.tabIcon,
                activeTab === tab.name && styles.activeTabIcon,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
}

const tabs = [
  {name: 'Home', icon: 'home'},
  {name: 'Products', icon: 'inventory'},
  {name: 'Sales', icon: 'shopping-cart'},
  {name: 'Reports', icon: 'analytics'},
  {name: 'Inventory', icon: 'storage'},
  {name: 'Settings', icon: 'settings'},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  tabContainer: {
    width: 100,
    backgroundColor: ColorPalette.primary,
  },
  tabItem: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  activeTabItem: {
    backgroundColor: ColorPalette.primary,
  },
  tabIcon: {
    color: ColorPalette.textSecondary,
    marginBottom: 5,
  },
  activeTabIcon: {
    color: ColorPalette.textPrimary,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',

  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Lato-Bold',
  },
});

export default DashboardScreen;
