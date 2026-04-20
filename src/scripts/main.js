'use strict';

function toNumber(str) {
  const num = Number(str.replaceAll(/[^0-9]/g, ''));

  return Number.isNaN(num) ? 0 : num;
}

function sortList(list) {
  const arr = [...list.children];

  arr.sort((a, b) => {
    const aValue = toNumber(a?.dataset?.salary);
    const bValue = toNumber(b?.dataset?.salary);

    return bValue - aValue;
  });

  list.append(...arr);
}

function getEmployees(list) {
  const arr = [...list.children];

  return arr.map((item) => ({
    name: item?.dataset?.name ?? '',
    position: item?.dataset?.position ?? '',
    salary: toNumber(item?.dataset?.salary),
    age: toNumber(item?.dataset?.age),
  }));
}

const listElement = document.querySelector('ul');

sortList(listElement);
getEmployees(listElement);
