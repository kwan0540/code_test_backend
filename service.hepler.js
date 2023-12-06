const getRelatedDetails = async (items, service, details, isNotFilm = true) => {
  try {
    const hashMap = {};
    for (const item of items) {
      const number = item.match(/\d+/);
      let id = Number(number[0]);
      let modifiedId;
      let page;
      if (id % 10 == 0) {
        page = id / 10;
        modifiedId = id / page - 1;
      } else {
        page = Math.floor(id / 10) + 1;
        modifiedId = (id % 10) - 1;
      }
      if (!hashMap[page]) {
        hashMap[page] = [];
      }
      hashMap[page].push({ modifiedId, id });
    }
    for (const page in hashMap) {
      const result = await service(page, "service");
      const detail = result.results;
      for (const item of hashMap[page]) {
        const specificDetail = detail[item.modifiedId];
        details.push({
          detail: isNotFilm ? specificDetail.name : specificDetail.title,
          id: item.id,
        });
      }
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getId = (items, details) => {
  for (const item of items) {
    const number = item.match(/\d+/);
    let id = Number(number[0]);
    details.push(id);
  }
};

module.exports = {
  getRelatedDetails,
  getId,
};
