export interface LoginData {
    user?: {
        idAuth?: number,
        username?: string,
        email?: string,
        walletAddress?: string,
        info?: {
            name?: string,
            lastname?: string,
            phone?: string,
            country?: string,
        },
        authStatus?: string,
    },
    Authorization?: {
        token?: string,
        refreshToken?: string
    }
}
