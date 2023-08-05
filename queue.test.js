const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    // Seu código aqui
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
   // Seu código aqui
  })

  it('Deve escolher o primeiro item da fila', () => {
    // Seu código aqui
  })

  it('Deve remover o primeiro item da fila', () => {
    // Seu código aqui
  })
})