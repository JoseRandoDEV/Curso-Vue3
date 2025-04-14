import IAuth from "./IAuth"

interface IMsalConfig {
    auth: IAuth,
    cache: {
        cacheLocation: string
    }
}

export default IMsalConfig





