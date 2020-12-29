const app = new Vue({
  el: '#app',
  data: {
    books:[
      {
        id:1,
        name:'《算法导论》',
        date:'2006-9',
        price:85.00,
        count:1
      },
      {
        id:2,
        name:'《UNIX编程艺术》',
        date:'2006-2',
        price:59.00,
        count:1
      },
      {
        id:3,
        name:'《编程珠玑》',
        date:'2008-10',
        price:39.00,
        count:1
      },
      {
        id:4,
        name:'《代码大全》',
        date:'2006-3',
        price:128.00,
        count:1
      },
    ]
  },
  computed: {
    totalPrice(){
      let sum=0

      //方法1
      // for (let i=0;i<this.books.length;++i){
      //   sum+=this.books[i].price*this.books[i].count
      // }
      //最优方法2
      for(let book of this.books){
        sum+=book.price*book.count
      }
      return sum
    }
  },
  methods: {
    //方法1，用方法显示 toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
    // getPrice(price){
    //   return '￥'+price.toFixed(2)
    // }
    increment(index){
      this.books[index].count++
    },
    decrement(index){
        this.books[index].count--
    },
    removeBook(index){
      this.books.splice(index,1)
    }

  },
  filters:{
    //方法2，用过滤器
    showPrice(price){
      return '￥'+price.toFixed(2)
    }
  }
})


/*
《算法导论》2006-9￥85.00
《UNIX编程艺术》2006-2￥59.00
《编程珠玑》2008-10￥39.00
《代码大全》2006-3￥128.00
 */