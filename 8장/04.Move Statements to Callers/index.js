function org() {
  function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
  }

  function listRecentPhotos(outStream, photos) {
    photos
      .filter((p) => p.date > recentDateCutoff())
      .forEach((p) => {
        outStream.write("<div>\n");
        emitPhotoData(outStream, p);
        outStream.write("</div>\n");
      });
  }

  function emitPhotoData(outStream, photo) {
    // 남길부분 함수 추출
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
    outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
    outStream.write(`<p>위치: ${photo.location}</p>\n`);
  }
}

function refactor_01() {
  function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo); // 인라인
  }

  function listRecentPhotos(outStream, photos) {
    photos
      .filter((p) => p.date > recentDateCutoff())
      .forEach((p) => {
        outStream.write("<div>\n");
        emitPhotoData(outStream, p);
        outStream.write("</div>\n");
      });
  }

  function emitPhotoData(outStream, photo) {
    zztmp(outStream, photo);
    outStream.write(`<p>위치: ${photo.location}</p>\n`);
  }

  function zztmp(outStream, photo) {
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
    outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
  }
}

function refactor_02() {
  function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    zztmp(outStream, person.photo);
    outStream.write(`<p>위치: ${person.photo.location}</p>\n`);
  }

  function listRecentPhotos(outStream, photos) {
    photos
      .filter((p) => p.date > recentDateCutoff())
      .forEach((p) => {
        outStream.write("<div>\n");
        zztmp(outStream, p);
        outStream.write(`<p>위치: ${p.location}</p>\n`);
        outStream.write("</div>\n");
      });
  }

  // 이름 변경
  function zztmp(outStream, photo) {
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
    outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
  }
}

function refactor_03() {
  function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
    outStream.write(`<p>위치: ${person.photo.location}</p>\n`);
  }

  function listRecentPhotos(outStream, photos) {
    photos
      .filter((p) => p.date > recentDateCutoff())
      .forEach((p) => {
        outStream.write("<div>\n");
        emitPhotoData(outStream, p);
        outStream.write(`<p>위치: ${p.location}</p>\n`);
        outStream.write("</div>\n");
      });
  }

  function emitPhotoData(outStream, photo) {
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
    outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
  }
}
