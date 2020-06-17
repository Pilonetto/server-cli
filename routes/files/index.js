const pump = require('pump');
const fs = require('fs');

module.exports = function (fastify, opts, next) {
  fastify.post('/files/upload', {}, async function (request, reply) {
    const options = {};
    const mp = request.multipart(handler, done, options);
    var name = '';

    function done(err) {
      console.log('upload completed');
      setTimeout(() => {
        var contents = fs.readFileSync(name).toString('base64');
        console.log(contents.length);
        if (contents.length > 0) {
          reply.code(200).send({ msg: 'Sucesso' });
        } else {
          reply.code(200).send({ msg: 'Falha' });
        }
      }, 10000);
    }

    function handler(field, file, filename, encoding, mimetype) {
      name = filename;
      pump(file, fs.createWriteStream(filename));
    }
  });

  next();
};
