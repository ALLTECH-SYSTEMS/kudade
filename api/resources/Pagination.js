
class Paginator {
    constructor(data, limit, offset) {
      return {
        data,
        total: data.length,
        limit: limit,
        offset: offset
      }
    }
}

export default Paginator;