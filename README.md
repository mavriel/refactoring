# 리팩터링

## 0. 들어가며

- 리팩터링이란
  - 겉으로 드러나는 코드의 기능은 바꾸지 않으면서 내부 구조를 개서하느 방식으로 소프트웨어 시스템을 수정하는 과정
  - 코딩 후 설계 개선
  - 처음부터 완벽한 설계를 갖추기보다는 개발을 진행하면서 지속적으로 설계
- 덕타이핑
  - 자바스크립트에서는 *구조*를 기준으로 타입을 구분한다.
  - 클래스이름과 상관없이 특정 필드와 메서드를 지닌 객체라면 같은 타입으로 간주한다.

## 1. 리팩터링: 첫 번째 예시

- 잘 동작하는 프로그램을 지저분하다고 고쳐도 될까?
  _ 코드를 수정하려면 사람의 개입이 필요
  _ 사람은 코드의 미적 상태에 민감
  _ 설계가 나쁜 시스템은 수정이 어렵다.
  _ 무엇을 수정할지 찾기가 어려우면 실수로 인한 버그 가능성 높아짐
  > 프로그램이 새로운 기능을 추가하기에 편한 구조가 아니라면, 먼저 기능을 추가하기 쉬운 형태로 리팩터링하고 원하는 기능을 추가한다.

## 1.4 statement() 함수 쪼개기

- 함수 추출하기 (extract method, option+command+M) - (29-33)
  - let thisAmount = 0 부터 스위치문 끝까지 선택후 함수 추출하면 자동으로 적용 가능
  - 이렇게 조금씩 변경하고 매번 테스트하는 것이 리팩터링의 핵심
    > 리팩터링은 프로그램 수정을 작은 단계로 나눠 진행한다. 그래서 중간에 실수하더라도 버그를 쉽게 찾을 수 있다.
  - 테스트는 실행할 때 --watch 옵션을 줘서, 파일 변경시 계속 확인하도록 함
- 함수 추출후 추출된 함수 검토(33-35)
  - WebStorm에서 추출한 함수의 파라미터는 (play, perf)였음. 책의 내용처럼 (perf, play)로 변경
  - 이때는 Change Signature (Command+F6) 사용
- play 변수제거 (35-37)
  - 책의 의도를 잘못 파악하고 amountFor를 global로 뺐기에 다시 안으로 집어넣고, playFor 함수 추출
  - 변수 인라인하기 (Inline, option+command+n)
- amountFor에서 play 제거하기 (37-39)
  - Ide에서는 제공하지 않으니, const play=playFor(aPerformance) 로 변경후 inline
- thisAmount를 인라인 (39-40)
  - 사실 이정도까지 인라인해도 속도에는 크게 영향이 없는 것을 알지만, 가슴에서 거부한다.
- 적립 포인트 계산 코드 추출하기(40-42)
  - volumeCredits += ... ~~~ if문 끝나는데까지 선택후 함수 추출
- format 변수 제거하기 및 이름변경 (42-44)
  - 변수 제거는 완벽하게 자동은 안 됨. const format= 이후부터 선택해서 함수 추출 후 수동으로 aNumber 추가
- volumeCredits 변수 제거하기 (44-47)
  - 반복문 쪼개기로 volumeCredits 사용 로직 분리
    - 으윽. 이것도 가슴이 거부. 하지만 함수형에서는 편안한 마음으로 하고 있다는게 아이러니.
  - 이건 자동으로 안 되니, 루프 통째로 복사후 불필요 부분 제거
  - volumeCredits 세팅하는 부분을 함수 추출후 인라인처리
    > 반복문 중복으로 인한 성능저하 문제가 걱정될 수 있다.
    > 이런 중복은 성능에 크게 영향을 주지 않을 뿐더러, 컴파일러들이 우리의 직관을 초월하는 결과를 만들기도 한다.
    > 그렇지만 항상 상관없는 것은 아니기에 리팩터링후 성능이 떨어졌으면 나중에 성능을 개선하는 작업을 따로 실시한다.
    > 이미 좋은 코드로 바뀌었기 때문에 성능 개선을 더 효과적으로 할 수 있다.
    > 결론적으로 더 깔끔하면서도 더 빠른 코드를 얻을 수 있다는 것
- totalAmount 변수 제거 (47-49)
  - 반복문 쪼개기, 변수초기화 구문 이동, 함수 추출, 임시 변수명 사용, 인라인, 이름 변경, 함수내 이름 변경

## 1.5 중간 점검: 난무하는 중첩 함수

- 중첩함수를 써서 이거 별로인데 했는데, 이제 이걸 고치는군
- 인줄 알았는데, 그냥 놔두고 있음.

## 1.6 계산 단계와 포맷팅 단계 분리하기

- 이 부분이 사실 핵심이 아닐까 생각한다.
  1. statement()에 필요한 데이터를 처리하고
  2. 처리한 결과를 텍스트나 HTML로 표현
- statement 전체를 함수 추출 후, data를 넘기도록 변경 (52-53)
- customer, performances 정보를 data로 이동 (54-55)
  - performances를 얕은 복사를 사용. 책에서와는 다르게 그냥 es6 기능 사용
