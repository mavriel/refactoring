# 리팩터링

## 0. 들어가며
* 리팩터링이란
    * 겉으로 드러나는 코드의 기능은 바꾸지 않으면서 내부 구조를 개서하느 방식으로 소프트웨어 시스템을 수정하는 과정
    * 코딩 후 설계 개선
    * 처음부터 완벽한 설계를 갖추기보다는 개발을 진행하면서 지속적으로 설계
* 덕타이핑
    * 자바스크립트에서는 *구조*를 기준으로 타입을 구분한다.
    * 클래스이름과 상관없이 특정 필드와 메서드를 지닌 객체라면 같은 타입으로 간주한다.

## 1. 리팩터링: 첫 번째 예시
* 잘 동작하는 프로그램을 지저분하다고 고쳐도 될까?
    * 코드를 수정하려면 사람의 개입이 필요
    * 사람은 코드의 미적 상태에 민감
    * 설계가 나쁜 시스템은 수정이 어렵다.
    * 무엇을 수정할지 찾기가 어려우면 실수로 인한 버그 가능성 높아짐
>> 프로그램이 새로운 기능을 추가하기에 편한 구조가 아니라면, 먼저 기능을 추가하기 쉬운 형태로 리팩터링하고 원하는 기능을 추가한다.