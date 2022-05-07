import * as React from 'react';
import { useState } from "react"

export default function BasicTextFields({ index, lang }) {
  let [language, setLanguage] = useState("")

  return (
    <>
      <label className="label" for="name">Текст вопроса</label>
      <input type="text" id="name" required="" v-model="name" name={index} />
      <label className="label" for="name">Язык программирования </label>
      <p className="select">
        <select
          name={`select-${index}`}
          className="budget"
          v-model="selection.member"
          value={language}
          label="language"
          onChange={(event) => {
            setLanguage(event.target.value);
          }}>
          <option ></option>
          {lang.map((item, index) => <option key={index} id={10} value={item.id}>{item.id}.{item.programmingLanguage}</option>)}
        </select>
      </p>

    </>
  );
}
