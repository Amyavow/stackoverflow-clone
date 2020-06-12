import User from '../models/User';

export default class UserController {
  static searchUsers(req, res) {
    User.find({ name: { $regex: req.query.name, $options: 'i' } }, (err, response) => {
      if (err) {
        res.send(err);
      }
      return res.status(200).json({
        success: true,
        data: response,
      });
    })
      .sort({ date: 'desc' });
  }
}
