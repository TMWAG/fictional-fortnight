const { User } = require('../models/models');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, roleId) => {
  return jwt.sign({ id: id, email, roleId }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

class UserController {
  async registration(req, res, next) {
    try {
      const { name, surname, patronymic, phone, email, password } = req.body;
      //name check
      const nameRegExp = /^[а-яА-ЯёЁa-zA-Z]+$/;
      if (!nameRegExp.test(name)) {
        return next(ApiError.badRequest('Указано некорректное имя'));
      }
      if (!nameRegExp.test(surname)) {
        return next(ApiError.badRequest('Указана некорректная фамилия'));
      }
      if (patronymic) {
        if (!nameRegExp.test(patronymic)) {
          return next(ApiError.badRequest('Указано некорректное отчество'));
        }
      }
      //phone check
      const phoneRegExp =
        /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;
      if (!phoneRegExp.test(phone)) {
        return next(ApiError.badRequest('Указан некорректный номер телефона'));
      }
      const phoneCheck = await User.findOne({ where: { phone } });
      if (phoneCheck) {
        return next(
          ApiError.badRequest(
            'Пользователь с таким телефоном уже зарегистрирован'
          )
        );
      }
      //email check
      const emailRegExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
      if (!emailRegExp.test(email)) {
        return next(ApiError.badRequest('Указан некорректный email'));
      }
      const emailCheck = await User.findOne({ where: { email } });
      if (emailCheck) {
        return next(
          ApiError.badRequest('Пользователь с таким email уже зарегистрирован')
        );
      }
      //password check
      const passwordRegExp =
        /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
      if (!passwordRegExp.test(password)) {
        return next(ApiError.badRequest('Задан слишком простой пароль'));
      }
      const roleId = process.env.DEFAULT_USER_ROLE_ID;
      const hashPassword = await bcrypt.hash(password, 6);
      const user = await User.create({
        name,
        surname,
        patronymic,
        phone,
        email,
        password: hashPassword,
        roleId,
      });
      const token = generateJwt(user.id, user.email, user.roleId);
      return res.json({ token });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return next(ApiError.internal('Пользователь с таким email не найден'));
      }
      let comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
        return next(ApiError.internal('Указан неверный пароль'));
      }
      const token = generateJwt(user.id, user.email, user.roleId);
      return res.json({ token });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async auth(req, res, next) {
    try {
      const token = generateJwt(req.user.id, req.user.email, req.user.roleId);
      return res.json({ token });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new UserController();
