function org() {
  function score(candidate, medicalExam, scoringGuide) {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }
    let certificationGrade = "regular";
    if (scoringGuide.stateWithLowCertification(candidate.originState)) {
      certificationGrade = "low";
      result -= 5;
    }

    result -= Math.max(healthLevel - 5, 0);
    return result;
  }
  // 빈클래스 만들고 함수를 클래스로 이동
}

function refactor_01() {
  function score(candidate, medicalExam, scoringGuide) {
    return new Scorer().execute(candidate, medicalExam, scoringGuide);
  }
  class Scorer {
    // 매개변수 하나씩 생성자로 이동
    execute(candidate, medicalExam, scoringGuide) {
      let result = 0;
      let healthLevel = 0;
      let highMedicalRiskFlag = false;

      if (medicalExam.isSmoker) {
        healthLevel += 10;
        highMedicalRiskFlag = true;
      }
      let certificationGrade = "regular";
      if (scoringGuide.stateWithLowCertification(candidate.originState)) {
        certificationGrade = "low";
        result -= 5;
      }

      result -= Math.max(healthLevel - 5, 0);
      return result;
    }
  }
}

function refactor_02() {
  function score(candidate, medicalExam, scoringGuide) {
    return new Scorer(candidate).execute(medicalExam, scoringGuide);
  }
  class Scorer {
    constructor(candidate) {
      this._candidate = candidate;
    }
    // 나머지 매개변수들도 이동
    execute(medicalExam, scoringGuide) {
      let result = 0;
      let healthLevel = 0;
      let highMedicalRiskFlag = false;

      if (medicalExam.isSmoker) {
        healthLevel += 10;
        highMedicalRiskFlag = true;
      }
      let certificationGrade = "regular";
      if (scoringGuide.stateWithLowCertification(this._candidate.originState)) {
        certificationGrade = "low";
        result -= 5;
      }

      result -= Math.max(healthLevel - 5, 0);
      return result;
    }
  }
}

function refactor_03() {
  function score(candidate, medicalExam, scoringGuide) {
    return new Scorer(candidate, medicalExam, scoringGuide).execute();
  }
  class Scorer {
    constructor(candidate, medicalExam, scoringGuide) {
      this._candidate = candidate;
      this._medicalExam = medicalExam;
      this._scoringGuide = scoringGuide;
    }

    execute() {
      // 지역변수 필드로 변경
      let result = 0;
      let healthLevel = 0;
      let highMedicalRiskFlag = false;

      if (this._medicalExam.isSmoker) {
        healthLevel += 10;
        highMedicalRiskFlag = true;
      }
      let certificationGrade = "regular";
      if (this._scoringGuide.stateWithLowCertification(this._candidate.originState)) {
        certificationGrade = "low";
        result -= 5;
      }

      result -= Math.max(healthLevel - 5, 0);
      return result;
    }
  }
}

function refactor_04() {
  function score(candidate, medicalExam, scoringGuide) {
    return new Scorer(candidate, medicalExam, scoringGuide).execute();
  }
  class Scorer {
    constructor(candidate, medicalExam, scoringGuide) {
      this._candidate = candidate;
      this._medicalExam = medicalExam;
      this._scoringGuide = scoringGuide;
    }

    execute() {
      this._result = 0;
      // 나머지 지역변수 필드로 변경
      let healthLevel = 0;
      let highMedicalRiskFlag = false;

      if (this._medicalExam.isSmoker) {
        healthLevel += 10;
        highMedicalRiskFlag = true;
      }
      let certificationGrade = "regular";
      if (this._scoringGuide.stateWithLowCertification(this._candidate.originState)) {
        certificationGrade = "low";
        this._result -= 5;
      }

      this._result -= Math.max(healthLevel - 5, 0);
      return this._result;
    }
  }
}

function refactor_05() {
  function score(candidate, medicalExam, scoringGuide) {
    return new Scorer(candidate, medicalExam, scoringGuide).execute();
  }
  class Scorer {
    constructor(candidate, medicalExam, scoringGuide) {
      this._candidate = candidate;
      this._medicalExam = medicalExam;
      this._scoringGuide = scoringGuide;
    }

    execute() {
      this._result = 0;
      this._healthLevel = 0;
      this._highMedicalRiskFlag = false;

      this.scoreSmoking();
      this._certificationGrade = "regular";
      if (this._scoringGuide.stateWithLowCertification(this._candidate.originState)) {
        this._certificationGrade = "low";
        this._result -= 5;
      }

      this._result -= Math.max(this._healthLevel - 5, 0);
      return this._result;
    }

    scoreSmoking() {
      if (this._medicalExam.isSmoker) {
        this._healthLevel += 10;
        this._highMedicalRiskFlag = true;
      }
    }
  }
}

// 이쪽은 나는 크게 동의하지는 않음
// 그냥 일급함수 쓰고, 변환함수쓰는 방식이 더 좋을 것이라 생각함
