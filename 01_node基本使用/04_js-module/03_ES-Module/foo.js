const name = 'dwj'
const age = 22
export const sex = '男'

export default function () {
  console.log('默认导出')
}

setTimeout(() => {
  name = 'ww'
}, 1000)

export {
  name as fName,
  age
}
