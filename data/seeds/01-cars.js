
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '1FH34685217659841', make: 'Honda', model: 'Fit', mileage: 15000 },
        {VIN: '2HS46555557777788', make: 'Toyota', model: 'Prius', mileage: 16000 },
        {VIN: '6OY11332244665599', make: 'Toyota', model: 'Tacoma', mileage: 20000 }
      ]);
    });
};