- playFor / amountFor, volumeCreditsFor 함수 옮기기 및 data.performances에 저장(55-57)
- totalAmount / totalVolumeCredits 이동 (58-59)
  - 여기에 있는 방식으로 하려면 object를 바로 생성하는 방식 ({a: xxx})가 안 됨.
  - 그래서 {} 선언후 값할당하는 방식으로 변경함
  - 반복문 파이프라인으로 바꾸기는 Ramda써서 바꿔봄
- 파일분리(59-60)
  - webstorm에서 js 사용시 함수의 파일이동이 안 되는게 참 불편한다. ts만 됨

## 1.8 다형성을 활용해 계산 코드 재구성하기

- 공연료 계산기 만들기 (66-69)
  - 함수 옮기기
    - 함수를 복사 -> 복사한 함수를 기존 함수에서 호출 -> 동작이 잘 되면 함수 인라인해서 직접 새함수 호출
    - 상당히 귀찮게 작업하지만, 이렇게해야 실무에서 에러를 최소화하면서 수정이 가능하다.
- 공연료 계산기를 다형성 버전으로 만들기
  - 생성자를 팩터리 함수로 바꾸기를 적용 (70)
  - 조건부 로직을 다형성으로 바꾸기 (71-73)
    - 슈퍼클래스의 함수에 직접 접근하면 에러나게 구현하면서 진행.
    - 모든 함수 이동이 끝나면 수퍼클래스의 해당함수는 에러 발생

## 1.10 마치며

> 좋은 코드를 가늠하는 확실한 방법은 '얼마나 수정하기 쉬운가'다.
- 사람들간의 취향의 차이는 수없이 많을 수 있다. 중요한 것은 빠르고 저렴한 비용으로 필요한 기능을 제공하는 것.

> 리팩토링을 효과적으로 하는 핵심은, 단계를 잘 눠서서 더 빠르게 처리하고 코드를 깨지지 않게 하는것.
> 그리고 작은 단계들이 모여서 큰 변화를 이룰 수 있다는 것을 깨닫는 것이다.

# 2. 리팩터링 원칙
## 2.1 리팩터링 정의
> 리팩터링: 소프트웨어의 겉보기 동작은 그대로 유지한 채 코드를 이해하고 수정하기 쉽도록 내부 구조를 변경하는 기법
* 동작을 보전하는 작은 단계를 순차적으로 연결하여 큰 변화를 만듦
* 리팩터링하는 동안 코드가 항상 정상 작동
* 단계들이 체계적이고 디버깅하는데 시간이 줄어, 작업을 더 빨리 가능
## 2.2 두개의 모자
* 기능추가, 리팩터링을 명확히 구분해서 작업
  * 2가지를 동시에 하지 않음
* 리팩터링시
  * 기능추가 X
  * 테스트 추가 X
    * 인터페이스 변경시만 테스트 수정 - 이것도 요즘은 ide가 자동으로 수정해줌 
* 기능추가시
  * 기존 코드 변경 X
## 2.3 리팩터링하는 이유
1. 소프트웨어 설계가 좋아진다.
   * 규칙적인 리팩터링으로 코드의 구조 지탱
2. 이해하기 쉬워진다.
   * 기억할 것들을 최대한 코드에 담는다.
3. 버그를 쉽게 찾을 수 있다.
   * 구조가 좋아지면서, 버그가 눈에 쉽게 보인다.
4. 프로그래밍 속도가 높아진다.
   * 기존에 작성한 코드를 최대한 활용할 수 있어서 새 기능을 더 빨리 추가
   * 요구사항이 바뀌더라도 설계를 지속해서 개선 가능 
## 2.4 언제 리팩터링해야 할까?
1. 기능 추가 직전 - 준비를 위한 리팩터링
   * 구조를 살짝 바꾸면 다른 작업하기 부분을 찾아 리팩터링한다.
2. 코드 수정전 코드 파악할때 - 이해를 위한 리팩터링
   * 파악할 때마다 코드의 의도가 드러나게 리팩터링
     * 코드 분석시 리팩터링을 하면, 더 깊은 수준까지 이해 가능 
3. 쓰레기 줍기 리팩터링
   * 쉽게 수정가능한 부분만 리팩터링하고, 오래 걸릴 부분은 메모후 나중에 처리
   * **각각의 작은 단계가 코드를 깨뜨리지 않는다.**
4. 계획된 리팩터링과 수시로 하는 리팩터링
   * 뛰어난 개발자는 새 기능을 추가하기 쉽도록 코드를 '수정'하는 것이 기능을 가장 빠르게 추가하는 길일 수 있음을 안다.
   * 나쁜 코드뿐만 아니라 잘 작성된 코드도 끊임없이 리팩터링을 계속해야 한다.
     * 물론 잘 작성된 코드는 리팩터링도 더 쉽다.
   * 따로 업무에 추가하지 않고, 일하는 도중 계속해서 해야됨 
     * **!!! 모든 작업에 리팩터링이 포함되어 있다고 생각**
