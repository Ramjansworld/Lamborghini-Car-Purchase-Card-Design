const app = Vue.createApp({
    data() {
        return{
            product:'Lamborghini',
            image:'./images/Lamborghini_blue.jpg',
            cart:0,
            inventory: 0,
            details: ['Huracan Tacnica','Huracan STO','Huracan EVO'],
            variants: [
                {id:'LP 640 LB', color: 'Blue', image: './images/Lamborghini_blue.jpg'},
                {id:'LP 640 LB', color: 'Green', image: './images/Lamborghini_green.jpg'},
                {id:'LP 640 LB', color: 'Red', image: './images/Lamborghini_red.jpg'}
            ]
        }
    },
        methods: {
            addToCard(){
            this.cart +=1
            },
            updateImage(variantImage) {
                this.image = variantImage
            }
    }
})