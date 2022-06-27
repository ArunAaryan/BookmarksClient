export interface Bookmark {
  k_uuid: String;
  title: String;
  url: String;
  folder: String;
  order: Number;
  f_order: Number;
  mod_date: Number;
}


interface State {
  data: null | Bookmark[];
  error: boolean;
  isLoading: boolean;
}
interface CrudAction {
  type: CrudType;
  payload: Bookmark[];
}

export { CrudAction, CrudType, State };
