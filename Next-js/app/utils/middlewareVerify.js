import jwt from 'jsonwebtoken';
import env from 'dotenv';

env.config();

/**
 * 
 * @param {import('jsonwebtoken').Jwt} accessToken the jwt acccess token
 * @returns {import('jsonwebtoken').JwtPayload | false}
 * @description Verify the access token and return the payload if it is valid and otherwise return false
 */
function varifyToken(accessToken) {
   try {
      const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET, {complete: true}).payload
      if (decoded.sub) return decoded
   } catch (error) {}

   return false;
}

export default varifyToken;