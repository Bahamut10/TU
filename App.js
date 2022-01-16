import { StatusBar } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import NewsNavigator from "./app/routes/NewsStack";
import allReducers from "./app/redux/reducers";
import color from "./app/utils/color";

export default function App() {
  const store = createStore(allReducers);
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={color.primary} barStyle="light-content" />
      <NavigationContainer>
        <NewsNavigator />
      </NavigationContainer>
    </Provider>
  );
}
