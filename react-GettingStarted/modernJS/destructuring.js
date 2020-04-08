console.log('~~~~~~~~~~~~~~destructuring~~~~~~~~~');

const { PI, E, SQRT2 } = Math;

const circle = {
    label: 'circleX',
    radius: 2,
};

const circleArea = ({ radius }, { precision = 2 }) => (PI * radius * radius).toFixed(precision);
console.log(
    circleArea(circle, { precision: 5 })
);
console.log('~~~~~~~~~rest~~~~~~~~~~');

// const [first, second, , forth] = [10, 20, 30, 40];

const [first, ...restOfItems] = [10, 20, 30, 40];
console.log(restOfItems);

const data = {
    temp1: '001',
    temp2: '002',
    firtsName: 'John',
    lastName: 'Doe',
}

const { temp1, temp2, ...person } = data;
const newArray = [...restOfItems]
console.log(newArray);
const newObj = {
    ...person
};
console.log(newObj);