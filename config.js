module.exports = {
  prefix: '#',
  statusBOT: 'Test modular 2',
  superusers: ['ID'],
  dirBase: './database/db/001_base.db',
  categories: [
    {name: 'test', priority: 5}, 
    {name: 'general', priority: 8},
    {name: 'levels', priority: 8}
  ],
  groups: [
  {name: "User", permLvl: 0}, 
  {name: "Member", permLvl: 1},
  {name: "Mod", permLvl: 2},
  {name: "Admin", permLvl: 3}]
  
}