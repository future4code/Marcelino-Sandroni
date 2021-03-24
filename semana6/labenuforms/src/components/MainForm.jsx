import { TextField, SelectField } from '../components/styled'

export const MainForm = ({questions}) => {
  console.log(questions)
  
  // const generateQuestions = list => {
  //   let result = list.map(questions => {
  //     if (Array.isArray(questions)) {
  //       return (
  //         <div>
  //           <p>{questions[0]}</p>
  //         <SelectField>
  //           <option value="" selected>Escolha uma opção</option>
  //           {questions.slice(1).map(q => <option value={q}>{q}</option>)}
  //         </SelectField>
  //         </div>
  //       )
  //     } else {
  //       return (
  //         <div>
  //             <p>{questions}</p>
  //             <TextField />
  //         </div>
  //       )
  //     }
  //   }

    // console.log(result)
    //return result
  
 //const result = generateQuestions(questions)

 const result = questions.map(q => {
   if(Array.isArray(q)) {
     return (
       <div>
         <p>{q[0]}</p>
         <SelectField>
           {q.map(i => (<option>{i}</option>))}
         </SelectField>
       </div>
     )

   } else {
     return (
       <div>
         <p>{q}</p>
        <TextField />
       </div>
     )
   }
   
 })


 const testIf = questions.map(q => {
   if(Array.isArray(q)) {
     return q.map(i=><li>{i}</li>)
   } else {
     return <p>{q}</p>
   }
  })
  

 const test = questions.map(q => 
   Array.isArray(q) ? q.map(i=><li>{i}</li>):<p>{q}</p>)

  return testIf
  return result
  //return (<TextField></TextField>)
}