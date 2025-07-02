import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import Body from "../Body.jsx";
import store from "../../store.js";
import{StaticRouter} from "react-router-dom/server";
import RESTO_DATA from "../../mocks/data.js"


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RESTO_DATA)
  })
);
//testing shimmer ui
test("Loading shimmer ui",()=>{
const body=render(<StaticRouter>
    <Provider store={store}>
        <Body />
    </Provider>
</StaticRouter>)
const shimmer =body.getByTestId("shimmer");
expect(shimmer.children.length) .toBe(8);

});

//testing retrocards

test("restrurants should load",async()=>{
const body=render(<StaticRouter>
    <Provider store={store}>
        <Body />
    </Provider>
</StaticRouter>)

await waitFor(()=>{
expect(body.getByTestId("search-btn")) 
})
const restro =body.getByTestId("restro");
expect(restro.children.length) .toBe(14);
});

