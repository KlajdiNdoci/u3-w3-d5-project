const initialState = {
  searchResults: [],
};

const SidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

export default SidebarReducer;
