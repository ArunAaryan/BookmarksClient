import { Accordion } from "@chakra-ui/react";
import { BookmarkContext } from "../BookmarkContext";
import BookmarkDetail from "./BookmarkDetail";
import { Bookmark, State } from "./types/main";
import * as React from "react";
const BookmarkList = () => {
  const state: State | any = React.useContext(BookmarkContext);
  console.log("bookmark list", state.data);
  if (state.error) {
    return <p>Error</p>;
  } else if (state.loading) {
    return <p>Loading.....</p>;
  } else {
    return (
      // <>{state.data[0].title}</>
      <Accordion allowToggle>
        {state.data &&
          state.data.map((bookmark: Bookmark) => (
            <BookmarkDetail bookmark={bookmark} />
          ))}
      </Accordion>
    );
  }
};

export default BookmarkList;
