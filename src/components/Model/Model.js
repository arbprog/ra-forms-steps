import shortid from 'shortid';

export default class Model {
  constructor(date, distance) {
    this.id = shortid.generate();
    this.date = date;
    this.distance = distance;
  }
}