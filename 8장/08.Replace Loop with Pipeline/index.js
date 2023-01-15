function acquireData(input) {
  const lines = input.split("\n");
  let firstLine = true;
  const result = [];

  for (const line of lines) {
    // 루프변수 생성
    if (firstLine) {
      firstLine = false;
      continue;
    }

    if (line.trim() === "") {
      continue;
    }

    const record = line.split(",");
    if (record[1].trim() === "India") {
      result.push({ city: record[0].trim(), phone: record[2].trim() });
    }
  }
  return result;
}

function acquireData01(input) {
  const lines = input.split("\n");
  let firstLine = true;
  const result = [];
  const loopItems = lines;
  for (const line of loopItems) {
    if (firstLine) {
      // 파이프라인 적용
      firstLine = false;
      continue;
    }

    if (line.trim() === "") {
      continue;
    }

    const record = line.split(",");
    if (record[1].trim() === "India") {
      result.push({ city: record[0].trim(), phone: record[2].trim() });
    }
  }
  return result;
}

function acquireData02(input) {
  const lines = input.split("\n");
  const result = [];
  const loopItems = lines.slice(1);
  for (const line of loopItems) {
    if (line.trim() === "") {
      continue; /* filter로 대치*/
    }

    const record = line.split(",");
    if (record[1].trim() === "India") {
      result.push({ city: record[0].trim(), phone: record[2].trim() });
    }
  }
  return result;
}

function acquireData03(input) {
  const lines = input.split("\n");
  const result = [];
  const loopItems = lines.slice(1).filter((line) => line.trim() !== "");
  for (const line of loopItems) {
    const record = line.split(","); // map 적용
    if (record[1].trim() === "India") {
      result.push({ city: record[0].trim(), phone: record[2].trim() });
    }
  }
  return result;
}

function acquireData04(input) {
  const lines = input.split("\n");
  const result = [];
  const loopItems = lines
    .slice(1)
    .filter((line) => line.trim() !== "")
    .map((line) => line.split(","));
  for (const line of loopItems) {
    // filter
    if (record[1].trim() === "India") {
      result.push({ city: record[0].trim(), phone: record[2].trim() });
    }
  }
  return result;
}

function acquireData05(input) {
  const lines = input.split("\n");
  const result = [];
  const loopItems = lines
    .slice(1)
    .filter((line) => line.trim() !== "")
    .map((line) => line.split(","))
    .filter((record) => record[1].trim() === "India");
  for (const line of loopItems) {
    // map
    result.push({ city: record[0].trim(), phone: record[2].trim() });
  }
  return result;
}

function acquireData06(input) {
  const lines = input.split("\n");
  const result = [];
  const loopItems = lines
    .slice(1)
    .filter((line) => line.trim() !== "")
    .map((line) => line.split(","))
    .filter((record) => record[1].trim() === "India")
    .map((record) => ({ city: record[0].trim(), phone: record[2].trim() }));
  for (const line of loopItems) {
    result.push(line); // 변수대입
  }
  return result;
}

function acquireData07(input) {
  const lines = input.split("\n");
  // 정리
  const result = lines
    .slice(1)
    .filter((line) => line.trim() !== "")
    .map((line) => line.split(","))
    .filter((record) => record[1].trim() === "India")
    .map((record) => ({ city: record[0].trim(), phone: record[2].trim() }));
  return result;
}

function acquireData08(input) {
  const lines = input.split("\n");
  return lines
    .slice(1)
    .filter((line) => line.trim() !== "")
    .map((line) => line.split(","))
    .filter((record) => record[1].trim() === "India")
    .map((record) => ({ city: record[0].trim(), phone: record[2].trim() }));
}
