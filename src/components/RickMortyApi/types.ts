
export interface Character {
  id?: string
  name?: string
  status?: string
  species?: string
  type?: string
  gender?: string
  origin?: Location
  location?: Location
  image?: string
  episode?: [string]
  url?: string
  created?: string
}

export interface Location {
  id?: string
  name?: string
  type?: string
  dimension?: string
  residents?: [string]
  url?: string
  created?: string
}

export interface Episode {
  id?: string
  name?: string
  air_date?: string
  episode?: string
  characters?: [string]
  url?: string
  created?: string
}

export interface FormData {
    name: string
    species?: string
    status?: string
    type?: string
    episode?: string
}