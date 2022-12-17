let courses = ['C++', 'Java','JavaScript'];
        function addCourses(n,m){
        n.push(m);
        }
        addCourses(courses,'Go');
        console.log(courses);
        function getFirstElement(a){
            return a[0];
            
        }
        let first = getFirstElement(courses);
        console.log(first);
        function joinArr(a,b){
            let c ="";
            for(let i=0; i<a.length; i++){

                c +=a[i];
                if(i != a.length -1 ){
                   c+=b;  
                }
                
            }
            return c;
        }
       
        
        let  result1 = joinArr(courses,",");
        console.log(result1);
       let  result2 = joinArr(courses,"*");
        console.log(result2);