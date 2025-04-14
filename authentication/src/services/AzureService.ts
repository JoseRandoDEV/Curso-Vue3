import { Ref, ref } from 'vue'
import IMsalConfig from '@/interfaces/IMsalConfig'

class AzureService {

    private msalConfig:Ref<IMsalConfig>
    private accessToken:Ref<string>

    constructor(){
        this.msalConfig = ref ({
            auth:{
                clientId: 'cde4db13-b0ad-4a2f-9b3f-8aa614921bd2',
                authority: 'https://login.microsoftonline.com/f13ae77f-f170-4c87-a85d-69276038fadf'
            },
            cache:{
                cacheLocation: 'localStorage'
            }
        })
        this.accessToken = ref('')
    }

    setAccessToken(token:string):Ref<string> {
        this.accessToken.value = token
        return this.accessToken
    }

    getAccessToken():Ref<string> {
        return this.accessToken
    }

    getMsalConfig():Ref<IMsalConfig> {
        return this.msalConfig
    }
}

export default AzureService