import { render, waitFor,fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Body from "../Body.jsx";
import store from "../../store.js";
import{StaticRouter} from "react-router-dom/server";
import Header from "../Header.jsx"
import RestraurantMenu from "../RestraurantMenu.jsx"
import RESTO_DATA from "../../mocks/data.js"


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RESTO_DATA)
  })
);

test("seachboc test",async()=>{
const body=render(<StaticRouter>
    <Provider store={store}>
        <Body />
    </Provider>
</StaticRouter>)

await waitFor(()=>{
expect(body.getByTestId("search-btn")) 
})

const searchbox =body.getByTestId("searchbox");
fireEvent.change(searchbox,{target:{
  value:"sweet",
}});
const btn=body.getByTestId("search-btn");
fireEvent.click(btn);

const restro =body.getByTestId("restro");
expect(restro.children.length) .toBe(1);
});