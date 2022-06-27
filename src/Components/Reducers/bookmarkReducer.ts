import { Reducer } from "react";
import { Bookmark, State, CrudAction } from "../types/main";
import { CrudType } from "../Constants";
export const bookmarkReducer = (state: State, action: CrudAction): State => {
  const { type, payload } = action;
  switch (type) {
    case CrudType.GET:
      return { ...state, isLoading: true, error: false };
    case CrudType.SUCCESS:
      return { ...state, data: payload, isLoading: false };
    case CrudType.ERROR:
      return { ...state, data: payload, error: true, isLoading: false };
    default:
      return { ...state };
  }
};
