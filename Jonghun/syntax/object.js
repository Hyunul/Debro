var member = ['shuri', 'shuri2', 'shuri3'];
console.log(member[1]);

var i = 0;
while(i< member.length){
    console.log('array loop', member[i]);
    i= i+1;
}

var roles = {
    'programmer': 'shuri',
    'designer': 'shuri2',
    'manager': 'shuri3'
}

console.log(roles.designer);

for(var n in roles){
    console.log('object ->', n, 'value ->', roles[n]);
}