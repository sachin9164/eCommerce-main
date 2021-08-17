import data from "./data.json";

function asyncWait(wait) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), wait);
  });
}

async function getCategories() {
  await asyncWait(500);
  return Array.from(data.categories);
}

async function getItems(categoryId) {
  await asyncWait(500);
  const items = data.items.filter(item => categoryId === item.categoryId);
  return items;
}

async function getBlogs() {
  await asyncWait(500);
  
  return Array.from(data);
}

export default {
  getCategories,
  getItems,
  getBlogs
};
