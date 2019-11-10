// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
var name = name.toUpperCase();


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = sentence = 'good afternoon, mr mike.';
var sentence =  sentence.charAt(0).toUpperCase()+sentence.substr(1, 4)+
sentence.charAt(5).toUpperCase()+sentence.substr(6,10)+sentence.charAt(16).toUpperCase()+sentence.substr(17,2)+sentence.charAt(19).toUpperCase()+
sentence.substr(20,4);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
var matches  = money.match(/(\d+)/);
var money = matches[0];
