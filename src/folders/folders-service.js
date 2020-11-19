const FoldersService = {
  getAllFolders(knex) {
    return knex.select('*').from('noteful_folders');
  },
  insertFolder(knex, data) {
    return knex
      .insert(data)
      .into('noteful_folders')
      .returning('*')
      .then((rows) => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex.select('*').from('noteful_folders').where({ id }).first();
  },
  deleteFolder(knex, id) {
    return knex('noteful_folders').where({ id }).delete();
  },
  updateFolder(knex, id, newFolderFields) {
    return knex('noteful_folders').where({ id }).update(newFolderFields);
  },
};

module.exports = FoldersService;
