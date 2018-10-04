import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3000');

function entered(cb) {
  socket.on('actor.entered', ({ actor, number, call_id }) => {
    cb(null, { actor, number, call_id })
  });

}

function finished(cb) {
  socket.on('call.finished', ({ call_id }) => {
    cb(null, call_id);
  })
}

export {
  entered,
  finished
}