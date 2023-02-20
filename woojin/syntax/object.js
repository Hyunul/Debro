var members = ['1', '2', '3'];
console.log(members[1]);
for (var i = 0; i < members.length; i++) {
    console.log('array loop', members[i]);
}

var roles = {
    one: '1',
    two: '2',
    three: '3',
};
console.log(roles.two);

for (var name in roles) {
    console.log('object => ', name, 'value => ', roles[name]);
}
