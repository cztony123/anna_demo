import myaxios from '../utils/myaxios'

export default{
    getList(){
        const promise1 = myaxios({
            method:'get',
            url:'data.json'
        })
        return promise1
    },
    getLogin(){
        const promise2 = myaxios({
            method:'get',
            url:'login.json'
        })
        return promise2
    }
}

