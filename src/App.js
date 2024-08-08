import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./components/utils/store";
import MainComponent from "./components/MainComponent";
import Watch from "./components/Watch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResults from "./components/SearchResults";

const Layout = ({ children }) => (
  <div className="w-screen">
    <Header />
    {children}
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Body /></Layout>,
    children: [
      {
        path: "/",
        element: <MainComponent />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
      {
        path: "search",
        element: <Layout><SearchResults /></Layout>,
      },
    ],
  },
  
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
