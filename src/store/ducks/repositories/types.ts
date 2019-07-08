/**
 * Action types
 */
 export enum RepositoriesTypes {
   LOAD_REQUEST = '@Repositories/LOAD_REQUEST',
   LOAD_SUCCESS = '@Repositories/LOAD_SUCCESS',
   LOAD_FAILURE = '@Repositories/LOAD_FAILURE',
 }

/**
 * Data types
 */
export interface Repository {
  id: number
  name: string
}

/**
 * State Type
 */
export interface RepositoriesState {
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
}
