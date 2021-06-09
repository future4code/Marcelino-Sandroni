import axios from 'axios'

const baseURL = 'https://viacep.com.br/ws/'
const endURL = '/json'

const viaCep = axios.create({baseURL})

export interface Cep {
  cep: string
  street: string
  complement: string
  district: string
  city: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

export const getCep = async (cep: string): Promise<Cep | void> => {
  try {
    const cepSearch = await viaCep.get(cep + endURL)
    return cepSearch.data as Cep
  } catch (e) {
    console.error(e)
  }
}
