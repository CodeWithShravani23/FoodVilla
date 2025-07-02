
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header.jsx";
import store from "../../store.js";
import{StaticRouter} from "react-router-dom/server";
//Logo
test("logo should load when header is rendered",()=>{
const header=render(<StaticRouter>
    <Provider store={store}>
        <Header />
    </Provider>
</StaticRouter>)
const logo=header.getByTestId("logo");
expect(logo.src) .toBe("https://img.icons8.com/ios-filled/100/restaurant.png");
});




//cartEmpty
test("logo should load when header is rendered",()=>{
const header=render(<StaticRouter>
    <Provider store={store}>
        <Header />
    </Provider>
</StaticRouter>)
const cart=header.getByTestId("cart");
expect(cart.querySelector("span")) .toBeNull();
});