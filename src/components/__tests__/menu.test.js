import { render, waitFor,fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Body from "../Body.jsx";
import store from "../../store.js";
import{StaticRouter} from "react-router-dom/server";
import Header from "../Header.jsx"
import RestraurantMenu from "../RestraurantMenu.jsx"
import RESTO_DATA from "../../mocks/data.js"
import Cart from "../Cart.jsx"


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RESTO_DATA)
  })
);

test("seachboc test",async()=>{
const body=render(<StaticRouter>
    <Provider store={store}>
        <Header/>
        <RestraurantMenu/>
        <Cart/>
    </Provider>
</StaticRouter>)

await waitFor(()=>{
expect(body.getByTestId("addbtn")) 
})

const addbtn=body.getByTestId("addbtn");
fireEvent.click(addbtn);

const cart=body.getByTestId("cart");
expect(cart.querySelector("span").textContent).toBe("1");
});