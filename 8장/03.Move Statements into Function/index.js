function org() {
  function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(`<p>제목: ${person.photo.title}</p>`);
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
  }

  function photoDiv(p) {
    return [
      "<div>",
      `<p>제목: ${p.title}</p>`, // 함수추출하기
      emitPhotoData(p),
      "</div>",
    ].join("\n");
  }

  function emitPhotoData(aPhoto) {
    const result = [];
    result.push(`<p>위치: ${aPhoto.location.name}</p>`);
    result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);
    return result.join("\n");
  }
}

function refactor_01() {
  function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(`<p>제목: ${person.photo.title}</p>`); // 신규함수 호출
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
  }

  function photoDiv(p) {
    return ["<div>", zznew(p), "</div>"].join("\n");
  }

  function zznew(p) {
    return [`<p>제목: ${p.title}</p>`, emitPhotoData(p)].join("\n");
  }

  function emitPhotoData(aPhoto) {
    const result = [];
    result.push(`<p>위치: ${aPhoto.location.name}</p>`);
    result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);
    return result.join("\n");
  }
}

function refactor_02() {
  function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(zznew(person.photo));
    return result.join("\n");
  }

  function photoDiv(p) {
    return ["<div>", zznew(p), "</div>"].join("\n");
  }

  function zznew(p) {
    return [`<p>제목: ${p.title}</p>`, emitPhotoData(p)].join("\n"); // 인라인
  }

  function emitPhotoData(aPhoto) {
    const result = [];
    result.push(`<p>위치: ${aPhoto.location.name}</p>`);
    result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);
    return result.join("\n");
  }
}

function refactor_03() {
  function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(zznew(person.photo));
    return result.join("\n");
  }

  function photoDiv(p) {
    return ["<div>", zznew(p), "</div>"].join("\n");
  }

  function zznew(photo) {
    // 함수명 변경
    return [
      `<p>제목: ${photo.title}</p>`,
      `<p>위치: ${photo.location.name}</p>`,
      `<p>날짜: ${photo.date.toDateString()}</p>`,
    ].join("\n");
  }
}

function refactor_04() {
  function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
  }

  function photoDiv(p) {
    return ["<div>", emitPhotoData(p), "</div>"].join("\n");
  }

  function emitPhotoData(photo) {
    // 함수명 변경
    return [
      `<p>제목: ${photo.title}</p>`,
      `<p>위치: ${photo.location.name}</p>`,
      `<p>날짜: ${photo.date.toDateString()}</p>`,
    ].join("\n");
  }
}
