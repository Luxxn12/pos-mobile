import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ColorPalette from '../../theme/ColorPalette';
import Icon from 'react-native-vector-icons/MaterialIcons';

function HomeScreen() {
  return (
    <View style={styles.container}>
    {/* Ringkasan Penjualan */}
    <View style={styles.summaryCard}>
      <Text style={styles.cardTitle}>Total Penjualan</Text>
      <Text style={styles.cardValue}>Rp 25.000.000,-</Text>
    </View>

    {/* Produk Terlaris */}
    <View style={styles.summaryCard}>
      <Text style={styles.cardTitle}>Produk Terlaris</Text>
      <Text style={styles.cardValue}>Produk A (150 Terjual)</Text>
    </View>

    {/* Stok Terakhir */}
    <View style={styles.summaryCard}>
      <Text style={styles.cardTitle}>Stok Terakhir</Text>
      <Text style={styles.cardValue}>Produk B (3 Stok Tersisa)</Text>
    </View>

    {/* Pemberitahuan */}
    <View style={styles.notificationCard}>
      <Icon name="notifications" size={30} color={ColorPalette.primary} />
      <Text style={styles.notificationText}>Anda memiliki 2 pengingat baru!</Text>
    </View>

    {/* Tombol Aksi */}
    <TouchableOpacity style={styles.actionButton}>
      <Text style={styles.actionButtonText}>Lihat Detail</Text>
    </TouchableOpacity>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  padding: 20,
},
summaryCard: {
  backgroundColor: ColorPalette.secondary,
  borderRadius: 10,
  padding: 15,
  marginBottom: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},
cardTitle: {
  fontSize: 16,
  color: '#fff',
  fontFamily: 'Lato-Bold',
},
cardValue: {
  fontSize: 18,
  color: '#fff',
  fontFamily: 'Lato-Regular',
},
chartContainer: {
  marginBottom: 20,
  alignItems: 'center',
},
chartTitle: {
  fontSize: 16,
  color: ColorPalette.primary,
  fontFamily: 'Lato-Bold',
  marginBottom: 10,
},
notificationCard: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: ColorPalette.primary,
  padding: 15,
  borderRadius: 10,
  marginBottom: 20,
},
notificationText: {
  fontSize: 16,
  color: '#fff',
  fontFamily: 'Lato-Regular',
  marginLeft: 10,
},
actionButton: {
  backgroundColor: ColorPalette.primary,
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 20,
  alignItems: 'center',
},
actionButtonText: {
  fontSize: 16,
  color: '#fff',
  fontFamily: 'Lato-Regular',
},
});

export default HomeScreen
