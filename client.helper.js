const getRelatedClientDetails = async (items, service, details, type) => {
  const hashMap = {};
  for (const item of items) {
    const ids = [];
    const number = item.match(/\d+/);
    const id = Number(number[0]);
    ids.push(id);
    hashMap[Math.floor(id / 10) + 1] = ids;
  }
  for (const page in hashMap) {
    const result = await service(page);
    const detail = result.result;
    for (const item of hashMap[page]) {
      const specificDetail = detail[item % (page * 10)];
      details.push({
        detail: type == "people" ? specificDetail.name : specificDetail.title,
        id: item,
      });
    }
  }
};

module.exports = {
  getRelatedClientDetails,
};
