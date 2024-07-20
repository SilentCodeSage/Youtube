import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./components/utils/store";
import MainComponent from "./components/MainComponent";
import Watch from "./components/Watch";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import SearchResults from "./components/SearchResults";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainComponent />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
    ],
  },
  {
    path: "/search",
    element: <SearchResults />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* {since header has no Router Provider its wrapped inside a BrowserRouter} */}
        <BrowserRouter>
          <Header />
        </BrowserRouter>

        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
