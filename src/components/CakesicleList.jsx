import React from 'react';
import Cakesicle from './Cakesicle';

const cakesicles = [
    {
        name: 'Chocolate Cakesicle',
        image: 'https://example.com/chocolate-cakesicle.jpg',
        description: 'A delicious chocolate cakesicle with sprinkles.'
    },
    {
        name: 'Vanilla Cakesicle',
        image: 'https://example.com/vanilla-cakesicle.jpg',
        description: 'A creamy vanilla cakesicle with a chocolate drizzle.'
    }
];

const CakesicleList = () => {
    return (
        <div>
            {cakesicles.map(cakesicle => (
                <Cakesicle
                    key={cakesicle.name}
                    name={cakesicle.name}
                    image={cakesicle.image}
                    description={cakesicle.description}
                />
            ))}
        </div>
    );
};

export default CakesicleList;
