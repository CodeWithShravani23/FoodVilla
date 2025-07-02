import { render } from "@testing-library/react";
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

test("Loading shimmer ui",()=>{


const body=render(<StaticRouter>
    <Provider store={store}>
        <Body />
    </Provider>
</StaticRouter>)
const shimmer =body.getByTestId("shimmer");
expect(shimmer.children.length) .toBe(8);

});