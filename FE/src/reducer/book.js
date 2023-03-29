export const SET_SELECTED_RATING = "sentence/SET_SELECTED_RATING";

export const setSelectedRating = (rating) => ({ type: SET_SELECTED_RATING, rating });

const initialState = {
	selectedRating: 0,
};

const book = (state = initialState, action) => {
	switch (action.type) {
		case SET_SELECTED_RATING:
			return {
				...state,
				selectedRating: action.rating,
			};

		// default를 쓰지 않으면 맨처음 state에 count값이 undefined가 나옵니다 꼭! default문을 넣으세요
		default:
			return state;
	}
};

export default book;
