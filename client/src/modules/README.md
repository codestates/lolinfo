A module…

MUST export default a function called reducer()
리듀서는 export default

MUST export its action creators as functions
액션생성자는 export

MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
액션타입들은 /reducer/ACTION_TYPE 형태로

MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library
액션타입의 이름은 스네이크케이스로

리덕스, Ducks 패턴