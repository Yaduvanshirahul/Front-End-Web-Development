Javascript -> i. Synchronous
              ii. Single threaded -> code executed one by one 

Execution Context -> execute one line of   code   at a time.

{} --> Global EC -> THIS

i. Global execution context
ii. Function execution context
iii. Eval execution context

{} --> Memory creation phase called also creation phase -> only memory allocation in this phase
   --> Execution phase -> all function execute (add, sub etc.)

   e.g -> let val1 = 10
          let val2 = 23
          function addNum(num1, num2){
            let total = num1 + num2
            return total
          }

          let result1 = addNum(val1 , val2)
          let result2 = addNum(10,2)

1. Global execution phase
        |
        this

2. Memory phase
  
  val1 -> undefined
  val2 -> undefined
  addNum -> defination
  result1 -> undefined
  result2 -> undefined

3. Execution phase 

val1 <- 10
val2 <- 23

addNum --> New variable Environment + Execution thread( Again repeat the Memory phase + execution phase )

  i. Memory phase          ii.

  val1 -> undefined        num1 -> 10
  val2 -> undefined        num2 -> 23   
  total -> undefined       total -> 33 (this total return to the global execution )

  result1 = 33

  result2 -> again New variable environment + Execution thread

   i. Memory phase          ii.

  val1 -> undefined        num1 -> 10
  val2 -> undefined        num2 -> 23   
  total -> undefined       total -> 12 (this total return to the global execution )

  result2 = 12