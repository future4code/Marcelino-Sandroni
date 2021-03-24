// Question list to use in forms
// Keep it simple, filtered by stage
export const questions = [
  // [1, 'Nome'],
  // [1, 'Idade'],
  // [1, 'Email'],
  // [1, 'Grau de Escolaridade', 
  //   'Medio Incompleto', 
  //   'Medio Completo', 
  //   'Superior Incompleto', 
  //   'Superior Completo'
  // ],
  [
    'Nome',
    'Idade',
    'Email',
    [
      'Grau de Escolaridade',
      'Ensino Médio Incompleto', 
      'Ensino Médio Completo', 
      'Superior Incompleto', 
      'Superior Completo'
    ]
  ],
  [
    'Qual o curso?',
    'Qual a unidade de ensino?'
  ],
  [
    'Por que você não terminou um curso de graduação?',
    [
      'Você fez algum curso complementar?',
      'Curso técnico',
      'Cursos de inglês',
      'Não fiz curso complementar'
    ]
  ]
]