# 센터가 좋아요
## 맞춤법 게임

👋팀소개

![image](./image/logos.JPG)


- #### 팀 이름 : 센터가 좋아요
- #### 팀장 : 정혜일
- #### 팀원 : 정혜일, 박창환, 김찬혁, 이상현, 오승진, 양성훈
- #### 역할 :

| 프론트 | 백엔드 |  
|---|---|  
| - 양성훈 </br> - 김찬혁 </br> - 오승진 | - 정혜일 </br> - 박창환 </br> - 이상현 |

</br></br>
# 📝개요  

- ## **공공데이터를 활용한 맞춤법 게임**  
인터넷에는 이런 문장이 유머로 떠돕니다.
‘마마잃은 중천공’, ‘일해라 절해라 하지 마’. 누리꾼들이 올린 실화에서 따온 문장들입니다.
남아 일언 중천금이 마마잃은 중천공으로, 이래라저래라 하지 마가 일해라 절해라 하지 마로 변형된 것인데요. 틀린 맞춤법의 극단적인 예시입니다.
</br>
다들 위의 문장들을 보고 웃으셨나요? 실소라도 흘리셨나요?
그렇다면 여러분은, ‘뵈요’/‘봬요’, ‘해도 되?’/‘해도 돼?’, ‘뭐에요?’/‘뭐예요?’. 둘 중 어떤 것이 옳은지 구별할 수 있으신가요?
</br>
이러한 문제점을 해결하기 위해 맞춤법 문제 공공데이터를 활용하여 맞춤법 게임을 통해 맞춤법 실력을 증진시키고자 이 프로젝트를 진행하였습니다.
</br></br>
# 📋Datebase Schema

<div align="center">
  <figure>
      <img src="./image/schema.PNG" alt="DB 스키마">
      <div align="center"><figcation>MySQL DB schema</figcation></div>
  </figure>
</div>

 
</br></br>
# 📈구성도
- **Usecase Diagram**

<div align="center">
  <figure>
      <img src="./image/diagram.PNG" alt="usecase diagram">
      <div align="center"><figcation>UseCase Diagram</figcation></div>
  </figure>
</div>

- **Component Diagram**

<div align="center">
  <figure>
      <img src="./image/componentDiagram.PNG" alt="package diagram">
      <div align="center"><figcation>Package Diagram</figcation></div>
  </figure>
</div>
 
</br></br>
# 📐동작 구현
1. 웹페이지에 접속 시 게임 UI가 나타남
2. 게임시작 버튼을 누르면 getQuizList url을 통해 문제를 랜덤하게 가져옴
3. 1문제에 10초의 제한시간을 주고 시간안에 풀지 못하거나 오답을 선택할 시 라이프 1개 감소함
4. 라이프를 모두 소진했을 시 게임이 끝나고 닉네임과 이메일을 insertUser url을 통해 score와 사용자 정보를 업데이트함
5. getScoreList url을 통해 랭킹을 가져옴
</br></br>
# 👀실행 화면 

<div align="center">
  <figure>
      <img src="./image/main.JPG" alt="메인 화면">
      <div align="center"><figcation>메인 화면</figcation></div>
  </figure>
</div>

<br>

<div align="center">
  <figure>
      <img src="./image/example.JPG" alt="게임 화면">
      <div align="center"><figcation>게임 화면</figcation></div>
  </figure>
</div>

<br>

<div align="center">
  <figure>
      <img src="./image/correct.JPG" alt="정답 화면">
      <div align="center"><figcation>정답 화면</figcation></div>
  </figure>
</div>

<br>

<div align="center">
  <figure>
      <img src="./image/wrong.JPG" alt="오답 화면">
      <div align="center"><figcation>오답 화면</figcation></div>
  </figure>
</div>

<br>

<div align="center">
  <figure>
      <img src="./image/nick.JPG" alt="사용자 정보 화면">
      <div align="center"><figcation>사용자 정보 화면</figcation></div>
  </figure>
</div>

<br>

<div align="center">
  <figure>
      <img src="./image/rank.JPG" alt="랭크 화면">
      <div align="center"><figcation>랭크 화면</figcation></div>
  </figure>
</div>

</br></br>

# 🎈결론
맞춤법 게임을 통해 즐겁게 맞춤법 실력을 향상시킬 수 있게 되고 사회적으로 문제였던 맞춤법 문제를 해결할 수 있다. 

# 🎈바램
망가졌던 우리의 언어습관과 부족했던 맞춤법 지식을 게임을 통해 향상시키면서 재미도 느꼈으면 좋겠다.
</br></br>
</br></br>

![image](./image/somalogo.JPG)
