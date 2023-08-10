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
                loggedIn: true,
                user: action.payload,
            };
        case 'REGISTER':
            // Xử lý đăng ký thành công, cập nhật trạng thái loggedIn và user
            return {
                ...state,
                loggedIn: true,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;