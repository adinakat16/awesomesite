module.exports=
(function(){
        let cart=[];

        function addItem(item){
            cart.push(item);
        }

        function get(){
            return cart;
        }

        function deleteitem(id){
            let item=cart.find((e)=>e.id==id);
            let index=cart.indexOf(item);
            cart.splice(index,1);
            
        }

        return{
            addToCart:addItem,
            getAll:get,
            removeFromCart:deleteitem
        }
    }
)();