const initialState = {
    loggedIn: false,
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            // Xử lý đăng nhập thành công, cập nhật trạng thái loggedIn và user
            return {
                ...state,
                loggedIn: action.payload.loggedIn,
                user: action.payload,
            };
        case 'REGISTER':
            // Xử lý đăng ký thành công, cập nhật trạng thái loggedIn và user
            return {
                ...state,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                loggedIn: action.payload.loggedIn,
            }
        default:
            return state;
    }
};

export default authReducer;