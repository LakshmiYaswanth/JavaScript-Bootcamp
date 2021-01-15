const techs= new Map();
techs.set('Alan', { 'job title': 'accountant', email: 'alan@email.com' })
techs.set('John', { 'job title': 'manager', email: 'john@email.com' })
techs.set('Peter', { 'job title': 'programmer', email: 'peter@email.com' })
console.log(techs);
console.log(techs.has('Alan'));
//console.log(techs.delete('John'));
console.log(techs.get('Alan'));
console.log(techs.size)

for (const [key, user] of techs) {
    console.log(`${key}: ${user['job title']}`)
}

for (const key of techs.keys()) {
    console.log(key)
}

for (const user of techs.values()) {
    console.log(user['job title'])
}

techs.forEach((user, key) => {
    console.log(`${key}: ${user['job title']}`)
});

const pairsArr = Array.from(techs);
console.log(pairsArr)

const techsArr = Array.from(techs.values());
console.log(techsArr)

const keysArr = Array.from(techs.keys());
console.log(keysArr)