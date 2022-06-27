import * as React from "react";
import { Bookmark, State } from "./Components/types/main";
const BookmarkContext = React.createContext<State>({
  data: null,
  error: false,
  isLoading: false,
});
export { BookmarkContext };
