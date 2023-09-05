import { JwtPayload, JwtPayloadWithRefreshToken } from 'src/types';
import { Request } from 'express';

export const validateToken = async (
  req: Request,
  payload: JwtPayload,
): Promise<JwtPayloadWithRefreshToken> => {
  console.log({ payload });

  const refreshToken = req?.get('authorization')?.replace('Bearer ', '').trim();

  return { ...payload, refreshToken: refreshToken || null };
};
