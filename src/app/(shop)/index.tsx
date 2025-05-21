import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PRODUCTS } from "../../../assets/products";
import ProductListItem from "../../components/product-list-item";
import ListHeader from "../../components/list-header";

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => (
        <ProductListItem product={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListcolumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListcolumn: {
    justifyContent: "space-between",
  },
});
