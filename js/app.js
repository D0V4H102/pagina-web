var app = new Vue({
    el:'#app',
    data: {
        Producto:"Figura animada" ,
        marca:"Banpresto",
        figura:"Original",
        dimenciones:"15cm",
        genero :"Unisex",
        materiral:"PVG/Plastico",
        carrito: [],
        suma:0,
        Total:0,
        varianteSelecionada :1,
        variantes:[{
         id:1,
         varianteImg:"./image/dragonballgtultimatesoldierssongokua.png",
          modelo:"Ultimate Soldiers Son Goku Ver B Super Saiyan",
          serieAnimada:"Dragon Ball GT",
          precio:25000,
          stock:15,
        },{
            id:2,
            varianteImg:"./image/onepiecemaximatic_luffy.png",
            modelo:"Maximatic",
            serieAnimada:"One Piece",
            precio:24000,
            stock:7,
        },{
            id:3,
            varianteImg:"./image/figuranaruto4colas.png",
            modelo:"Naruto Chakra Kyubi",
            serieAnimada:"Naruto Shippuden",
            precio:25000,
            stock:0,
        },{
        id:4,
        varianteImg:"./image/figura_de_sakuragi31cm.png",
        modelo:"Sakuragi",
        serieAnimada:"Slam Duck",
        precio:26000,
        stock:25,
    },
    ]
    },
    methods: {
       cambiarVariante(index){
           this.varianteSelecionada = index;
       },

       anadirCarro(){
           let estado = true
           let item =this.variantes[this.varianteSelecionada];
       if(this.carrito.length == 0){
           this.carrito.push([item.id,item.modelo,item.precio,1])
       }else{
         for (let i = 0; i < this.carrito.length; i++) {
             if(this.carrito[i][0] == item.id){
                 this.carrito[i][3]++ ;
                 estado = false;
             }
         }

         if(estado){
            this.carrito.push([item.id,item.modelo,item.precio,1])

         }
       }
       this.reload();

       },
       eliminarcarro(){
           this.suma = 0 ;
           this.carrito =[];
         
       },
       reload(){
           this.contarCarro();
           this.$forceUpdate();
           this.SumaTotal();
       },
       contarCarro(){
this.suma = 0
for (let i = 0; i < this.carrito.length; i++) {
    this.suma += this.carrito[i][3]
    
}
       },

       SumaTotal(){
      
        this.Total = 0
        for (let i = 0; i < this.carrito.length; i++) {
            this.Total += this.carrito[i][2]
            this.Total *=this.carrito[i][3]
       }
     
    }

    },//end merthods
    computed:{

        img(){
            return this.variantes[this.varianteSelecionada].varianteImg
        },
        precio(){
            return this.variantes[this.varianteSelecionada].precio
        },
        stock(){
            return this.variantes[this.varianteSelecionada].stock
        },
       serieAnimada(){
        return this.variantes[this.varianteSelecionada].serieAnimada
       },
       modelo(){
        return this.variantes[this.varianteSelecionada].modelo
       },


    },//end computed



})//end 

