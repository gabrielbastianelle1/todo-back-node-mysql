const promp = require('prompt-sync')()
const fetch = require('node-fetch')
const user = require('../src/models/model.users')

function optionsEndpoint(method,body,headers){
    let possibleMethods=['POST','GET']
    return new Promise((response,reject) => {
        possibleMethods.find((value,index,array) => {
            if (value==method) {
                return response({
                    method:method,
                    body: JSON.stringify(body),
                    headers: headers
                })
            }
            return reject({error:'method must be POST or GET',dataInsered:`${method}`})
        })
    })  
}

async function criarConta(){
    let username=promp('digite seu username: ')
    let senha=promp('digite sua senha: ')
    try {
        let response=await fetch('http://localhost:3000/insertusers',await optionsEndpoint('POST',await user({username,senha}),{'Content-Type':'application/json'}))
        return await response.json()
    } catch (error) {
        return error
    }
}

async function login(){
    let username=promp('digite seu username: ')
    let senha=promp('digite sua senha: ')
    try {
        let response=await fetch('http://localhost:3000/loginusers',await optionsEndpoint('POST',await user({username,senha}),{'Content-Type':'application/json'}))
        return await response.json()
    } catch (error) {
        return error
    }
}


async function main(){
    let option=0
    while(1){
        console.log('1 - criar conta')
        console.log('2 - logar')
        console.log('3 - sair')
        option=promp()
        switch (option) {
            case '1':
                let novoUser=await criarConta()
                console.log(novoUser)
                break
            case '2':
                let logado=await login()
                console.log(logado)
                break
            case '3':
                return
        }
    }
}

main()
