const schemas = require('../../schemas/auth');

module.exports = function (fastify, opts, next) {
  fastify.post('/log/save', { schema: schemas.log }, async function (request, reply) {
    console.log(request.body);
    const { message } = request.body;
    const { deviceid } = request.body;
    fastify.mysql.query(
      'INSERT INTO tbl_logs (`device`, `message`) VALUES (?,?)',
      [deviceid, message],
      (err, result) => {
        console.log(err || result);
        if (err) {
          reply.status(401).send({ message: 'Falha' });
        } else {
          reply.send({ message: 'Log salvo' });
        }
      }
    );
  }),
    fastify.post('/log/delete', { schema: schemas.del }, async function (request, reply) {
      console.log(request.body);
      const { deviceid } = request.body;

      if (deviceid == 'ALL') {
        fastify.mysql.query('DELETE FROM tbl_readings', [], (err, result) => {
          console.log(err || result);
          if (err) {
            reply.status(401).send({ message: 'Falha' });
          } else {
            reply.send({ message: 'Medidas deletadas' });
          }
        });
      } else {
        fastify.mysql.query('DELETE FROM tbl_readings where deviceid', [deviceid], (err, result) => {
          console.log(err || result);
          if (err) {
            reply.status(401).send({ message: 'Falha' });
          } else {
            reply.send({ message: 'Log salvo' });
          }
        });
      }
    }),
    fastify.get('/log/leituras/:deviceid', { schema: schemas.leituras }, async function (request, reply) {
      //   const { deviceid } = request.body;

      console.log(request.params.deviceid);
      fastify.mysql.query('select * from tbl_readings', [], (err, result) => {
        console.log(err);
        if (err) {
          reply.status(401).send({ retorn: [] });
        } else if (result.length == 0) {
          reply.status(200).send({ retorno: [] });
        } else {
          reply.status(200).send({ retorno: result });
        }
      });
    }),
    fastify.post('/log/readers', { schema: schemas.readers }, async function (request, reply) {
      console.log(request.body);
      const { message } = request.body;
      const { deviceid } = request.body;
      const { sread1 } = request.body;
      const { sread2 } = request.body;
      const { sread3 } = request.body;
      const { sread4 } = request.body;
      const { sread5 } = request.body;
      const { sread6 } = request.body;
      const { sread7 } = request.body;
      const { sread8 } = request.body;
      const { sstatus1 } = request.body;
      const { sstatus2 } = request.body;
      const { sstatus3 } = request.body;
      const { sstatus4 } = request.body;
      const { sable1 } = request.body;
      const { sable2 } = request.body;
      const { sable3 } = request.body;
      const { sable4 } = request.body;
      const { status } = request.body;
      fastify.mysql.query(
        'INSERT INTO `tbl_readings`(`deviceid`, `sread1`, `sread2`, `sread3`, `sread4`, `sread5`, `sread6`, `sread7`, `sread8`, `sstatus1`, `sstatus2`, `sstatus3`, `sstatus4`, `sable1`, `sable2`, `sable3`, `sable4`, `status`)  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [
          deviceid,
          sread1,
          sread2,
          sread3,
          sread4,
          sread5,
          sread6,
          sread7,
          sread8,
          sstatus1,
          sstatus2,
          sstatus3,
          sstatus4,
          sable1,
          sable2,
          sable3,
          sable4,
          status,
        ],
        (err, result) => {
          console.log(err || result);
          if (err) {
            reply.status(401).send({ message: 'Falha' });
          } else {
            reply.send({ message: 'Log salvo' });
          }
        }
      );
    });
  next();
};
