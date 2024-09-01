let i=-0;
let stack={
    khush :[],
    push:function(a){
     this.khush[i]=a;
     i++;
    },
    pop:function(){
      this.khush=this.khush.toSpliced(-1,1)
    },
    isempty:function(){
        this.khush=this.khush.toSpliced(0,this.khush.length);
        i=0;  
    },
    count:function(a)
        { let count=0;
           this.khush.forEach(function(value){
        if(value===a){
                count++;
            }
       
        }
    )
    return count;  
    },
    insert:function(a,b){
       
        for(let j=this.khush.length;j>=a;j--){
            this.khush[j]=this.khush[j-1];
            if(j===a){
                this.khush[j]=b;
            }
        }
    },
    shift:function(){
       this.khush=this.khush.toSpliced(0,1);
    }
    
};

