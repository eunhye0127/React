// import {createRoot} from "react-dom/client"
// const rootElement = document.getElementById('root')
// const root = createRoot(rootElement)
// root.render(
//   <ul>
//     <li>Thing1</li>
//     <li>Thing2</li>
//   </ul>
// )

// //js에서 html
// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// //JSX
// const element = <h1 className = "header"> This is JSX</h1>
// console.log(element)//JSX 테크블로그에 조사해서 정리

// //challenge
// //react로 출력하기
// //h1 p 두개 출력하기
// //render() 안에는 한 덩어리만 출력됩니다.
// import {createRoot} from "react-dom/client"
// const rootElement = document.getElementById('root')
// const root = createRoot(rootElement)
// root.render(
//   <div>
//     <h1>Hi</h1>
//     <p>bye</p>
//   </div>
// )

// //challenge
// //자기소개 website react로 만들기
// //이름 학번 취미 특징 성격 mbti
// import {createRoot} from "react-dom/client"
// const rootElement = document.getElementById('root')
// const root = createRoot(rootElement)
// function Page() {
//   return(
//     <div>
//      <h1>김은혜</h1>
//      <ul>
//        <li>학번:2206</li>
//        <li>취미:게임</li>
//        <li>특징:잘잠</li>
//         <li>mbti:ENFP</li>
//      </ul>
//     </div>
//   )
// }
// root.render(
//   <Page />
// )

//challenge
//compoment 3개를 만듭니다.
//Header MainContent Footer
//Header: header nav img
//MainContent: div h1 ol li
//Footer: footer small
//자신이 좋아하는 영화 혹은 애니 소개
import { createRoot } from "react-dom/client";
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
//export default
//import Name from "./Name.js"
//파일구조로 index.js 간략화 시키기
//App.js Header.js Footer.js ManinContent.js
