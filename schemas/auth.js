const log = {
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
  body: {
    type: 'object',
    properties: {
      message: { type: 'string', minLength: 1 },
      deviceid: { type: 'string', minLength: 1 },
    },
  },
};

const del = {
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
  body: {
    type: 'object',
    properties: {
      deviceid: { type: 'string', minLength: 1 },
    },
  },
};

const readers = {
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
  body: {
    type: 'object',
    properties: {
      deviceid: { type: 'string', minLength: 1 },
      status: { type: 'number' },
      sread1: { type: 'number' },
      sread2: { type: 'number' },
      sread3: { type: 'number' },
      sread4: { type: 'number' },
      sread5: { type: 'number' },
      sread6: { type: 'number' },
      sread7: { type: 'number' },
      sread8: { type: 'number' },
      sstatus1: { type: 'number' },
      sstatus2: { type: 'number' },
      sstatus3: { type: 'number' },
      sstatus4: { type: 'number' },
      sable1: { type: 'number' },
      sable2: { type: 'number' },
      sable3: { type: 'number' },
      sable4: { type: 'number' },
    },
  },
};

const leituras = {
  params: {
    type: 'object',
    properties: {
      deviceid: {
        type: 'string',
        description: 'Código do dispositivo',
      },
    },
  },

  response: {
    200: {
      description: 'Successful response result is array of objects',
      type: 'object',
      properties: {
        retorno: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              dt_read: { type: 'string' },
              deviceid: { type: 'string', minLength: 1 },
              status: { type: 'number' },
              sread1: { type: 'number' },
              sread2: { type: 'number' },
              sread3: { type: 'number' },
              sread4: { type: 'number' },
              sread5: { type: 'number' },
              sread6: { type: 'number' },
              sread7: { type: 'number' },
              sread8: { type: 'number' },
              sstatus1: { type: 'number' },
              sstatus2: { type: 'number' },
              sstatus3: { type: 'number' },
              sstatus4: { type: 'number' },
              sable1: { type: 'number' },
              sable2: { type: 'number' },
              sable3: { type: 'number' },
              sable4: { type: 'number' },
            },
          },
        },
      },
    },
  },
};

const appauth = {
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        login: { type: 'string' },
        name: { type: 'string' },
      },
    },
  },
  body: {
    type: 'object',
    properties: {
      username: { type: 'string', minLength: 1 },
      password: { type: 'string', minLength: 1 },
    },
    required: ['username', 'password'],
  },
};

module.exports = { log, appauth, leituras, del };
