module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tareas', [
      { titulo: 'Tarea 1', completada: false, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Tarea 2', completada: true,  createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Tarea 3', completada: false, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tareas', null, {});
  }
};