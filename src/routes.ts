import {Router} from 'express'
import {jwtSign} from './util/jwt'

const router = Router()

router.post('/login', (req, res) => {
  const {login, password} = req.body
    let payload = {
      _id: '1',
      login
    }
    let token = jwtSign(payload)
  res.json({token});
});

export default router;