import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SupabaseClient } from '@supabase/auth-helpers-react';
import type { NextApiRequest, NextApiResponse } from 'next';

import { MIN_SLUG_LENGTH } from '@/lib/constants';
import { Database } from '@/types/supabase';
import { DbTeam } from '@/types/types';

type Data =
  | {
      status?: string;
      error?: string;
    }
  | boolean;

const allowedMethods = ['POST'];

export const isProjectSlugAvailable = async (
  supabase: SupabaseClient<Database>,
  teamId: DbTeam['id'],
  slug: string,
) => {
  if (!slug || slug.trim().length < MIN_SLUG_LENGTH) {
    return false;
  }

  const { count } = await supabase
    .from('projects')
    .select('slug', { count: 'exact' })
    .match({ team_id: teamId, slug: slug });
  return count === 0;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (!req.method || !allowedMethods.includes(req.method)) {
    res.setHeader('Allow', allowedMethods);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const supabase = createServerSupabaseClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const isAvailable = await isProjectSlugAvailable(
    supabase,
    req.body.teamId,
    req.body.slug,
  );

  return res.status(200).json(isAvailable);
}
