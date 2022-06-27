import * as React from "react";

// 1. import `ChakraProvider` component
import { Box, ChakraProvider } from "@chakra-ui/react";
import BookmarkList from "./Components/BookmarkList";
import { BookmarkContext } from "./BookmarkContext";
import { Bookmark, State } from "./Components/types/main";
import { CrudType } from "./Components/Constants";
import { bookmarkReducer } from "./Components/Reducers/bookmarkReducer";
import axios from "axios";
function App() {
  const initialState: State = {
    data: null,
    error: false,
    isLoading: false,
  };

  const [state, dispatch] = React.useReducer(bookmarkReducer, initialState);
  const fetchBookmarks = async () => {
    dispatch({ type: CrudType.GET, payload: [] });
    try {
      const { data } = await axios.get("/bookmarks");
      console.log(data.data, "datas");
      dispatch({ type: CrudType.SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: CrudType.ERROR, payload: [] });
    }
  };
  React.useEffect(() => {
    fetchBookmarks();
  }, []);
  return (
    <ChakraProvider>
      <BookmarkContext.Provider value={state}>
        <Box alignContent="center" maxW="80%" mx="auto" my="10">
          <BookmarkList />
        </Box>
      </BookmarkContext.Provider>
    </ChakraProvider>
  );
}
// import logo from "./logo.svg";
// import "./App.css";

export default App;
function initialState(
  bookmarkReducer: (
    state: State,
    action: import("./Components/types/main").CrudAction
  ) => State,
  initialState: any
): [any, any] {
  throw new Error("Function not implemented.");
}
