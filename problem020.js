function Square(a){
    this.a = a;

    this.getArea = function(){
      return this.a*this.a;
    }

    this.getPerimeter = function(){
      return 4*this.a;
    }

}
