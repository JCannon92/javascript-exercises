let findTheOldest = function(arr) {
    let ageArr = arr.map(obj => {
        if (obj.yearOfDeath) {
            obj.age = obj.yearOfDeath - obj.yearOfBirth;
        } else {
            obj.age = new Date().getFullYear() - obj.yearOfBirth;
        }
        return obj;
    });
    
    return ageArr.sort((a, b) => b.age - a.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
