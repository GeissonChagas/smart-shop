var products = [
    {
        "photo": "img/nike-air-force.png",
        "name": "Nike Air Force azul",
        "price": 219.00,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nike-air-force-laranja.png",
        "name": "Nike Air Force laranja",
        "price": 229.00,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nike-air-max-cinza.png",
        "name": "Nike Air Max Cinza",
        "price": 279.00,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nike-air-max-coral.png",
        "name": "Nike Air Max Coral",
        "price": 159.00,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nike-air-max-preto.png",
        "name": "Nike Air max Preto",
        "price": 349.00,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nike-air-max-preto-e-branco.png",
        "name": "Nike Air Max Preto e Branco",
        "price": 259.00,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nike-air-max-rosa.png",
        "name": "Nike Air Max Rosa",
        "price": 329.00,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nike-club-max.png",
        "name": "Nike Club Max",
        "price": 199.00,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nike-jordan.png",
        "name": "Nike Jordan",
        "price": 189.00,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/jordan-branco-vermelho.jpg",
        "name": "Nike Jordan branco c/ vermelho",
        "price": 119.00,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/revolution-feminino.jpg",
        "name": "Nike Revolution feminino preto",
        "price": 159.00,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/winflo-8-azul.jpg",
        "name": "Nike Winflo 8 azul",
        "price": 409.00,
        "active": false,
        "quantity": 1
    },
];

const smartShop = {
    data () {
        return {
            products: window.products
        }
    },
    methods:{
        total: function() {
            var total = 0;

            this.products.forEach( function(item){
                if(item.active){
                    total += item.price * item.quantity
                }
            });

            return total.toFixed(2);
        }
    }
    
}

Vue.createApp(smartShop).mount('#app');
