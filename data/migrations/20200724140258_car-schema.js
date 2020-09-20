
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl =>{
      tbl.increments();
      tbl.text("VIN").unique().notNullable();
      tbl.text("make").notNullable();
      tbl.text("model").notNullable();
      tbl.float("mileage").notNullable();
      tbl.text("transmission type");
      tbl.text("status of title");
  })
  .createTable('sales', tbl=>{
    tbl.increments();
    tbl.float("sale price").notNullable;
    tbl.integer('car_id').unsigned().notNullable().references('cars.id').onDelete('CASCADE').onUpdate('CASCADE');
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
  .dropTableIfExists('sales');
};
