export const todos = Array.from(Array(5)).map((_item, key) => ({
  id: key + 1,
  title: `Title_${key + 1} Test`,
  description: `Description_${key + 1} Test`,
  creationDate: `01/0${key + 1}/2021, 9:42:52 pm`,
  isActive: true,
}))
