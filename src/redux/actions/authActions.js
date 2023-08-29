export const login = (email, password) => {
    // Thực hiện xử lý đăng nhập, gọi API, kiểm tra thông tin, v.v.
    // Trả về một action có type và payload tương ứng
    return (dispatch) => {
        fetch('http://localhost:3001/accounts')
            .then((response) => response.json())
            .then((accounts) => {
                // Check if email is exist
                let isExist = accounts.find(account => account.email === email)
                if (!isExist) {
                    dispatch({
                        type: 'LOGIN',
                        payload: {
                            message: "Email is not exist"
                        },
                    });
                } else {
                    let checkAccount = accounts.find(account => account.email === email && account.password === password)
                    if (checkAccount) {
                        dispatch({
                            type: 'LOGIN',
                            payload: {
                                loggedIn: true,
                                id: checkAccount.id,
                                email,
                                password,
                                role: checkAccount.role,
                                message: "Login success!"
                            },
                        });
                    } else {
                        dispatch({
                            type: 'LOGIN',
                            payload: {
                                message: "Password is not correct!"
                            },
                        });
                    }
                }
            })
            .catch((error) => {

            });
    }
};

export const register = (firstname, lastname, email, password, role) => {
    // Thực hiện xử lý đăng ký, gọi API, kiểm tra thông tin, v.v.
    // Trả về một action có type và payload tương ứng
    return (dispatch) => {
        fetch('http://localhost:3001/accounts')
            .then((response) => response.json())
            .then((accounts) => {
                // Check if email is existed
                let findAccount = accounts.findIndex(account => account.email === email)
                if (findAccount >= 0) {
                    dispatch({
                        type: 'REGISTER',
                        payload: {
                            message: "Email is existed"
                        },
                    });
                } else {
                    // Add account to data
                    fetch('http://localhost:3001/accounts', {
                        method: 'POST',
                        body: JSON.stringify({
                            "firstName": firstname,
                            "lastName": lastname,
                            "email": email,
                            "password": password,
                            "role": "user"
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            dispatch({
                                type: 'REGISTER',
                                payload: {
                                    firstname,
                                    lastname,
                                    email,
                                    password,
                                    role,
                                    message: "Sign up success! Please login!"
                                },
                            });
                        })
                        .catch((err) => {
                        });
                }
            })
            .catch((error) => {
            });
    }
};

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOGOUT',
            payload: {
                loggedIn: false,
            }
        })
    }
}

export const loginWithEmail = (email) => {
    // Thực hiện xử lý đăng nhập, gọi API, kiểm tra thông tin, v.v.
    // Trả về một action có type và payload tương ứng
    return (dispatch) => {
        fetch('http://localhost:3001/accounts')
            .then((response) => response.json())
            .then((accounts) => {
                // Check if email is exist
                let checkAccount = accounts.find(account => account.email === email)
                if (!checkAccount) {
                    dispatch({
                        type: 'LOGIN',
                        payload: {
                            message: "Email is not exist"
                        },
                    });
                } else {
                    let checkAccount = accounts.find(account => account.email === email)
                    dispatch({
                        type: 'LOGIN',
                        payload: {
                            loggedIn: true,
                            id: checkAccount.id,
                            email,
                            password: checkAccount.password,
                            role: checkAccount.role,
                            message: "Login success!"
                        },
                    });
                }
            })
            .catch((error) => {

            });
    }
};