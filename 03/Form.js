import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    favColor: ""
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //submitToApi(formData)
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="firstname"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastname"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <textarea
        value={formData.comments}
        placeholder="comments"
        onChange={handleChange}
        name="comments"
      />
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      ></input>
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
      <br />
      <fieldset>
        <legend>Currrent employment status</legend>
        {/* 인풋을 라디오로 만든다. 3개를 만들어서 하나를 선택하도록 만든다. name은
        employment 고 각각 value와 id, 표시될 글자는 unemployed part-time,
        full-time이다. handleChange함수를 활용해서 값이 state에 잘 적용되도록
        하기 state 값 이름도 employment이다. */}
        <input
          type="radio"
          name="employment"
          id="unemployed"
          value="unemployed"
          onChange={handleChange}
          checked={formData.employment === "unemployed"}
        />
        <label htmlFor="unemployed">unemployed</label>
        <input
          type="radio"
          name="employment"
          id="part-time"
          value="part-time"
          onChange={handleChange}
          checked={formData.employment === "part-time"}
        />
        <label htmlFor="part-time">part-time</label>
        <input
          type="radio"
          name="employment"
          id="full-time"
          value="full-time"
          onChange={handleChange}
          checked={formData.employment === "full-time"}
        />
        <label htmlFor="full-time">full-time</label>
        <br />
      </fieldset>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">--Choose--</option>
        <option value="orange">orange </option>
        <option value="yellow">yellow </option>
        <option value="green">green </option>
        <option value="blue">blue </option>
        <option value="indigo">indigo </option>
        <option value="violet">violet </option>
      </select>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
//textarea
//name : comments
//state에도 적용되게 수정하시오
//handleChange에 다 적용됨

//input
//checkbox
//id랑 name isFriendly
//잘 바뀌는지 handleChange고쳐보기
//체크박스를 제외한 모든 친구들은 name: vlaue
//체크박스는 value가 아니고 checked이다.
//심지어 문자열이 아니고 참거짓이다.
//HINT 조건문이나 삼항연산자를 쓰면 된다.
//HINT 조건식은 타입으로 구분하면 된다.
