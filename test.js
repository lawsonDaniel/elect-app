let users = [];
let value = "name9";

// Generate user names from name0 to name9
for (let index = 0; index < 10; index++) {
    users.push(`name${index}`);
}

// Check if the value is in the array
const valueIndex = users.indexOf(value);

if (valueIndex !== -1) {
    // If value is found, move it to the front
    users.unshift(users.splice(valueIndex, 1)[0]);
} else {
    // If value is not found, add 'name' to the front
    users.unshift('name');
}

console.log(users);
