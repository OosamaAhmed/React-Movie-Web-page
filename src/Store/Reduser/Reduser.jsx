const initialState = {
    favorites: [],
};


export const addfavorite = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                favorites: [...state.favorites,action.payload],
            };
        case "REMOVE":
            return {
                favorites: state.addToFavourite.filter(
                    (favorites) => favorites.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

