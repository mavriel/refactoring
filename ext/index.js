const _ = require("lodash/fp");
const { chain } = require("lodash");

const count = 10000000;

const long1 = () => {
  console.time("normal");
  const f1 = _.times((a) => a, count);
  const f2 = f1.map((a) => a + 2);
  const f3 = f2.map((a) => a + 2);
  const f4 = f3.map((a) => a + 2);
  const f5 = f4.map((a) => a + 2);
  const f6 = f5.map((a) => a + 2);
  const f7 = f6.map((a) => a + 2);
  const f8 = f7.filter((a) => a % 2);
  console.log(f8[f8.length - 1]);
  console.timeEnd("normal");
};

const long2 = () => {
  console.time("pipe");
  _.pipe(
    _.times((a) => a),
    _.map((a) => a + 2),
    _.map((a) => a + 2),
    _.map((a) => a + 2),
    _.map((a) => a + 2),
    _.map((a) => a + 2),
    _.map((a) => a + 2),
    _.filter((a) => a % 2),
    _.last,
    console.log
  )(count);
  console.timeEnd("pipe");
};

const long3 = () => {
  console.time("chain");

  const r = chain(_.times((a) => a, count))
    .map((a) => a + 2)
    .map((a) => a + 2)
    .map((a) => a + 2)
    .map((a) => a + 2)
    .map((a) => a + 2)
    .map((a) => a + 2)
    .filter((a) => a % 2)
    .head()
    .value();

  console.log(r);
  console.timeEnd("chain");
};

const long4 = () => {
  console.time("pipe-2");
  _.pipe(
    _.times((a) => a),
    _.map((a) => a + 12),
    _.filter((a) => a % 2),
    _.last,
    console.log
  )(count);
  console.timeEnd("pipe-2");
};

long1();
long2();
long3();
long4();