5. 오래 걸리는 리팩터링
   * 대규모 리팩터링에는 회의적
   * 깨지지 않는 아주 작은 단계의 리팩터링 반복
   * 이것들이 모여서 대규모 리팩터링이 됨
     * 라이브러리 교체시 - 추상 인터페이스 만들고, 신규 라이브러리로 이동 (추상화 갈아타기)
6. 코드 리뷰에 리팩터링 활용하기 
   * 개선사항 찾아보고, 리팩터링하여 쉽게 개선할 것 같으면 해본다.
   * 이때, 더 좋은 아이디어가 나올 때도 있다.
7. 관리자에게는 뭐라고 말해야 할까?
   * 리팩터링은 기능 추가할때 그냥 포함된다고 보면된다.
   * 구조 크게 바꾸는게 리팩터링이 아님. 일반적으로 말하는 리팩터링은 우리의 리팩터링이 아님
8. 리팩터링하지 말아야 할 때
   * 수정할 필요가 없는 코드
   * 새로 만드는게 더 쉬울 때
## 2.5 리팩터링 시 고려할 문제
1. 새 기능 개발 속도 저하
  > 리팩터링의 궁극적인 목적은 개발 속도를 높여서, 더 적은 노력으로 더 많은 가치를 창출하는 것 
   * 리팩터링의 본질은 코드 베이스를 예쁘게 꾸미게 아니다.
   * 오로지 **기간 단축**을 이유로 하는 것이다. 
2. 코드 소유권
   * 코드 소유권이 나눠 있으면 리팩토링에 방해
   * 누구나 변경가능한 방식을 선호 
3. 브랜치
   * 기능 브랜치의 문제점
     * 독립 브랜치로 작업하는 기간이 길어질 수로 merge가 어렵다.
   * 지속적 통합(CI)
     * 최소한 하루에 한번은 마스터에 merge
     * 마스터를 건강하게 유지.
     * 거대한 기능을 잘게 쪼게서 개발
     * 기능 토글 플래그 사용
4. 테스팅 
   * 리팩터링을 위해서는 test code를 마련해야 한다.
   * 테스트에 리소스 투입은 필요하지만, 효과가 좋다.
5. 레거시 코드
   * 프로그램의 틈새를 만들기 - 이때 리팩토링을 사용
   * 부분을 나눠, 조금씩 수정 - 자주 보는 부분을 더 많이 리팩터링 
6. 데이터 베이스 
   * 데이터 마이그레이션 스크립트 작성
   * 접근 코드와 스키마에 대한 구조적 변경을 이 스크립트로 처리 
   * 방법
     1. 새로운 필드를 추가만 하고 사용하지 않음
     2. 기존 필드와 새로운 필드를 동시에 업데이트하도록 설정
     3. 새 필드를 사용하는 버젼으로 조금씩 교체
     4. 없어진 예전 필드 삭제
## 2.6 리팩터링, 아키첵처, 애그니(YAGNI)
* 실제 개발해 보기전에는, 설계가 가능한지 판단이 가능
  * 결국은 변경에 유연성이 필요한데, 이것을 위해 모든 상황을 고려하다 보면 변화대응에 늦게 된다.
* 리팩터링은 요구사항 변화에 쉽게 대응하도록 코드 베이스를 설계해줌
  * 그냥 현재의 요구사항에 맞춰 개발
  * 요구사항이 바뀌면, 리팩터링
* 간결한 설계, 점진적 설계, YAGNI(you aren't going to need it, 필요없을 거다)
* **선제적 아키텍처가 필여없다는것이 아니다**
## 2.7 리팩터링과 소프트웨어 개발 프로세스 
* 자가 테스트 코드 
* 지속적 통합 (CI)
* 리팩터링 
* 그런데 이게 어렵다. ㅜㅜ
## 2.8 리팩터링과 성능 
* 소프트웨어가 느려 질 수도 있지만, 튜닝하기 더 쉬워진다.
* 시스템에 대해 잘 알아도 추측하지 말고 성능을 측정해봐야 한다.
1. 우선 성능에 대해 신경 쓰지 않고, 다루기 쉬운 코드를 만드는 데 집중
2. 성능최적화 단계시
   3. 프로파일러로 분석 
   4. 큰 영향을 주는 부분을 수정
* 리팩터링된 코드 튜닝시 장점
  * 기능 추가가 빨라져서, 성능에 투자할 시간 늘어남
  * 더 세밀하게 분석이 가능해, 개선안에 대한 아이디어 도출이 용이 
## 2.9 리팩터링의 유래 
## 2.10 리팩터링 자동화 
* 좋은 IDE를 쓰면 됨
* js는 리팩터링 자동화에 좋은 언어는 아님 
## 2.11 책들
* 리팩터링 워크북 (http://www.yes24.com/Product/Goods/2148566)
* 패턴을 활용한 리팩터링 (http://www.yes24.com/Product/Goods/14752528)
* 리팩토링 데이터베이스 (http://www.yes24.com/Product/Goods/2606054)
* 레거시 코드 활용 전략 (http://www.yes24.com/Product/Goods/64586851)