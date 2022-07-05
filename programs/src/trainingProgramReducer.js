export const initialState = {
  cardInfo: [],
  loadMore : true,
  pageNumber: 1
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'loadMore' :
      return {
        ...state,
        loadMore: action.data.length === 12,
        cardInfo: [...state.cardInfo, ...action.data],
      }
    case 'updatePage' :
      return {
        ...state,
        pageNumber: state.pageNumber + 1
      }
    default :
      return state;
  }
}