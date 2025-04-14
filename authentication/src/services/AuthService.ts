import { Ref, ref } from 'vue'

class AuthService{

    private jwt:Ref<string>
    private error:Ref<string>
    
    constructor(){
        this.jwt = ref('')
        this.error = ref('')
    }
    getJwt():Ref<string>{
        return this.jwt
    }
    getError():Ref<string>{
        return this.error
        
    }

    async login(email:string,password:string): Promise<boolean> {
        try {
            const res = await fetch('https://hfp69ilv.directus.app/auth/login',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            const response = await res.json()

            if('errors' in response){
                this.error.value = "Login failed"
                return false
            }
            this.jwt.value = response.data.access_token
            //$session.start()
            //$session.set('auth',response.data.access_token)
            return true

        }catch(error) {
            this.error.value = "Login failed"
            return false
        }
    }
}
export default AuthService
