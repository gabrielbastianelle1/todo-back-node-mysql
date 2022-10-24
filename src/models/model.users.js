const bcrypt = require('bcrypt')

const user=({userId,username,senha}) => {
    return{
        userId,username,senha,
        senhaHash: async function(){
            const custoHash=12
            this.senha=await bcrypt.hash(this.senha,custoHash)
        },
        compareSenha: async function(senha){
            return new Promise(async(resolve,reject) => {
                if(await bcrypt.compare(senha,this.senha)) resolve({message:'senha correta'})
                return reject({message:'senha errada'})
            })
        },
        toInsertDatabase: function(){
            return [this.username,this.senha]
        }
    }
}

module.exports=user