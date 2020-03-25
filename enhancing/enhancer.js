module.exports = {
  succeed,
  fail,
  repair,
  get,
};

const item = {
  name: '',
  enhancement: 10,
  durability: 50,
}

function succeed(item) {

  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
