import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Dimas andreananda</Text>

      {/* Kotak-kotak dengan tata letak Flexbox */}
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna biru
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 20, // Memberi jarak dengan kotak di bawah
  },
  boxContainer: {
    flexDirection: 'row', // Menyusun secara horizontal
    justifyContent: 'space-between', // Jarak merata di antara kotak
    width: '80%', // Membatasi lebar container
  },
  box1: {
    width: 100, // Lebar 100
    height: 100, // Tinggi 100
    backgroundColor: 'black', // Warna kotak 1 (bebas)
  },
  box2: {
    width: 100, // Lebar 100
    height: 100, // Tinggi 100
    backgroundColor: 'orange', // Warna kotak 2 (bebas)
  },
});
