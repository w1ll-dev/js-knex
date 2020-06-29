
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { userName: 'w1ll' },
        { userName: 'w1ll_robot' }
      ]);
    });
};
