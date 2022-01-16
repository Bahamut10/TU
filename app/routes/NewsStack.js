/** LIBRARIES */
import { createStackNavigator } from "@react-navigation/stack";

/** COMPONENTS / SCREENS */
import NewsDetail from "../screens/News/NewsDetail";
import NewsList from "../screens/News/NewsList";

/** UTILITIES */
import color from "../utils/color";

const Stack = createStackNavigator();

const NewsStack = () => {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen
        name="News List"
        component={NewsList}
        options={{ title: "Insight" }}
      />
      <Stack.Screen name="News Detail" component={NewsDetail} />
    </Stack.Navigator>
  );
}

const headerOptions = {
  headerStyle: {
    backgroundColor: color.primary,
  },
  headerTintColor: color.secondary,
};

export default NewsStack;
