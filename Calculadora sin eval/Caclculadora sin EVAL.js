const errorCode = "W"
    const operation = "2+√5^3"
    const square = "√"
    const Operators = ["^","√","/","*","-","+"]

    const simplifyOperations = (operations) => {
        
        let aux = operations
        let i = 0;
        let index = 0
        let prevent = 0
        let operator = ''

        do{
            
            for(i=0;i<Operators.length;i++){

                operator = Operators[i]
                let isSquare = operator == square
                index = aux.indexOf(operator)

                if(index>=0){

                    const start = isSquare ? index : index-1
                    const end = index+1
                    
                    const firstNumber = isSquare ? false : aux[start]
                    const lastNumber = aux[end]

                    const Operation = [firstNumber, operator, lastNumber]
                    
                    const resolve = calculate(Operation)
                    const operationLength = firstNumber ? 3 : 2

                    aux.splice(start, operationLength, resolve)

                    console.warn(aux)

                }

            }

            prevent++

        }while(aux.length > 1 || prevent < 20)
        
        return aux[0]
    }

    const segmentOperation = (operation) => {//this function divides the string separating the numbers and operations

        let i = 0
        let segment = ''
        let segmented = []
        for( i=0; i<operation.length; i++ ){
            
            if( !isNaN( operation[i] )){//if is a number
            
                segment = segment + operation[i]//add tollect a number of many digits
                
                if( i === operation.length-1 ){//and add the last element
                    segmented.push(segment)
                }

            }else{
            
                if( segment !== '' ){
                    segmented.push(segment,operation[i])
                }else{
                    segmented.push(operation[i])
                }
                
                segment = ''
            
            }
            
        }
        
        return segmented
    
    }

    const segmented = segmentOperation(operation)

    const calculate = (segmentedOperation) => {//this function only support 3 elements on array for example: [ '5', '-' , '2' ]

        const [a, operator, b] = segmentedOperation

        if(!Operators.includes(operator)){
            console.error("The operator '",operator,"' is not suported");
            return errorCode
        }

        switch(operator){
            case '+':
                return Number(a) + Number(b);
            case '-':
                return Number(a) - Number(b);
            case '*':
                return a * b;
            case '/':
                return b !== 0 ? a/b : false
            case '^':
                return Math.pow(a,b)
            case '√':
                return Math.sqrt(b) 
            default:
                return;
        }

    }