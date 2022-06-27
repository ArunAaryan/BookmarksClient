import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import * as React from "react";
import { Bookmark, State } from "./types/main";
interface props {
  bookmark: Bookmark;
}
const BookmarkDetail: React.FC<props> = ({ bookmark }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {bookmark.title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Flex flexDirection="column">
          <h1>{bookmark.url}</h1>
          <Spacer />
          <h2>{bookmark.folder}</h2>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default BookmarkDetail;
