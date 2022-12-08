# jBasher programming language
*a (VERY) basic programming language using the weirdest interpreter you've ever seen with virtually no error handling*

! run `install.sh` to install all the dependencies needed for jbasher. if you cant, just install `prompt-sync`, `request`, and `fs`.

## Table Of Contents
- How to use
- Comments
- Output
- Variables
  - Strings
    - Declaring
    - Using
    - Adding strings to variable
  - Numbers
    - Declaring
    - Using
    - Adding
    - Subtracting
    - Multiplying
    - Dividing
      - divar
      - dinum
    - Exponentiating (exponents/power of)
      - expvar
      - expnum
    - Square rooting
    - Random numbers
    - Flooring
    - Converting strings to integers
  - Lists
    - Declaring
    - Adding strings to list
    - Getting strings from list
- Jumping to certain line
- If statements
- Loops
  - Loop for n times
- Reading and writing files
  - Reading
  - Writing
- Date
- Getting input
- Running javascript code in jBasher
- Code Examples
  - 3x+1 simulation
  - Magic 8-ball
  
## How to use
  go into your command line and type `node jbasher.js [your file]`<br>
  your file can be any file type (i guess) but i would prefer you use .txt because yeah

## Comments
put `##` before text to make it into a comment

## Output
`say [string (in quotes)]`<br>you can also include variables by putting the variable name surrounded by hashtags in a string.

<details>
<summary>Example: </summary>

  ### index.jb:
  ```
  set string test as hello
  say "#test#, world!"
  ```
  ### Output:
  ```
  hello, world!
  ```
</details>

you can also include number type variables into the string. <br>

to clear the console, use `clear  console`

## Variables
variables are declared using the `set` command. for now, there are only 3 types (string, number and list) but i hope to add more later.

### Strings
Strings are lines of text. 
#### Declaring
`set string [name] as [text]`<br>
#### Using
`#[variable]#` (if using in say command, put it in the quotes)<br>
#### Adding strings to variable
`add [text] to string [variable]`


### Numbers
Numbers are exactly what they say. numbers. 
#### Declaring
  `set number [name] as [number]`
#### Using
`#[variable]#` (if using in say command, put it in the quotes)<br>
#### Adding
`add [number] to [variable]`<br>
sadly i can't figure out how to add variables to variables, but this will have to work for now.
#### Subtracting
`subtract [number] from [variable]`<br>
#### Multiplying
`multiply [variable] by [number]`<br>
#### Dividing
There's 2 commands for dividing. `divar` and `dinum`.
##### divar
`divar` is for dividing a variable by a number.<br>
`divar [variable] by [number]`
##### dinum
`dinum` is for dividing a number by a variable. the output is set to the variable given.<br>
`dinum [number] by [variable]`<br>

<details>
  <summary>Example: </summary>

  ### index.jb: 
  ```
  set number num as 5
  dinum 2 by num
  say "#num#"
  ```
  ### Output:
  ```
  0.4
  ```
</details>

#### Exponentiating (exponents/power of)
like `divar` and `dinum`, theres also 2 commands for exponentiating. `expvar` and `expnum`. 

##### expvar
`expvar` is for putting a variable to the power of a number. <br>
`expvar [variable] to the power of [number]`

##### expnum
`expnum` is for putting a number to the power of a variable. this sets the output as the variable given.
<br>
`expnum [number] to the power of [variable]`<br>

<details>
  <summary>Example: </summary>

  ### index.jb: 
  ```
  set number num as 5
  expnum 2 to the power of num
  say "#num#"
  ```
  ### Output:
  ```
  32
  ```
</details>

#### Square rooting
`square root [variable]`<br>
sets the output to the variable given.

#### Random numbers
a random number is an At (@) symbol next to the maximum number. for example, `@25` returns a random number between 1 and 25. 

#### Flooring
you can floor numbers by using `floor variable`. <br>
Syntax: `floor variable [variable]`

#### Converting strings to integers
Syntax: `convert variable [variable] to integer`


<br>keep in mind that `set string`, `set number`, and `set list` are three different commands and operate slightly differently. `set string` does not need quotes in string.

### Lists
lists are a list of strings into one variable. basically the javascript array but more confusing.

#### Declaring
`set list [name]`

#### Adding things to list
`add [text] to list [list]`

#### Getting string from list
`%[list]|[place]%`

## Jumping to a certain line
  the `goto` command is used to hop to a certain line of code.
  syntax: `goto [line number]`
<details>
  <summary>Example</summary>

  ### index.jb:
   ```
  goto 4
  say "this line is never shown"
  say "neither is this"
  say "this is shown"
  ```
  ### Output:
  ```
  this is shown
  ```
</details>
 
  

## If statements
  the if statement is pretty simple, with a `goto` command built into it. keep in mind though, the boolean statement must have no spaces in it. variables will need hashtags around it.  <br>
  syntax: `if [statement] then goto [line number]`
  
<details>
  <summary>Example: </summary>

  ### index.jb:
  ```
  set number a as 5
  if 6==#a# then goto 5
  say "1 is incorrect"
  goto 6
  say "#1 is correct!"
  if 6!=#a# then goto 9
  say "2 is incorrect"
  goto 11
  say "2 is correct!"
  goto 11
  ## end
  ```
  ### Output:
  ```
  1 is incorrect
  2 is correct!
  ```
