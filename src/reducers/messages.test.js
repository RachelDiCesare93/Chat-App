import messages from './messages'
import * as types from '../constants/ActionTypes'

describe('Messages reducer', () => {
  it('should return the initial state, empty', () => {
    expect(messages(undefined, {})).toEqual([])
  }) 
  
  it('should handle ADD_MESSAGE and store every message', () => {
    expect(
      messages([], {
         type: types.ADD_MESSAGE,
         messages: 'Hello',
         author: 'Me'
      })
    ).toEqual([
     {
       message: 'Hello',
       author: 'Me'
     }
    ])

    expect(
      messages(
        [
          {
              message: 'Hello',
              author: 'Me'
          }
        ],
        {
            type: types.ADD_MESSAGE,
            message: 'Hello again',
            author: 'Me again'
        }
      )
    ).toEqual([
      {
          message: 'Hello',
          author: 'Me'
      },
      {
          message: 'Hello again',
          author: 'Me again'
      }
    ])
  })
})