    let n;
        function isPrime(n){
            if( n < 2) return false;
            else{
                for(let i =2; i<n; i++){
                    if( n % i == 0) return false;
                    
                }

            }
            return true;

        }
        console.log(isPrime(11));
        console.log(isPrime(8));