</details>
## Loops
loops are very, very simple. but theres a problem. you can't goto the first line of the program or it will show you an error. its sad, i know. but there's a bodge for that! just add a comment at the first line and make the goto command that loops to the beginning say `goto 2` instead of  `goto 1`!! <br>

**this will work:**
```
## bodge (this will work)
say "this text will loop"
goto 2
```
**this will not work:**
```
say "this will show an error"
goto 1
```
### Loop for n times
this uses a combination of the if statement and goto.
barebone example:
<details>
  <summary>Barebone example:</summary>

  #### index.jb:
  ```
  set number i as 0
  if #i#>n then goto 8
  add 1 to i 
  ## keep the add number there. that is to add i
  ## replace n with how many times you want it to run
  ## put what you want to loop here
  goto 2
  ## what to do when finished
  ```
</details>
<details>
 <summary>Actual example: </summary>
  
  #### index.jb:
  ```
  set number i as 0
  if #i#>=5 then goto 6
  add 1 to i
  say "#i#"
  goto 2
  say "ok done"
  ```
  #### Output:
  ```
  1
  2
  3
  4
  5
  ok done
  ```
</details>


## Reading and writing files

### Reading

you can read files with the `set file to variable` command, which sets the data of a file given to a variable given. <br>
usage: `set file [file] to variable [variable]`
<details>
 <summary>Example: </summary>
  
  #### index.jb:
  ```
  set string data as
  set file "index.txt" to variable data
  say "#data#"
  ```
  #### index.txt:
  ```
  lorem ipsum dolor sit amet
  ```
  #### output:
  ```
  lorem ipsum dolor sit amet
  ```
</details>

### Writing

you can write to files with the `write to file with flag` command <br>
usage: `write [text] to file [file] with flag [flag]`
<details>
 <summary>Example: </summary>
  
  #### index.jb:
  ```
  write "example for writing data" to file "index.txt" with flag w+
  ```
  #### index.txt:
  ```
  example for writing data
  ```
</details>

## Running javascript code in jBasher

use command `run javascript code: ` or `rjc` to run JavaScript in jBasher.<br>
`rjc [code]`<br>
`run javascript code: [code]`

<details>
<summary>Example:</summary>

  #### index.jb:
  ```
  run javascript code: console.log("long form of rjc, for more readability")
  rjc console.log("shorter version, easier to type")
  ```
  #### Output:
  ```
  long form of rjc, for more readability
  shorter version, easier to type
  ```
</details>

## Date

### Getting date

You can get the current date in milliseconds by using the `set current date to variable` command. 

Syntax: `set current date to variable [variable]`

### Gettings seconds, minutes, months, years, etc.

I'm too lazy to set something where you can get a specific unit of time so please use math instead. You can divide the time variable by a specific number to get that unit of time. here's a table for it:


|Units (since 1970)|Divide by|
|-|-|
|Seconds|1000|
|Minutes|60000|
|Hours|3600000|
|Days|86400000|
|Months|2628000000|
|Years|31556952000|


## Getting input

you can use command `ask for and set as variable` command to ask for input and set it as a variable.

Syntax: `ask for [string] and set as variable [variable]`

<details>
<summary>Example:</summary>

  ### index.jb:
  ```
  set current date to variable time
  divar time by 31556952000
  add 1970 to time
  floor variable time
  ask for "what is your name" and set as variable name
  ask for "what is your age" and set as variable date
  convert variable date to integer
  subtract 2022 from date
  say "hello #name#, you were born in #date#"
  ```
  ### Output:
  ```
  what is your name?: Johnathan
  what is your age?: 23
  hello Johnathan, you were born in 1999
  ```
</details>


## Code Examples

<details> 
  <summary>3x+1 simulation </summary>
  
```
set number x as 14
## set number to whatever you want
if #x#==1 then goto 12
if #x#%2==0 then goto 9
multiply x by 3
add 1 to x
say "#x#"
goto 2
divar x by 2
say "#x#"
goto 2
## end
```
</details>

<details>
  <summary>Magic 8-Ball </summary>

  ```
set list eightball
add "It is certain" to list eightball
add "It is decidedly so" to list eightball
add "Without a doubt" to list eightball
add "Yes definitely" to list eightball
add "You may rely on it" to list eightball
add "As I see it, yes" to list eightball
add "Most likely" to list eightball
add "Outlook good" to list eightball
add "Yes" to list eightball
add "Signs point to yes" to list eightball
add "Reply hazy, try again" to list eightball
add "Ask again later" to list eightball
add "Better not tell you now" to list eightball
add "Cannot predict now" to list eightball
add "Concentrate and ask again" to list eightball
add "Don’t count on it" to list eightball
add "My reply is no" to list eightball
add "My sources say no" to list eightball
add "Outlook not so good" to list eightball
add "Very doubtful" to list eightball
clear console
say "The Magic 8 Ball says: %eightball|@20%"
```
</details>

<details>
  <summary>Days left until new years 2023</summary>

  ```
  set current date to variable date
  set number newyear as 1672552800000
  subtract #date# from newyear
  divar newyear by 86400000
  floor variable newyear
  add 1 to newyear
  if #newyear#==1 then goto 11
  if #newyear#<=0 then goto 13
  say "there are #newyear# days remaining until new years!"
  goto 14
  say "there is #newyear# day remaining until new years!"
  goto 14
  say "Happy new years!"
  ## end
  ```
</details>

Enjoy!
