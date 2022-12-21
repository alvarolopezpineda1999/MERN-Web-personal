const Newsletter = require('../models/newsletter');

function subscribeEmail(req, res) {
  const rawEmail = req.body.email;
  email = rawEmail.replace(/\s+/g, '');
  if (!email) return res.status(400).send({ msg: 'El email es obligatorio' });

  const newsletter = new Newsletter({
    email: email.toLowerCase(),
  });

  newsletter.save((error) => {
    if (error) {
      res.status(400).send({ msg: 'El email ya esta registrado' });
    } else {
      res.status(200).send({ msg: 'Email registrado correctamente' });
    }
  });
}

function getEmails(req, res) {
  const { page = 1, limit = 10 } = req.query;
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };

  Newsletter.paginate({}, options, (error, emailStored) => {
    if (error) {
      res.status(400).send({ msg: 'Error al obtener los emails' });
    } else {
      res.status(200).send(emailStored);
    }
  });
}

function deleteEmail(req, res) {
  const { id } = req.params;

  Newsletter.findByIdAndDelete(id, (error) => {
    if (error) {
      res.status(400).send({ msg: 'Error al eliminar el email' });
    } else {
      res.status(200).send({ msg: 'Email eliminado correctamente' });
    }
  });
}

module.exports = {
  subscribeEmail,
  getEmails,
  deleteEmail,
};
