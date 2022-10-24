let basicConfig={
    hostname:'127.0.0.1',
    port:3000
}

let endpoints={
    getAllUsers: function(){
        return Object.assign(basicConfig,{path:'/getusers',method:'GET'})
    }
}

module.exports=endpoints